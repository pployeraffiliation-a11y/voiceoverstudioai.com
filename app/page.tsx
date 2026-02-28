import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDocMetas, getDocMetaByRouteSegments, getPostByRouteSegments } from '@/lib/content';
import { buildAlternates, getOpenGraphImage, getOpenGraphType, parseRobots } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getDocMetaByRouteSegments([]);
  if (!meta) return {};
  const all = await getAllDocMetas();

  const ogImage = getOpenGraphImage(meta);
  const canonical = meta.canonical ?? meta.routePath;

  return (
    {
      title: meta.title,
      description: meta.description,
      alternates: buildAlternates(meta, all),
      robots: parseRobots(meta.robots),
      openGraph: {
        type: getOpenGraphType(meta),
        title: meta.title,
        description: meta.description,
        url: canonical,
        images: [{ url: ogImage }],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
        images: [ogImage],
      },
    }
  );
}

export default async function HomePage() {
  const post = await getPostByRouteSegments([]);
  if (!post) return notFound();
  return <>{post.content}</>;
}
