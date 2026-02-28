'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LanguageSelect } from '@/components/LanguageSelect';
import { blogIndexPath, getLangFromPathname, homePath, privacyPath, SITE, UI_TRANSLATIONS } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);
  const t = UI_TRANSLATIONS[lang];

  const home = homePath(lang);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function toggle() {
    setOpen((v) => !v);
  }

  function onHamburgerKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  }

  function onNavClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement | null;
    if (target?.closest('a')) setOpen(false);
  }

  return (
    <header>
      <nav className="navbar">
        <a aria-label={SITE.brandName} className="brand" href={home}>
          <img
            alt="VoiceOverStudioAI logo"
            decoding="async"
            height={120}
            src="/assets/images/voiceoverstudioai-logo.png"
            width={600}
          />
        </a>

        <div className="nav-right">
          <LanguageSelect />

          <div
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="hamburger"
            onClick={toggle}
            onKeyDown={onHamburgerKeyDown}
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-links ${open ? 'open' : ''}`} onClick={onNavClick}>
            <a href={`${home}#hero`}>{t.home}</a>
            <a href={`${home}#platform`}>{t.features}</a>
            <a href={`${home}#usecases`}>{t.useCases}</a>
            <a href={`${home}#pricing`}>{t.pricing}</a>
            <a href={blogIndexPath(lang)}>{t.blog}</a>
            <a href={privacyPath(lang)}>{t.legal}</a>
            <a className="cta" data-cta="" href={SITE.affiliateLink}>
              {t.cta}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
