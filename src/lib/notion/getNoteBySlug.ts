/* eslint-disable @typescript-eslint/no-explicit-any */
import { Note } from './types';
import { isFullPage } from './guards';
import { notion } from './client';

function getText(prop: any): string {
  return prop?.rich_text?.[0]?.plain_text ?? '';
}

function getTitle(prop: any): string {
  return prop?.title?.[0]?.plain_text ?? '';
}

function getSelect(prop: any): string | undefined {
  return prop?.select?.name;
}

function getMultiSelect(prop: any): string[] {
  if (!prop?.multi_select) return [];
  return prop.multi_select.map((item: any) => item.name);
}

function getFileCover(prop: any): string | undefined {
  if (!prop || prop.type !== 'files') return undefined;

  const file = prop.files?.[0];
  if (!file) return undefined;

  if (file.type === 'external') return file.external.url;
  if (file.type === 'file') return file.file.url;

  return undefined;
}

function getDate(prop: any): string | undefined {
  if (!prop || prop.type !== 'date') return undefined;
  return prop.date?.start ?? undefined;
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  if (!process.env.NOTION_NOTES_DATASOURCE_ID) {
    return null;
  }

  try {
    const res = await notion.dataSources.query({
      data_source_id: process.env.NOTION_NOTES_DATASOURCE_ID!,
      filter: {
        and: [
          {
            property: 'published',
            checkbox: { equals: true },
          },
          {
            property: 'slug',
            rich_text: { equals: slug },
          },
        ],
      },
      page_size: 1,
    });

    const page = res.results.find(isFullPage);
    if (!page) return null;

    return {
      id: page.id,
      title: getTitle(page.properties.title),
      slug: getText(page.properties.slug),
      excerpt: getText(page.properties.excerpt),
      date: getDate(page.properties.date),
      cover: getFileCover(page.properties.cover),
      type: getSelect(page.properties.type) as Note['type'],
      tags: getMultiSelect(page.properties.tags),
    };
  } catch (error) {
    console.error(`Failed to fetch note with slug "${slug}" from Notion:`, error);
    return null;
  }
}
