import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN!,
});

export async function getNoteBlocks(pageId: string) {
  const blocks = [];
  let cursor: string | undefined;

  while (true) {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });

    blocks.push(...res.results);

    if (!res.has_more) break;
    cursor = res.next_cursor ?? undefined;
  }

  return blocks;
}
