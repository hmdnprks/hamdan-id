'use client';

import Script from 'next/script';

export default function Umami() {
  return (
    <Script
      async
      defer
      src={process.env.NEXT_PUBLIC_UMAMI_SRC}
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
    />
  );
}