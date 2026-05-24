import Link from 'next/link';
import Image from 'next/image';
import { Note } from '@/lib/notion/types';

type Props = {
  note: Note;
};

export function NoteCard({ note }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:border-neutral-300">
      <Link href={`/notes/${note.slug}`} className="block">
        {/* Cover image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
          <Image
            src={note.cover || '/image-fallback.png'}
            alt={note.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Type badge */}
          {note.type && (
            <span className="mb-2 inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-600">
              {note.type}
            </span>
          )}

          <h2 className="mt-1 text-lg font-medium leading-snug text-neutral-900 group-hover:underline">
            {note.title}
          </h2>

          {note.excerpt && (
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{note.excerpt}</p>
          )}

          {note.date && (
            <time className="mt-4 block text-xs text-neutral-400">
              {new Date(note.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          )}
        </div>
      </Link>
    </article>
  );
}
