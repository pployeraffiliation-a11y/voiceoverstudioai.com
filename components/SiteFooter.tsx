'use client';

import { usePathname } from 'next/navigation';
import {
  blogIndexPath,
  getLangFromPathname,
  homePath,
  legalNoticePath,
  playbookPath,
  privacyPath,
  SITE,
} from '@/lib/site';

export function SiteFooter() {
  const pathname = usePathname() ?? '/';
  const lang = getLangFromPathname(pathname);

  const home = homePath(lang);
  const blog = blogIndexPath(lang);
  const playbook = playbookPath(lang);
  const legal = legalNoticePath(lang);
  const privacy = privacyPath(lang);

  return (
    <footer className="footer">
      <div>
        <img
          alt={SITE.brandName}
          height={120}
          src="/assets/images/voiceoverstudioai-logo.png"
          style={{ height: '40px', borderRadius: '10px' }}
          width={600}
        />
        <p>
          VoiceOverStudioAI is an independent publisher partnering with ElevenLabs. Domain: voiceoverstudioai.com
        </p>
        <small>Owner: P. Ployer — Developed by E-Com Shop — Netlify hosting — Contact: p.ployer.affiliation@gmail.com</small>
      </div>

      <div>
        <p>
          <strong>Navigation</strong>
        </p>
        <p>
          <a href={`${home}#hero`}>Home</a>
          <br />
          <a href={`${home}#platform`}>Platform</a>
          <br />
          <a href={`${home}#usecases`}>Use cases</a>
          <br />
          <a href={`${home}#pricing`}>Plans</a>
          <br />
          <a href={blog}>Blog hub</a>
        </p>

        <p className="footer-site-links">
          <strong>Site links:</strong> <a href={home}>Home</a> · <a href={blog}>Blog</a> · <a href={playbook}>Playbook</a> ·{' '}
          <a href={legal}>Legal</a> · <a href={privacy}>Privacy</a>
        </p>

        <p className="footer-lang-links">
          <strong>Languages:</strong> <a href="/">EN</a> · <a href="/index-fr">FR</a> · <a href="/index-de">DE</a> ·{' '}
          <a href="/index-es">ES</a>
        </p>
      </div>

      <div>
        <p>
          <strong>Compliance</strong>
        </p>
        <p>
          <a href={legal}>Legal notice</a>
          <br />
          <a href={privacy}>Privacy</a>
          <br />
          <a data-cta="" href={SITE.affiliateLink}>
            Try ElevenLabs
          </a>
        </p>
      </div>
    </footer>
  );
}
