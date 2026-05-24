import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getNoteBySlug } from '@/lib/notion/getNoteBySlug';
import { getNoteBlocks } from '@/lib/notion/getNoteBlocks';
import { NotionBlocks } from '@/components/notes/NotionBlocks';

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) notFound();

  const blocks = await getNoteBlocks(note.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      {/* Cover */}
      {note.cover && (
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl">
          <Image src={note.cover} alt={note.title} fill className="object-cover" />
        </div>
      )}

      {/* Meta */}
      <header className="mb-12">
        {note.type && (
          <span className="mb-3 inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
            {note.type}
          </span>
        )}

        <h1 className="text-3xl font-semibold leading-tight">{note.title}</h1>

        {note.date && (
          <time className="mt-2 block text-sm text-neutral-400">
            {new Date(note.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
      </header>

      {/* Content */}
      <NotionBlocks blocks={blocks} />

      {/* Tags */}
      {note.tags && note.tags.length > 0 && (
        <footer className="mt-16 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
            >
              #{tag}
            </span>
          ))}
        </footer>
      )}
    </main>
  );
}
