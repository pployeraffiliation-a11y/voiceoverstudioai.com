'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPathname, SITE, UI_TRANSLATIONS } from '@/lib/site';

function ensureGa4Loaded() {
  const id = SITE.ga4Id;
  if (!id) return;
  const w = window as any;
  if (w.__voiceoverstudioai_ga4_loaded) return;
  w.__voiceoverstudioai_ga4_loaded = true;

  const ext = document.createElement('script');
  ext.async = true;
  ext.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(ext);

  const inline = document.createElement('script');
  inline.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
}

export function CookieBanner() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('vo_cookies');
      if (consent === 'accepted') ensureGa4Loaded();
      if (consent !== 'accepted') setHidden(false);
    } catch {
      setHidden(false);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem('vo_cookies', 'accepted');
    } catch {
      // ignore
    }
    ensureGa4Loaded();
    setHidden(true);
  }

  return (
    <div className={`cookie-banner ${hidden ? 'hidden' : ''}`} id="cookie-banner">
      <p>{t.cookie}</p>
      <button className="cta" id="accept-cookies" onClick={accept} type="button">
        {t.accept}
      </button>
    </div>
  );
}
