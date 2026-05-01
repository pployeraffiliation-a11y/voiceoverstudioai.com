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

const HOME_LANGUAGES = Object.fromEntries(SITE.supportedLangs.map((l) => [l, homePath(l)]));
const OG_IMAGE = '/assets/images/capture-hero.png';

export const metadata: Metadata = {
  title: `${SITE.brandName} — AI Voice, Video und Pictory Guides (2026)`,
  description: 'Praktische AI-Workflows 2026: ElevenLabs für Voice und Dubbing, Pictory AI für Video, Preise, Prompts, YouTube, Captions und AI Credits.',
  alternates: { canonical: homePath('de'), languages: HOME_LANGUAGES },
  openGraph: {
    type: 'website',
    title: `${SITE.brandName} — AI Voice, Video und Pictory Guides (2026)`,
    description: 'Praktische AI-Workflows 2026: ElevenLabs für Voice und Dubbing, Pictory AI für Video, Preise, Prompts, YouTube, Captions und AI Credits.',
    url: homePath('de'),
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.brandName} — AI Voice, Video und Pictory Guides (2026)`,
    description: 'Praktische AI-Workflows 2026: ElevenLabs für Voice und Dubbing, Pictory AI für Video, Preise, Prompts, YouTube, Captions und AI Credits.',
    images: [OG_IMAGE],
  },
};

export default async function HomePageDe() {
  const lang: Lang = 'de';
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
        <p>Praktische Guides für Voiceover, Dubbing, AI Video, Captions und YouTube-Workflows mit ElevenLabs und Pictory AI.</p>
      </section>

      <section className="card" aria-label="Start here">
        <h2>Start hier</h2>
        <ul className="list">
          <li>
            <Link href={guidePath(lang)}>Guide</Link>
            <div className="muted">Zentrale Pillar-Seite für ElevenLabs Demos, Workflows und Use Cases.</div>
          </li>
          <li>
            <Link href={playbookPath(lang)}>Playbook 2026</Link>
            <div className="muted">Operativer Artikel zu Voiceover, Dubbing, Projects und API.</div>
          </li>
          <li>
            <Link href={blogIndexPath(lang)}>Blog-Hub</Link>
            <div className="muted">Alle Cluster-Seiten zu Preisen, Prompts, Dubbing und Vergleichen.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="ElevenLabs cluster">
        <h2>ElevenLabs Cluster</h2>
        <ul className="list">
          <li>
            <Link href={pricingPath(lang)}>Preise (2026)</Link>
            <div className="muted">Den passenden Plan nach Workflow wählen statt blind Volumen zu kaufen.</div>
          </li>
          <li>
            <Link href={promptsPath(lang)}>Prompts (2026)</Link>
            <div className="muted">Prompt-Muster, Glossar und Anchor-Lines für stabile Regie.</div>
          </li>
          <li>
            <Link href={dubbingPath(lang)}>Dubbing-Workflow (2026)</Link>
            <div className="muted">Untertitelvorbereitung, erste Minute und mehrsprachige QA.</div>
          </li>
          <li>
            <Link href={alternativesPath(lang)}>Alternativen (2026)</Link>
            <div className="muted">Andere Betriebsmodelle vergleichen, bevor ihr den Stack ersetzt.</div>
          </li>
          <li>
            <Link href={projectsPath(lang)}>Projects (2026)</Link>
            <div className="muted">Long-form Produktion mit prüfbaren Blöcken und saubereren Freigaben strukturieren.</div>
          </li>
          <li>
            <Link href={apiPath(lang)}>API (2026)</Link>
            <div className="muted">Batch oder Streaming mit weniger Drift und klareren Regeln einsetzen.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Use cases">
        <h2>Use cases</h2>
        <ul className="list">
          <li>
            <Link href={youtubePath(lang)}>YouTube (2026)</Link>
            <div className="muted">Voiceover, Shorts, Dubbing und finale QA für Video-Publishing.</div>
          </li>
          <li>
            <Link href={podcastsPath(lang)}>Podcasts (2026)</Link>
            <div className="muted">Wiederkehrende Segmente, Sponsor-Reads und hörsichere Review-Routinen.</div>
          </li>
          <li>
            <Link href={elearningPath(lang)}>E-Learning (2026)</Link>
            <div className="muted">Modulare Lessons, stabiles Glossar und skalierbare Mehrsprachigkeit.</div>
          </li>
          <li>
            <Link href={adsPath(lang)}>Ads (2026)</Link>
            <div className="muted">Creative-Varianten, Hook-Tests und brand-sichere Freigaben.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Pictory AI Cluster">
        <h2>Pictory AI Cluster</h2>
        <ul className="list">
          <li>
            <Link href={pictoryAvisPath(lang)}>Pictory AI Erfahrungen (2026)</Link>
            <div className="muted">Test: Text-to-Video, Captions, Avatare, AI Voices, Grenzen und Workflow.</div>
          </li>
          <li>
            <Link href={pictoryPricingPath(lang)}>Pictory AI Preise (2026)</Link>
            <div className="muted">Starter, Professional, Team, Videominuten, Brand Kits und AI Credits vergleichen.</div>
          </li>
          <li>
            <Link href={pictoryYoutubePath(lang)}>Pictory AI für YouTube (2026)</Link>
            <div className="muted">Skripte, Artikel und lange Videos in YouTube, Shorts und Captions verwandeln.</div>
          </li>
          <li>
            <Link href={pictoryCreditsPath(lang)}>Pictory AI Credits (2026)</Link>
            <div className="muted">Generativen Verbrauch für Bilder, Video, Avatare und Packs verstehen.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Transparency">
        <h2>Transparenz</h2>
        <ul className="list">
          <li>
            <Link href={aboutPath(lang)}>{t.about}</Link>
            <div className="muted">Affiliate-Hinweis, redaktioneller Scope und Updates.</div>
          </li>
          <li>
            <Link href={methodologyPath(lang)}>{t.methodology}</Link>
            <div className="muted">Wie Seiten bewertet, aktualisiert und geprüft werden.</div>
          </li>
          <li>
            <Link href={sourcesPath(lang)}>{t.sources}</Link>
            <div className="muted">Offizielle Quellen und Verifizierungsreferenzen.</div>
          </li>
          <li>
            <Link href={contactPath(lang)}>{t.contact}</Link>
            <div className="muted">Korrekturen, Fragen und Kontakt.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Pages">
        <h2>Alle Seiten</h2>
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
