import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="container">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
