import { Navigate, useParams } from 'react-router-dom';
import { useNotes } from '..';
import { NoteDetails } from '../components/NoteDetails';

export const NoteDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { getNote } = useNotes();

    const note = id ? getNote(id) : undefined;
    if (!note) {
        // TODO: trigger modal so user knows note is not found
        return <Navigate to="/" />;
    }

    return <NoteDetails note={note} />;
};
