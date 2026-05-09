'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSelect } from '@/components/LanguageSelect';
import { blogIndexPath, getLangFromPathname, guidePath, homePath, legalNoticePath, privacyPath, SITE, UI_TRANSLATIONS } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];

  const home = homePath(lang);
  const guide = guidePath(lang);
  const blog = blogIndexPath(lang);
  const legal = legalNoticePath(lang);
  const privacy = privacyPath(lang);

  const isKling = pathname.includes('kling');
  const isPictory = pathname.includes('pictory');

  const ctaHref = isKling
    ? SITE.klingAffiliateLink
    : isPictory
    ? SITE.pictoryAffiliateLink
    : SITE.affiliateLink;

  const klingLabel: Record<string, string> = { en: 'Try Kling AI', fr: 'Essayer Kling AI', de: 'Kling AI testen', es: 'Probar Kling AI' };
  const pictoryLabel: Record<string, string> = { en: 'Try Pictory', fr: 'Essayer Pictory', de: 'Pictory testen', es: 'Probar Pictory' };
  const ctaLabel = isKling ? klingLabel[lang] : isPictory ? pictoryLabel[lang] : t.cta;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand-group">
          <Link aria-label={SITE.brandName} className="brand" href={home}>
            <Image alt={SITE.brandName} height={36} priority src="/assets/images/voiceoverstudioai-logo.png" width={180} />
          </Link>
        </div>

        <div className="header-right">
          <nav aria-label="Primary" className="nav">
            <Link href={guide}>{t.guide}</Link>
            <Link href={blog}>{t.blog}</Link>
            <Link href={privacy}>{t.privacy}</Link>
            <Link href={legal}>{t.legal}</Link>
            <a className="cta-btn" data-cta="" href={ctaHref} rel="noopener noreferrer sponsored" target="_blank">
              {ctaLabel}
            </a>
          </nav>
          <LanguageSelect />
        </div>
      </div>
    </header>
  );
}
