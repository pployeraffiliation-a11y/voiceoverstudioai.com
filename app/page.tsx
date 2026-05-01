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

export async function generateMetadata(): Promise<Metadata> {
  const languages = Object.fromEntries(SITE.supportedLangs.map((l) => [l, homePath(l)]));
  const ogImage = '/assets/images/capture-hero.png';
  const title = `${SITE.brandName} — AI voice, video and Pictory guides (2026)`;
  const description =
    'Practical AI workflows for ElevenLabs voiceovers and Pictory AI video production: pricing, prompts, dubbing, YouTube, captions and AI Credits.';

  return {
    title,
    description,
    alternates: { canonical: homePath('en'), languages },
    openGraph: {
      type: 'website',
      title,
      description,
      url: homePath('en'),
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function HomePage() {
  const lang: Lang = 'en';
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
        <p>{t.home}: practical workflows for AI voiceovers, dubbing, AI video, captions and YouTube publishing.</p>
      </section>

      <section className="card" aria-label="Start here">
        <h2>Start here</h2>
        <ul className="list">
          <li>
            <Link href={guidePath(lang)}>Guide</Link>
            <div className="muted">Main pillar page for ElevenLabs demos, workflows and use cases.</div>
          </li>
          <li>
            <Link href={playbookPath(lang)}>2026 Playbook</Link>
            <div className="muted">Operational article for voiceover, dubbing, Projects and API workflows.</div>
          </li>
          <li>
            <Link href={blogIndexPath(lang)}>Blog hub</Link>
            <div className="muted">All cluster pages around pricing, prompts, dubbing and comparisons.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="ElevenLabs cluster">
        <h2>ElevenLabs cluster</h2>
        <ul className="list">
          <li>
            <Link href={pricingPath(lang)}>Pricing (2026)</Link>
            <div className="muted">Choose the right plan for your workflow instead of buying volume blindly.</div>
          </li>
          <li>
            <Link href={promptsPath(lang)}>Prompts (2026)</Link>
            <div className="muted">Prompt patterns, glossary habits and anchor-line checks for stable direction.</div>
          </li>
          <li>
            <Link href={dubbingPath(lang)}>Dubbing workflow (2026)</Link>
            <div className="muted">Subtitle prep, first-minute review and multilingual QA.</div>
          </li>
          <li>
            <Link href={alternativesPath(lang)}>Alternatives (2026)</Link>
            <div className="muted">Compare other workflow models before you replace the stack.</div>
          </li>
          <li>
            <Link href={projectsPath(lang)}>Projects (2026)</Link>
            <div className="muted">Structure long-form production with reviewable blocks and cleaner approvals.</div>
          </li>
          <li>
            <Link href={apiPath(lang)}>API (2026)</Link>
            <div className="muted">Use batch or streaming with less drift and clearer operational rules.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Use cases cluster">
        <h2>Use cases</h2>
        <ul className="list">
          <li>
            <Link href={youtubePath(lang)}>YouTube (2026)</Link>
            <div className="muted">Voiceover, Shorts, dubbing and final QA for video publishing.</div>
          </li>
          <li>
            <Link href={podcastsPath(lang)}>Podcasts (2026)</Link>
            <div className="muted">Recurring segments, sponsor reads and listener-safe review habits.</div>
          </li>
          <li>
            <Link href={elearningPath(lang)}>E-learning (2026)</Link>
            <div className="muted">Modular lessons, glossary control and scalable multilingual delivery.</div>
          </li>
          <li>
            <Link href={adsPath(lang)}>Ads (2026)</Link>
            <div className="muted">Creative variants, hook testing and brand-safe approval loops.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Pictory AI cluster">
        <h2>Pictory AI cluster</h2>
        <ul className="list">
          <li>
            <Link href={pictoryAvisPath(lang)}>Pictory AI review (2026)</Link>
            <div className="muted">Full test: text-to-video, captions, avatars, AI voices, limits and workflow.</div>
          </li>
          <li>
            <Link href={pictoryPricingPath(lang)}>Pictory AI pricing (2026)</Link>
            <div className="muted">Compare Starter, Professional, Team, video minutes, brand kits and AI Credits.</div>
          </li>
          <li>
            <Link href={pictoryYoutubePath(lang)}>Pictory AI for YouTube (2026)</Link>
            <div className="muted">Turn scripts, articles and long videos into YouTube videos, Shorts and captions.</div>
          </li>
          <li>
            <Link href={pictoryCreditsPath(lang)}>Pictory AI Credits (2026)</Link>
            <div className="muted">Understand generative usage for images, video, avatars and add-on packs.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Transparency">
        <h2>Transparency</h2>
        <ul className="list">
          <li>
            <Link href={aboutPath(lang)}>{t.about}</Link>
            <div className="muted">Affiliate disclosure, updates and editorial scope.</div>
          </li>
          <li>
            <Link href={methodologyPath(lang)}>{t.methodology}</Link>
            <div className="muted">How pages are reviewed, updated and checked.</div>
          </li>
          <li>
            <Link href={sourcesPath(lang)}>{t.sources}</Link>
            <div className="muted">Official sources and verification references.</div>
          </li>
          <li>
            <Link href={contactPath(lang)}>{t.contact}</Link>
            <div className="muted">Corrections, questions and partnership contact.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="All pages">
        <h2>All pages</h2>
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
