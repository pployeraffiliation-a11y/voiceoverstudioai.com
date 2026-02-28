import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllDocMetas } from '@/lib/content';
import type { Lang } from '@/lib/site';
import { blogIndexPath, guidePath, legalNoticePath, playbookPath, privacyPath, SITE, UI_TRANSLATIONS } from '@/lib/site';

export const metadata: Metadata = {
  title: `${SITE.brandName} — Páginas`,
  description: 'Listado de páginas: guía, blog y páginas legales.',
  alternates: { canonical: '/index-es' },
  openGraph: {
    type: 'website',
    title: `${SITE.brandName} — Páginas`,
    description: 'Listado de páginas: guía, blog y páginas legales.',
    url: '/index-es',
  },
};

export default async function HomePageEs() {
  const lang: Lang = 'es';
  const t = UI_TRANSLATIONS[lang];
  const metas = await getAllDocMetas();
  const pages = metas.filter((m) => (m.lang ?? 'en') === lang).sort((a, b) => a.routePath.localeCompare(b.routePath));

  const pinned = [
    guidePath(lang),
    blogIndexPath(lang),
    playbookPath(lang),
    privacyPath(lang),
    legalNoticePath(lang),
  ].map((p) => p.replace(/\/+$/, ''));

  const pinnedItems = pinned
    .map((p) => pages.find((m) => (m.routePath.replace(/\/+$/, '') === p) || (m.canonical ?? '').replace(/\/+$/, '') === p))
    .filter(Boolean);

  const otherItems = pages.filter((m) => !pinned.includes(m.routePath.replace(/\/+$/, '')));

  return (
    <div className="stack">
      <section className="hero">
        <h1>{SITE.brandName}</h1>
        <p>Todas las páginas: {t.guide}, {t.blog}, {t.privacy}, {t.legal}.</p>
      </section>

      <section className="card" aria-label="Pages">
        <h2>Páginas</h2>
        <ul className="list">
          {pinnedItems.map((p) => (
            <li key={p!.routePath}>
              <Link href={p!.routePath}>{p!.title}</Link>
              <div className="muted">{p!.description}</div>
            </li>
          ))}
          {otherItems.map((p) => (
            <li key={p.routePath}>
              <Link href={p.routePath}>{p.title}</Link>
              <div className="muted">{p.description}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

