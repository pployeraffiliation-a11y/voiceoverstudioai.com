import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllDocMetas } from '@/lib/content';
import type { Lang } from '@/lib/site';
import {
  adsPath,
  alternativesPath,
  apiPath,
  aboutPath,
  blogIndexPath,
  contactPath,
  dubbingPath,
  elearningPath,
  guidePath,
  homePath,
  methodologyPath,
  podcastsPath,
  playbookPath,
  pricingPath,
  projectsPath,
  promptsPath,
  SITE,
  sourcesPath,
  UI_TRANSLATIONS,
  youtubePath,
} from '@/lib/site';

const HOME_LANGUAGES = Object.fromEntries(SITE.supportedLangs.map((l) => [l, homePath(l)]));
const OG_IMAGE = '/assets/images/capture-hero.png';

export const metadata: Metadata = {
  title: `${SITE.brandName} — Guides ElevenLabs (2026)`,
  description: 'Guides et workflows ElevenLabs (2026) : prix, prompts, dubbing, Projects, API, YouTube, podcasts et e-learning.',
  alternates: { canonical: homePath('fr'), languages: HOME_LANGUAGES },
  openGraph: {
    type: 'website',
    title: `${SITE.brandName} — Guides ElevenLabs (2026)`,
    description: 'Guides et workflows ElevenLabs (2026) : prix, prompts, dubbing, Projects, API, YouTube, podcasts et e-learning.',
    url: homePath('fr'),
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.brandName} — Guides ElevenLabs (2026)`,
    description: 'Guides et workflows ElevenLabs (2026) : prix, prompts, dubbing, Projects, API, YouTube, podcasts et e-learning.',
    images: [OG_IMAGE],
  },
};

export default async function HomePageFr() {
  const lang: Lang = 'fr';
  const t = UI_TRANSLATIONS[lang];
  const metas = await getAllDocMetas();
  const pages = metas.filter((m) => (m.lang ?? 'en') === lang).sort((a, b) => a.routePath.localeCompare(b.routePath));

  const pinned = [
    guidePath(lang),
    blogIndexPath(lang),
    playbookPath(lang),
    pricingPath(lang),
    promptsPath(lang),
    dubbingPath(lang),
    alternativesPath(lang),
    projectsPath(lang),
    apiPath(lang),
    youtubePath(lang),
    podcastsPath(lang),
    elearningPath(lang),
    adsPath(lang),
    aboutPath(lang),
    methodologyPath(lang),
    sourcesPath(lang),
    contactPath(lang),
  ].map((p) => p.replace(/\/+$/, ''));

  const otherItems = pages.filter((m) => !pinned.includes(m.routePath.replace(/\/+$/, '')));

  return (
    <div className="stack">
      <section className="hero">
        <h1>{SITE.brandName}</h1>
        <p>Commencez par le guide, puis utilisez le hub blog pour les prix, prompts, workflows de dubbing et comparatifs.</p>
      </section>

      <section className="card" aria-label="Start here">
        <h2>Commencer ici</h2>
        <ul className="list">
          <li>
            <Link href={guidePath(lang)}>Guide</Link>
            <div className="muted">Page pilier principale pour les démos, workflows et use cases ElevenLabs.</div>
          </li>
          <li>
            <Link href={playbookPath(lang)}>Playbook 2026</Link>
            <div className="muted">Article opératoire sur la voix off, le dubbing, Projects et l’API.</div>
          </li>
          <li>
            <Link href={blogIndexPath(lang)}>Hub blog</Link>
            <div className="muted">Toutes les pages du cluster autour des prix, prompts, dubbing et comparatifs.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Cluster ElevenLabs">
        <h2>Cluster ElevenLabs</h2>
        <ul className="list">
          <li>
            <Link href={pricingPath(lang)}>Prix (2026)</Link>
            <div className="muted">Choisir la bonne formule selon le workflow, pas selon le volume affiché.</div>
          </li>
          <li>
            <Link href={promptsPath(lang)}>Prompts (2026)</Link>
            <div className="muted">Structures de prompts, glossaire et phrases d’ancrage pour une direction stable.</div>
          </li>
          <li>
            <Link href={dubbingPath(lang)}>Workflow de dubbing (2026)</Link>
            <div className="muted">Préparation des sous-titres, première minute, QA multilingue.</div>
          </li>
          <li>
            <Link href={alternativesPath(lang)}>Alternatives (2026)</Link>
            <div className="muted">Comparer d’autres modèles opératoires avant de remplacer la stack.</div>
          </li>
          <li>
            <Link href={projectsPath(lang)}>Projects (2026)</Link>
            <div className="muted">Structurer la production longue avec des blocs relisibles et des validations plus nettes.</div>
          </li>
          <li>
            <Link href={apiPath(lang)}>API (2026)</Link>
            <div className="muted">Utiliser batch ou streaming avec moins de dérive et des règles plus claires.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Use cases">
        <h2>Use cases</h2>
        <ul className="list">
          <li>
            <Link href={youtubePath(lang)}>YouTube (2026)</Link>
            <div className="muted">Voix off, Shorts, dubbing et QA finale pour publier en vidéo.</div>
          </li>
          <li>
            <Link href={podcastsPath(lang)}>Podcasts (2026)</Link>
            <div className="muted">Segments récurrents, sponsors et habitudes de review adaptées à l’écoute.</div>
          </li>
          <li>
            <Link href={elearningPath(lang)}>E-learning (2026)</Link>
            <div className="muted">Cours modulaires, glossaire stable et diffusion multilingue scalable.</div>
          </li>
          <li>
            <Link href={adsPath(lang)}>Publicité (2026)</Link>
            <div className="muted">Variantes créatives, tests de hooks et validation brand-safe.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Transparency">
        <h2>Transparence</h2>
        <ul className="list">
          <li>
            <Link href={aboutPath(lang)}>{t.about}</Link>
            <div className="muted">Disclosure affiliation, périmètre éditorial et mises à jour.</div>
          </li>
          <li>
            <Link href={methodologyPath(lang)}>{t.methodology}</Link>
            <div className="muted">Comment les pages sont évaluées, mises à jour et vérifiées.</div>
          </li>
          <li>
            <Link href={sourcesPath(lang)}>{t.sources}</Link>
            <div className="muted">Sources officielles et références de vérification.</div>
          </li>
          <li>
            <Link href={contactPath(lang)}>{t.contact}</Link>
            <div className="muted">Corrections, questions et contact.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Pages">
        <h2>Toutes les pages</h2>
        <ul className="list">
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
