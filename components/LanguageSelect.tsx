'use client';

import { usePathname } from 'next/navigation';
import { useId } from 'react';
import type { Lang } from '@/lib/site';
import { getLangFromPathname, localizedUrl, SITE } from '@/lib/site';

export function LanguageSelect() {
  const selectId = useId();
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const label = lang === 'fr' ? 'Langue' : lang === 'de' ? 'Sprache' : lang === 'es' ? 'Idioma' : 'Language';

  function onChange(nextLang: Lang) {
    try {
      localStorage.setItem('vo_lang', nextLang);
    } catch {
      // ignore
    }
    window.location.href = localizedUrl(pathname, nextLang);
  }

  return (
    <div className="lang-select-container">
      <span aria-hidden="true">🌐</span>
      <label className="sr-only" htmlFor={selectId}>
        {label}
      </label>
      <select
        className="lang-select"
        id={selectId}
        onChange={(e) => onChange(e.target.value as Lang)}
        value={lang}
      >
        {SITE.supportedLangs.map((l) => (
          <option key={l} value={l}>
            {l.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
