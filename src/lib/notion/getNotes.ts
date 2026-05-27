/* eslint-disable @typescript-eslint/no-explicit-any */
import { Note } from './types';
import { notion } from './client';

function getText(prop: any): string {
  return prop?.rich_text?.[0]?.plain_text ?? '';
}

function getTitle(prop: any): string {
  return prop?.title?.[0]?.plain_text ?? '';
}

function getFileCover(prop: any): string | undefined {
  if (!prop || prop.type !== 'files') return undefined;

  const file = prop.files?.[0];
  if (!file) return undefined;

  if (file.type === 'external') {
    return file.external.url;
  }

  if (file.type === 'file') {
    return file.file.url;
  }

  return undefined;
}

function getSelect(prop: any): string | undefined {
  return prop?.select?.name;
}

function getMultiSelect(prop: any): string[] {
  if (!prop?.multi_select) return [];
  return prop.multi_select.map((item: any) => item.name);
}

export async function getPublishedNotes(): Promise<Note[]> {
  if (!process.env.NOTION_NOTES_DATASOURCE_ID) {
    return [];
  }

  try {
    const res = await notion.dataSources.query({
      data_source_id: process.env.NOTION_NOTES_DATASOURCE_ID!,
      filter: {
        property: 'published',
        checkbox: { equals: true },
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending',
        },
      ],
    });

    return res.results.map((page: any) => {
      return {
        id: page.id,
        title: getTitle(page.properties.title),
        slug: getText(page.properties.slug),
        excerpt: getText(page.properties.excerpt),
        date: page.properties.date?.date?.start,
        cover: getFileCover(page.properties.cover),
        type: getSelect(page.properties.type) as Note['type'],
        tags: getMultiSelect(page.properties.tags),
      };
    });
  } catch (error) {
    console.error('Failed to fetch published notes from Notion:', error);
    return [];
  }
}
