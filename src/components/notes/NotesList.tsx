import { Note } from '@/lib/notion/types';
import { NoteCard } from './NoteCard';

type Props = {
  notes: Note[];
};

export function NotesList({ notes }: Props) {
  if (notes.length === 0) {
    return <p>No notes yet.</p>;
  }

  return (
    <ul
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {notes.map((note) => (
        <li key={note.id}>
          <NoteCard note={note} />
        </li>
      ))}
    </ul>
  );
}
