/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';

export function NotionBlocks({ blocks }: { blocks: any[] }) {
  function getImageUrl(block: any): string | null {
    if (block.type !== 'image') return null;

    if (block.image.type === 'external') {
      return block.image.external.url;
    }

    if (block.image.type === 'file') {
      return block.image.file.url;
    }

    return null;
  }

  return (
    <div className="prose prose-neutral max-w-none">
      {blocks.map((block) => {
        if (block.type === 'paragraph') {
          return <p key={block.id}>{block.paragraph.rich_text[0]?.plain_text}</p>;
        }

        if (block.type === 'heading_2') {
          return <h2 key={block.id}>{block.heading_2.rich_text[0]?.plain_text}</h2>;
        }

        if (block.type === 'bulleted_list_item') {
          return (
            <ul key={block.id}>
              <li>{block.bulleted_list_item.rich_text[0]?.plain_text}</li>
            </ul>
          );
        }

        if (block.type === 'image') {
          const src = getImageUrl(block);
          if (!src) return null;

          return (
            <figure key={block.id} className="my-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-neutral-100">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            </figure>
          );
        }

        return null;
      })}
    </div>
  );
}
