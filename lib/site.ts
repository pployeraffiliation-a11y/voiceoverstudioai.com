export const SITE = {
  baseUrl: 'https://voiceoverstudioai.com',
  domain: 'voiceoverstudioai.com',
  brandName: 'VoiceOverStudioAI',
  ga4Id: 'G-ZVBSC02R2X',
  affiliateLink: 'https://try.elevenlabs.io/ngxkdu61n0np',
  contactEmail: 'p.ployer.affiliation@gmail.com',
  supportedLangs: ['en', 'fr', 'de', 'es'] as const,
};

export type Lang = (typeof SITE.supportedLangs)[number];

export const UI_TRANSLATIONS: Record<
  Lang,
  {
    home: string;
    guide: string;
    blog: string;
    about: string;
    methodology: string;
    sources: string;
    privacy: string;
    legal: string;
    cta: string;
    contact: string;
    cookie: string;
    accept: string;
  }
> = {
  en: {
    home: 'Home',
    blog: 'Blog',
    guide: 'Guide',
    about: 'About',
    methodology: 'Methodology',
    sources: 'Sources',
    privacy: 'Privacy',
    legal: 'Legal notice',
    cta: 'Join ElevenLabs',
    contact: 'Contact',
    cookie: 'We use cookies for analytics (GA4) and performance insights. You can opt out anytime.',
    accept: 'Accept',
  },
  fr: {
    home: 'Accueil',
    blog: 'Blog',
    guide: 'Guide',
    about: 'À propos',
    methodology: 'Méthodologie',
    sources: 'Sources',
    privacy: 'Confidentialité',
    legal: 'Mentions légales',
    cta: 'Découvrir ElevenLabs',
    contact: 'Contact',
    cookie:
      'Nous utilisons des cookies pour l’analytics (GA4) et la performance. Vous pouvez les refuser à tout moment.',
    accept: 'Accepter',
  },
  de: {
    home: 'Start',
    blog: 'Blog',
    guide: 'Guide',
    about: 'Über uns',
    methodology: 'Methodik',
    sources: 'Quellen',
    privacy: 'Datenschutz',
    legal: 'Impressum',
    cta: 'ElevenLabs entdecken',
    contact: 'Kontakt',
    cookie: 'Wir verwenden Cookies für Analytics (GA4) und Performance-Insights. Sie können jederzeit ablehnen.',
    accept: 'Akzeptieren',
  },
  es: {
    home: 'Inicio',
    blog: 'Blog',
    guide: 'Guía',
    about: 'Acerca de',
    methodology: 'Metodología',
    sources: 'Fuentes',
    privacy: 'Privacidad',
    legal: 'Aviso legal',
    cta: 'Explorar ElevenLabs',
    contact: 'Contacto',
    cookie: 'Usamos cookies para analíticas (GA4) y rendimiento. Puedes desactivarlas cuando quieras.',
    accept: 'Aceptar',
  },
};

export function normalizeLang(lang: unknown): Lang {
  const normalized = String(lang ?? '').toLowerCase();
  return (SITE.supportedLangs as readonly string[]).includes(normalized) ? (normalized as Lang) : 'en';
}

export function getLangFromPathname(pathname: string): Lang {
  const clean = normalizePathname(pathname);
  if (clean === '/' || clean === '' || clean === '/index') return 'en';
  if (clean === '/index-fr' || clean.endsWith('-fr')) return 'fr';
  if (clean === '/index-de' || clean.endsWith('-de')) return 'de';
  if (clean === '/index-es' || clean.endsWith('-es')) return 'es';
  return 'en';
}

export function homePath(lang: Lang): string {
  return lang === 'en' ? '/' : `/index-${lang}`;
}

export function blogIndexPath(lang: Lang): string {
  return lang === 'en' ? '/blog/' : `/blog/index-${lang}`;
}

export function privacyPath(lang: Lang): string {
  return lang === 'en' ? '/legal/privacy' : `/legal/privacy-${lang}`;
}

export function legalNoticePath(lang: Lang): string {
  return lang === 'en' ? '/legal/legal-notice' : `/legal/legal-notice-${lang}`;
}

export function guidePath(lang: Lang): string {
  const base = '/guide-elevenlabs';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function playbookPath(lang: Lang): string {
  const base = '/blog/ai-voiceover-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function pricingPath(lang: Lang): string {
  const base = '/blog/elevenlabs-pricing-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function promptsPath(lang: Lang): string {
  const base = '/blog/elevenlabs-prompts-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function dubbingPath(lang: Lang): string {
  const base = '/blog/elevenlabs-dubbing-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function alternativesPath(lang: Lang): string {
  const base = '/blog/elevenlabs-alternatives-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function projectsPath(lang: Lang): string {
  const base = '/blog/elevenlabs-projects-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function apiPath(lang: Lang): string {
  const base = '/blog/elevenlabs-api-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function youtubePath(lang: Lang): string {
  const base = '/blog/elevenlabs-for-youtube-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function podcastsPath(lang: Lang): string {
  const base = '/blog/elevenlabs-for-podcasts-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function elearningPath(lang: Lang): string {
  const base = '/blog/elevenlabs-for-elearning-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function adsPath(lang: Lang): string {
  const base = '/blog/elevenlabs-for-ads-2026';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function aboutPath(lang: Lang): string {
  const base = '/about';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function methodologyPath(lang: Lang): string {
  const base = '/methodology';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function sourcesPath(lang: Lang): string {
  const base = '/sources';
  return lang === 'en' ? base : `${base}-${lang}`;
}

export function contactPath(lang: Lang): string {
  const base = '/contact';
  return lang === 'en' ? base : `${base}-${lang}`;
}

function normalizePathname(pathname: string): string {
  let path = pathname || '/';
  if (path !== '/') path = path.replace(/\/+$/, '');
  return path.replace(/\.html$/, '');
}

export function localizedUrl(pathname: string, lang: Lang): string {
  const targetLang = normalizeLang(lang);
  const path = normalizePathname(pathname);

  if (path === '/' || path === '' || path === '/index') {
    return homePath(targetLang);
  }

  if (path === '/blog' || path === '/blog/index') {
    return blogIndexPath(targetLang);
  }

  const match = /^(.*?)(-fr|-de|-es)$/.exec(path);
  const base = match ? match[1] : path;

  if (base === '/blog/index') {
    return blogIndexPath(targetLang);
  }

  if (base === '/blog/ai-voiceover-2026') {
    return targetLang === 'en' ? base : `${base}-${targetLang}`;
  }

  if (base === '/legal/privacy' || base === '/legal/legal-notice') {
    return targetLang === 'en' ? base : `${base}-${targetLang}`;
  }

  if (base === '/index') {
    return homePath(targetLang);
  }

  return targetLang === 'en' ? base : `${base}-${targetLang}`;
}
