import { NotesList } from '@/components/notes/NotesList';
import { getPublishedNotes } from '@/lib/notion/getNotes';

export const revalidate = 60;

export default async function NotesPage() {
  const notes = await getPublishedNotes();

  return (
    <main className="max-w-6xl mx-auto py-16">
      <header className="mb-12">
        <h1 className="text-2xl font-semibold">Notes</h1>
        <p className="mt-2 text-neutral-600">
          Short thoughts, drafts, and things worth remembering.
        </p>
      </header>

      <NotesList notes={notes} />
    </main>
  );
}
