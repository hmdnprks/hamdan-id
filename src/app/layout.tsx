import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Poppins, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Providers } from '@/components/Providers';
import Umami from '@/components/analytics/Umami';
import SEOSchema from '@/components/SEO/SEOSchema';

// Load JustSans locally
const justSans = localFont({
  variable: '--font-justsans',
  display: 'swap',
  src: [
    {
      path: '../fonts/justsans/JUST Sans Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/justsans/JUST Sans Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/justsans/JUST Sans SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/justsans/JUST Sans Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

const melangitSans = localFont({
  variable: '--font-melangit-sans',
  display: 'swap',
  src: [
    {
      path: '../fonts/melangit/MelangitSans-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/melangit/MelangitSans-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/melangit/MelangitSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/melangit/MelangitSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/melangit/MelangitSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/melangit/MelangitSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/melangit/MelangitSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

const pogoniaSans = localFont({
  variable: '--font-pogonia-sans',
  display: 'swap',
  src: [
    {
      path: '../fonts/pogonia/Pogonia-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-ExtraLight.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-ExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/pogonia/Pogonia-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
});

// Load Poppins as fallback
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Hamdan Prakoso – Software Engineer & Visual Storyteller',
  description:
    'Building fast, expressive web experiences with a creative soul. Specializing in frontend engineering, performance, and digital storytelling through code, photography, and travel.',
  keywords: [
    'Hamdan Prakoso',
    'Software Engineer',
    'Frontend Developer',
    'Web Performance',
    'Developer Experience',
    'Creative Coding',
    '3D Web',
    'Photography',
    'Inter Milan',
    'Cinematic Travel',
    'Indonesia',
  ],
  authors: [{ name: 'Hamdan Prakoso' }],
  creator: 'Hamdan Prakoso',
  openGraph: {
    title: 'Hamdan Prakoso – Software Engineer & Visual Storyteller',
    description:
      'Building fast, expressive web experiences with a creative soul. Specializing in frontend engineering, performance, and digital storytelling through code, photography, and travel.',
    url: 'https://hamdan.id',
    siteName: 'Hamdan Prakoso',
    images: [
      {
        url: 'https://hamdan.id/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Og Image Alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamdan Prakoso – Software Engineer & Visual Storyteller',
    description:
      'Building fast, expressive web experiences with a creative soul. Specializing in frontend engineering, performance, and digital storytelling through code, photography, and travel.',
    site: '@htreeve',
    creator: '@htreeve',
    images: ['https://hamdan.id/og-image.png'],
  },
  metadataBase: new URL('https://hamdan.id'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${justSans.variable} ${poppins.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} ${melangitSans.variable} ${pogoniaSans.variable}`}
    >
      <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
      <body className="font-sans antialiased">
        <Umami />
        <SEOSchema />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
