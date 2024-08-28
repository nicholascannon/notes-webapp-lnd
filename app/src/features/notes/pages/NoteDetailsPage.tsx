import { Navigate, useParams } from 'react-router-dom';
import { NoteDetails } from '../components/NoteDetails';
import { useNotes } from '../providers/NoteProvider';

export const NoteDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { getNote } = useNotes();

    const note = id ? getNote(id) : undefined;
    if (!note) {
        return <Navigate to="/" />;
    }

    return <NoteDetails note={note} />;
};
