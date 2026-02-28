'use client';

import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/site';
import { getLangFromPathname, localizedUrl, SITE } from '@/lib/site';

export function LanguageSelect() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);

  function onChange(nextLang: Lang) {
    try {
      localStorage.setItem('vo_lang', nextLang);
    } catch {
      // ignore
    }
    window.location.href = localizedUrl(pathname, nextLang);
  }

  return (
    <div className="lang-switcher">
      <label aria-label="Language" htmlFor="language-select">
        🌐
      </label>
      <select
        id="language-select"
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

