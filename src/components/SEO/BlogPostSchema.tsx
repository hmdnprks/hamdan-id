'use client';

import Head from 'next/head';

interface Frontmatter {
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  slug: string;
  category: string;
}

export default function BlogPostSchema({
  frontmatter,
}: {
  frontmatter: Frontmatter;
}) {
  const url = `https://hamdan.id/blog/${frontmatter.category}/${frontmatter.slug}`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: frontmatter.title,
            description: frontmatter.excerpt,
            author: {
              '@type': 'Person',
              name: 'Hamdan Prakoso',
            },
            datePublished: frontmatter.date,
            image: frontmatter.coverImage
              ? [`https://hamdan.id${frontmatter.coverImage}`]
              : undefined,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': url,
            },
          }),
        }}
      />
    </Head>
  );
}