const affiliateLink = 'https://try.elevenlabs.io/ngxkdu61n0np';
const supportedLangs = ['en', 'fr', 'de', 'es'];

const uiTranslations = {
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
    cookie: 'Nous utilisons des cookies pour l’analytics (GA4) et la performance. Vous pouvez les refuser à tout moment.',
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

function normalizeLang(lang) {
  const normalized = String(lang || '').toLowerCase();
  return supportedLangs.includes(normalized) ? normalized : 'en';
}

function localizedUrl(pathname, lang) {
  const targetLang = normalizeLang(lang);
  const path = pathname && pathname !== '/' ? pathname : '/index.html';
  const match = path.match(/^(.*?)(-fr|-de|-es)?\.html$/);
  if (!match) return path;
  const base = match[1];
  const suffix = targetLang === 'en' ? '' : `-${targetLang}`;
  return `${base}${suffix}.html`;
}

function setLanguage(lang) {
  const normalized = normalizeLang(lang);
  document.querySelectorAll('.lang-block').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === normalized);
  });

  const navTexts = uiTranslations[normalized];
  if (navTexts) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (navTexts[key]) {
        el.textContent = navTexts[key];
      }
    });
  }
}

function initLanguage() {
  const pageLang = normalizeLang(document.documentElement.lang || 'en');
  const select = document.getElementById('language-select');
  if (select) {
    select.value = pageLang;
    select.addEventListener('change', e => {
      const targetLang = normalizeLang(e.target.value);
      try { localStorage.setItem('vo_lang', targetLang); } catch {}
      window.location.href = localizedUrl(window.location.pathname, targetLang);
    });
  }
  setLanguage(pageLang);
}

function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

function initCTAs() {
  document.querySelectorAll('[data-cta]').forEach(el => {
    el.setAttribute('href', affiliateLink);
  });
}

function initCookies() {
  const banner = document.getElementById('cookie-banner');
  const btn = document.getElementById('accept-cookies');
  if (!banner || !btn) return;
  const consent = localStorage.getItem('vo_cookies');
  if (consent === 'accepted') {
    banner.classList.add('hidden');
    return;
  }
  btn.addEventListener('click', () => {
    localStorage.setItem('vo_cookies', 'accepted');
    banner.classList.add('hidden');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNav();
  initCTAs();
  initCookies();
});
