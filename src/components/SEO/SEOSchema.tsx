'use client';

import Head from 'next/head';

export default function SEOSchema() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Hamdan Prakoso',
            url: 'https://hamdan.id',
            image: 'https://hamdan.id/og-image.png',
            sameAs: [
              'https://github.com/hmdnprks',
              'https://twitter.com/htreeve',
              'https://www.linkedin.com/in/hamdanprakoso/',
              'https://byhandn.com',
            ],
            jobTitle: 'Software Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'Telkomsel',
            },
          }),
        }}
      />
    </Head>
  );
}