import { useParams } from 'react-router-dom';
import { NoteDetails } from '../components/NoteDetails';

export const NoteDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    return <NoteDetails id={id!} />;
};
