'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

const BASE_URL = 'https://hamdan.id';

export default function CanonicalTag() {
  const pathname = usePathname();

  const canonicalUrl = `${BASE_URL}${pathname === '/' ? '' : pathname}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}