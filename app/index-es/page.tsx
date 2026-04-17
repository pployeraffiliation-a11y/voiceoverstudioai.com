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
  title: `${SITE.brandName} — Guías de ElevenLabs (2026)`,
  description: 'Guías y flujos de trabajo de ElevenLabs (2026): precios, prompts, doblaje, Projects y API.',
  alternates: { canonical: homePath('es'), languages: HOME_LANGUAGES },
  openGraph: {
    type: 'website',
    title: `${SITE.brandName} — Guías de ElevenLabs (2026)`,
    description: 'Guías y flujos de trabajo de ElevenLabs (2026): precios, prompts, doblaje, Projects y API.',
    url: homePath('es'),
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.brandName} — Guías de ElevenLabs (2026)`,
    description: 'Guías y flujos de trabajo de ElevenLabs (2026): precios, prompts, doblaje, Projects y API.',
    images: [OG_IMAGE],
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
        <p>Empieza por la guía y usa después el hub del blog para precios, prompts, workflows de doblaje y comparativas.</p>
      </section>

      <section className="card" aria-label="Start here">
        <h2>Empieza aquí</h2>
        <ul className="list">
          <li>
            <Link href={guidePath(lang)}>Guía</Link>
            <div className="muted">Página pilar principal para demos, workflows y casos de uso de ElevenLabs.</div>
          </li>
          <li>
            <Link href={playbookPath(lang)}>Playbook 2026</Link>
            <div className="muted">Artículo operativo sobre locución, doblaje, Projects y API.</div>
          </li>
          <li>
            <Link href={blogIndexPath(lang)}>Hub del blog</Link>
            <div className="muted">Todas las páginas del cluster sobre precios, prompts, doblaje y comparativas.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="ElevenLabs cluster">
        <h2>Cluster ElevenLabs</h2>
        <ul className="list">
          <li>
            <Link href={pricingPath(lang)}>Precios (2026)</Link>
            <div className="muted">Elegir el plan correcto según el workflow, no según el volumen promocionado.</div>
          </li>
          <li>
            <Link href={promptsPath(lang)}>Prompts (2026)</Link>
            <div className="muted">Estructuras de prompts, glosario y frases ancla para una dirección estable.</div>
          </li>
          <li>
            <Link href={dubbingPath(lang)}>Workflow de doblaje (2026)</Link>
            <div className="muted">Preparación de subtítulos, primer minuto y QA multilingüe.</div>
          </li>
          <li>
            <Link href={alternativesPath(lang)}>Alternativas (2026)</Link>
            <div className="muted">Comparar otros modelos operativos antes de reemplazar la stack.</div>
          </li>
          <li>
            <Link href={projectsPath(lang)}>Projects (2026)</Link>
            <div className="muted">Estructurar producción long-form con bloques revisables y aprobaciones más limpias.</div>
          </li>
          <li>
            <Link href={apiPath(lang)}>API (2026)</Link>
            <div className="muted">Usar batch o streaming con menos deriva y reglas operativas más claras.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Use cases">
        <h2>Use cases</h2>
        <ul className="list">
          <li>
            <Link href={youtubePath(lang)}>YouTube (2026)</Link>
            <div className="muted">Locución, Shorts, doblaje y QA final para publicar vídeo.</div>
          </li>
          <li>
            <Link href={podcastsPath(lang)}>Podcasts (2026)</Link>
            <div className="muted">Segmentos recurrentes, menciones patrocinadas y revisión pensada para oyentes.</div>
          </li>
          <li>
            <Link href={elearningPath(lang)}>E-learning (2026)</Link>
            <div className="muted">Lecciones modulares, glosario estable y entrega multilingüe escalable.</div>
          </li>
          <li>
            <Link href={adsPath(lang)}>Ads (2026)</Link>
            <div className="muted">Variantes creativas, tests de hook y aprobación segura para marca.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Transparency">
        <h2>Transparencia</h2>
        <ul className="list">
          <li>
            <Link href={aboutPath(lang)}>{t.about}</Link>
            <div className="muted">Disclosure de afiliación, alcance editorial y actualizaciones.</div>
          </li>
          <li>
            <Link href={methodologyPath(lang)}>{t.methodology}</Link>
            <div className="muted">Cómo se evalúan, actualizan y verifican las páginas.</div>
          </li>
          <li>
            <Link href={sourcesPath(lang)}>{t.sources}</Link>
            <div className="muted">Fuentes oficiales y referencias de verificación.</div>
          </li>
          <li>
            <Link href={contactPath(lang)}>{t.contact}</Link>
            <div className="muted">Correcciones, preguntas y contacto.</div>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Pages">
        <h2>Todas las páginas</h2>
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
