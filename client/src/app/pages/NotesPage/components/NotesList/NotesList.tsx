import { Note } from '../../../../types';

export const NotesList = ({ notes }: { notes: Array<Note> }) => {
    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>{note.text}</li>
            ))}
        </ul>
    );
};
