'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  aboutPath,
  blogIndexPath,
  contactPath,
  getLangFromPathname,
  legalNoticePath,
  methodologyPath,
  privacyPath,
  SITE,
  sourcesPath,
  UI_TRANSLATIONS,
} from '@/lib/site';

export function SiteFooter() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          © {new Date().getFullYear()} — {SITE.domain}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href={blogIndexPath(lang)}>{t.blog}</Link>
          <Link href={aboutPath(lang)}>{t.about}</Link>
          <Link href={methodologyPath(lang)}>{t.methodology}</Link>
          <Link href={sourcesPath(lang)}>{t.sources}</Link>
          <Link href={privacyPath(lang)}>{t.privacy}</Link>
          <Link href={legalNoticePath(lang)}>{t.legal}</Link>
          <Link href={contactPath(lang)}>{t.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
