import type { Metadata, Viewport } from 'next';
import React from 'react';
import { headers } from 'next/headers';
import './globals.css';
import { SITE } from '@/lib/site';
import { CookieBanner } from '@/components/CookieBanner';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { LangHtmlUpdater } from '@/components/LangHtmlUpdater';

const IMPACT_SITE_VERIFICATION_TOKEN = '15b70ab1-30d1-4f04-aa80-2bfe723e8084';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: SITE.brandName,
  description:
    'AI voice over and dubbing demos for ElevenLabs: Voice Design v3, Projects, Sound Effects, and API workflows.',
  metadataBase: new URL(SITE.baseUrl),
  alternates: { canonical: '/' },
  manifest: '/assets/site.webmanifest',
  icons: {
    icon: [
      { url: '/assets/icons/favicon.ico' },
      { url: '/assets/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/assets/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    title: SITE.brandName,
    description:
      'AI voice over and dubbing demos for ElevenLabs: Voice Design v3, Projects, Sound Effects, and API workflows.',
    url: SITE.baseUrl,
    images: [{ url: '/assets/images/capture-hero.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.brandName,
    description:
      'AI voice over and dubbing demos for ElevenLabs: Voice Design v3, Projects, Sound Effects, and API workflows.',
    images: ['/assets/images/capture-hero.png'],
  },
};

function resolveLang(pathname: string): string {
  const path = pathname.replace(/\/+$/, '');
  if (/-de$/.test(path)) return 'de';
  if (/-es$/.test(path)) return 'es';
  if (/-fr$/.test(path)) return 'fr';
  return 'en';
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname =
    headersList.get('x-invoke-path') ??
    headersList.get('x-matched-path') ??
    headersList.get('next-url') ??
    headersList.get('x-pathname') ??
    '';
  const lang = resolveLang(pathname);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        {React.createElement('meta', {
          name: 'impact-site-verification',
          value: IMPACT_SITE_VERIFICATION_TOKEN,
        } as any)}
        <LangHtmlUpdater />
        <SiteHeader />
        <main className="container">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
