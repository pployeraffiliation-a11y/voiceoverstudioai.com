import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { Post, PostType } from '@/lib/types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type Frontmatter = {
  title: string;
  description: string;
  canonical?: string;
  lang?: string;
  translationKey?: string;
  date?: string;
  updatedAt?: string;
  robots?: string;
  type?: PostType;
};

export type DocMeta = {
  segments: string[];
  routePath: string;
  slug: string;
  title: string;
  description: string;
  canonical: string;
  lang?: string;
  translationKey?: string;
  date?: string;
  updatedAt?: string;
  robots?: string;
  type?: PostType;
};

async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.stat(filePath);
    return true;
  } catch {
    return false;
  }
}

function segmentsToRoutePath(segments: string[]): string {
  return segments.length ? `/${segments.join('/')}` : '/';
}

function segmentsFromMdxRelativePath(relativePath: string): string[] {
  const noExt = relativePath.replace(/\.mdx$/, '');
  const rawSegments = noExt.split(/[/\\]+/).filter(Boolean);
  if (rawSegments.at(-1) === 'index') rawSegments.pop();
  return rawSegments;
}

async function listMdxFiles(dir: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await listMdxFiles(fullPath)));
      continue;
    }
    if (!entry.isFile()) continue;
    if (!entry.name.endsWith('.mdx')) continue;
    if (entry.name.startsWith('_')) continue;
    out.push(fullPath);
  }

  return out.sort();
}

export async function getAllDocMetas(): Promise<DocMeta[]> {
  const files = await listMdxFiles(CONTENT_DIR);
  const items: DocMeta[] = [];

  for (const filePath of files) {
    const relative = path.relative(CONTENT_DIR, filePath).replace(/\\/g, '/');
    const segments = segmentsFromMdxRelativePath(relative);
    const routePath = segmentsToRoutePath(segments);
    const slug = segments.join('/');

    const raw = await fs.readFile(filePath, 'utf8');
    const { data } = matter(raw);
    const fm = data as Frontmatter;

    items.push({
      segments,
      routePath,
      slug,
      title: fm.title,
      description: fm.description,
      canonical: fm.canonical ?? routePath,
      lang: fm.lang,
      translationKey: fm.translationKey,
      date: fm.date,
      updatedAt: fm.updatedAt,
      robots: fm.robots,
      type: fm.type,
    });
  }

  return items;
}

export async function getDocMetaByRouteSegments(segments: string[]): Promise<DocMeta | null> {
  const filePath = await resolveMdxFilePath(segments);
  if (!filePath) return null;

  const relative = path.relative(CONTENT_DIR, filePath).replace(/\\/g, '/');
  const resolvedSegments = segmentsFromMdxRelativePath(relative);
  const routePath = segmentsToRoutePath(resolvedSegments);
  const slug = resolvedSegments.join('/');

  const raw = await fs.readFile(filePath, 'utf8');
  const { data } = matter(raw);
  const fm = data as Frontmatter;

  return {
    segments: resolvedSegments,
    routePath,
    slug,
    title: fm.title,
    description: fm.description,
    canonical: fm.canonical ?? routePath,
    lang: fm.lang,
    translationKey: fm.translationKey,
    date: fm.date,
    updatedAt: fm.updatedAt,
    robots: fm.robots,
    type: fm.type,
  };
}

async function resolveMdxFilePath(segments: string[]): Promise<string | null> {
  if (segments.length === 0) {
    const root = path.join(CONTENT_DIR, 'index.mdx');
    return (await exists(root)) ? root : null;
  }

  const direct = path.join(CONTENT_DIR, ...segments) + '.mdx';
  if (await exists(direct)) return direct;

  const asIndex = path.join(CONTENT_DIR, ...segments, 'index.mdx');
  if (await exists(asIndex)) return asIndex;

  return null;
}

export async function getAllStaticParams(): Promise<Array<{ slug: string[] }>> {
  const metas = await getAllDocMetas();
  return metas.map((m) => ({ slug: m.segments }));
}

export async function getPostByRouteSegments(segments: string[]): Promise<Post | null> {
  const filePath = await resolveMdxFilePath(segments);
  if (!filePath) return null;

  const raw = await fs.readFile(filePath, 'utf8');
  const { content: mdxSource, data } = matter(raw);
  const fm = data as Frontmatter;

  // Build-time compilation of trusted local MDX.
  const compiled = await compileMDX({
    source: mdxSource,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        // Security: block JS in MDX compilation
        // (next-mdx-remote v6 defaults are safe; we keep it explicit)
        // @ts-expect-error - options are passed through
        blockDangerousJS: true,
        blockJS: true,
      },
    },
  });

  const slug = segments.join('/');

  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    updatedAt: fm.updatedAt,
    canonical: fm.canonical,
    type: fm.type,
    lang: fm.lang,
    translationKey: fm.translationKey,
    robots: fm.robots,
    headings: [],
    content: compiled.content,
  };
}
