import type { MetadataRoute } from 'next';
import { getAllDocMetas } from '@/lib/content';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const metas = await getAllDocMetas();

  const now = new Date().toISOString();
  const staticPages: MetadataRoute.Sitemap = [
    { url: new URL('/', SITE.baseUrl).toString(), lastModified: now },
    { url: new URL('/index-fr', SITE.baseUrl).toString(), lastModified: now },
    { url: new URL('/index-de', SITE.baseUrl).toString(), lastModified: now },
    { url: new URL('/index-es', SITE.baseUrl).toString(), lastModified: now },
  ];

  const mdxPages = metas.map((m) => ({
    url: new URL(m.canonical ?? m.routePath, SITE.baseUrl).toString(),
    lastModified: m.updatedAt ?? m.date ?? now,
  }));

  return [...staticPages, ...mdxPages];
}
