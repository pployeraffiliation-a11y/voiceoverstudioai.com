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
  klingAlternativesPath,
  klingGuidePath,
  klingI2VPath,
  klingPricingPath,
  klingReviewPath,
  klingT2VPath,
  klingYoutubePath,
  methodologyPath,
  pictoryAvisPath,
  pictoryCreditsPath,
  pictoryPricingPath,
  pictoryYoutubePath,
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
  title: `${SITE.brandName} — Guides IA voix, vidéo Kling AI et Pictory (2026)`,
  description: 'Guides et workflows IA (2026) : ElevenLabs pour la voix, Kling AI pour la vidéo, Pictory pour les captions — prix, prompts, dubbing et YouTube.',
  alternates: { canonical: homePath('fr'), languages: HOME_LANGUAGES },
  openGraph: {
    type: 'website',
    title: `${SITE.brandName} — Guides IA voix, vidéo Kling AI et Pictory (2026)`,
    description: 'Guides et workflows IA (2026) : ElevenLabs pour la voix, Kling AI pour la vidéo, Pictory pour les captions — prix, prompts, dubbing et YouTube.',
    url: homePath('fr'),
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.brandName} — Guides IA voix, vidéo Kling AI et Pictory (2026)`,
    description: 'Guides et workflows IA (2026) : ElevenLabs pour la voix, Kling AI pour la vidéo, Pictory pour les captions — prix, prompts, dubbing et YouTube.',
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
    pictoryAvisPath(lang),
    pictoryPricingPath(lang),
    pictoryYoutubePath(lang),
    pictoryCreditsPath(lang),
    klingGuidePath(lang),
    klingReviewPath(lang),
    klingPricingPath(lang),
    klingT2VPath(lang),
    klingYoutubePath(lang),
    klingI2VPath(lang),
    klingAlternativesPath(lang),
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
        <p>Guides pratiques pour produire voix off, dubbing, vidéos IA avec Kling AI, captions et workflows YouTube avec ElevenLabs et Pictory AI.</p>
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

      <section className="card" aria-label="Cluster Kling AI">
        <h2>Cluster Kling AI</h2>
        <ul className="list">
          <li>
            <Link href={klingGuidePath(lang)}>Guide Kling AI</Link>
            <div className="muted">Page pilier Kling AI : texte en vidéo, image en vidéo, contrôle caméra et démos.</div>
          </li>
          <li>
            <Link href={klingReviewPath(lang)}>Avis Kling AI (2026)</Link>
            <div className="muted">Test complet : qualité du mouvement, contrôle caméra, image-en-vidéo et tarifs.</div>
          </li>
          <li>
            <Link href={klingPricingPath(lang)}>Prix Kling AI (2026)</Link>
            <div className="muted">Système de crédits, plans et coût réel par seconde selon la résolution choisie.</div>
          </li>
          <li>
            <Link href={klingT2VPath(lang)}>Kling AI texte en vidéo (2026)</Link>
            <div className="muted">Structure de prompt, direction caméra et multi-shot pour des clips cinématiques.</div>
          </li>
          <li>
            <Link href={klingYoutubePath(lang)}>Kling AI pour YouTube (2026)</Link>
            <div className="muted">B-roll, hooks, Shorts et workflows pour enrichir sa chaîne avec de la vidéo générée.</div>
          </li>
          <li>
            <Link href={klingI2VPath(lang)}>Kling AI image en vidéo (2026)</Link>
            <div className="muted">Animer photos produit, portraits et art IA avec des motion hints et cohérence de style.</div>
          </li>
          <li>
            <Link href={klingAlternativesPath(lang)}>Alternatives à Kling AI (2026)</Link>
            <div className="muted">Quand chercher une alternative et comment choisir selon son workflow vidéo.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Cluster Pictory AI">
        <h2>Cluster Pictory AI</h2>
        <ul className="list">
          <li>
            <Link href={pictoryAvisPath(lang)}>Avis Pictory AI (2026)</Link>
            <div className="muted">Test complet : text-to-video, captions, avatars, voix IA, limites et workflow recommandé.</div>
          </li>
          <li>
            <Link href={pictoryPricingPath(lang)}>Tarifs Pictory AI (2026)</Link>
            <div className="muted">Comparer Starter, Professional, Team, minutes vidéo, Brand Kits et AI Credits.</div>
          </li>
          <li>
            <Link href={pictoryYoutubePath(lang)}>Pictory AI pour YouTube (2026)</Link>
            <div className="muted">Créer vidéos longues, Shorts, captions et assets sociaux à partir d’un script ou d’un article.</div>
          </li>
          <li>
            <Link href={pictoryCreditsPath(lang)}>AI Credits Pictory (2026)</Link>
            <div className="muted">Comprendre la consommation des fonctions génératives : images, vidéo, avatars et packs.</div>
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
