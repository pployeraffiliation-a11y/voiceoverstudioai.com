export const SITE = {
  baseUrl: 'https://voiceoverstudioai.com',
  brandName: 'VoiceOverStudioAI',
  affiliateLink: 'https://try.elevenlabs.io/ngxkdu61n0np',
  supportedLangs: ['en', 'fr', 'de', 'es'] as const,
};

export type Lang = (typeof SITE.supportedLangs)[number];

export const UI_TRANSLATIONS: Record<
  Lang,
  {
    home: string;
    features: string;
    useCases: string;
    pricing: string;
    blog: string;
    legal: string;
    cta: string;
    cookie: string;
    accept: string;
  }
> = {
  en: {
    home: 'Home',
    features: 'Platform',
    useCases: 'Use cases',
    pricing: 'Plans',
    blog: 'Blog',
    legal: 'Legal',
    cta: 'Join ElevenLabs',
    cookie: 'We use cookies for analytics (GA4) and performance insights. You can opt out anytime.',
    accept: 'Accept',
  },
  fr: {
    home: 'Accueil',
    features: 'Plateforme',
    useCases: 'Cas d’usage',
    pricing: 'Formules',
    blog: 'Blog',
    legal: 'Légal',
    cta: 'Découvrir ElevenLabs',
    cookie:
      'Nous utilisons des cookies pour l’analytics (GA4) et la performance. Vous pouvez les refuser à tout moment.',
    accept: 'Accepter',
  },
  de: {
    home: 'Start',
    features: 'Plattform',
    useCases: 'Einsatzfelder',
    pricing: 'Pläne',
    blog: 'Blog',
    legal: 'Rechtliches',
    cta: 'ElevenLabs entdecken',
    cookie: 'Wir verwenden Cookies für Analytics (GA4) und Performance-Insights. Sie können jederzeit ablehnen.',
    accept: 'Akzeptieren',
  },
  es: {
    home: 'Inicio',
    features: 'Plataforma',
    useCases: 'Casos',
    pricing: 'Planes',
    blog: 'Blog',
    legal: 'Legal',
    cta: 'Explorar ElevenLabs',
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

export function playbookPath(lang: Lang): string {
  const base = '/blog/ai-voiceover-2026';
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
