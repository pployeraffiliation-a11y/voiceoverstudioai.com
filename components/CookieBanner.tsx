'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLangFromPathname, UI_TRANSLATIONS } from '@/lib/site';

export function CookieBanner() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('vo_cookies');
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

