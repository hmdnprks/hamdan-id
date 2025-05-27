import { NextResponse } from 'next/server';
import RSS from 'rss';
import { getAllPosts } from '@/lib/getAllPosts';

export const dynamic = 'force-static';

export async function GET() {
  const feed = new RSS({
    title: 'Hamdan Prakoso – Blog',
    description: 'Latest posts on software engineering, creative coding, and cinematic storytelling.',
    feed_url: 'https://hamdan.id/rss.xml',
    site_url: 'https://hamdan.id/',
    image_url: 'https://hamdan.id/favicon.ico',
    docs: 'https://validator.w3.org/feed/docs/rss2.html',
    managingEditor: 'hamdan@hamdan.id',
    webMaster: 'hamdan@hamdan.id',
    copyright: `© ${new Date().getFullYear()} Hamdan Prakoso`,
    language: 'en',
    categories: ['Frontend Development', 'Creative Coding', 'Photography', 'Web Performance'],
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 10);

  latestPosts.forEach((post) => {
    const postUrl = `https://hamdan.id/blog/${post.category}/${post.slug}`;
    feed.item({
      title: post.title,
      guid: postUrl,
      url: postUrl,
      description: post.excerpt || '',
      date: new Date(post.date),
    });
  });

  return new NextResponse(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}