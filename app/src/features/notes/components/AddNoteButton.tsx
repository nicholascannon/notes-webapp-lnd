import { useNavigate } from 'react-router-dom';
import { useNotes } from '../providers/NoteProvider';
import { Button } from '@/components/Button';

export const AddNoteButton = () => {
    const navigate = useNavigate();
    const { addNote } = useNotes();

    return (
        <Button
            css={(theme) => ({
                position: 'fixed',
                bottom: theme.sizes[16],
                right: theme.sizes[16],
            })}
            variant="SECONDARY"
            size="md"
            onClick={() => {
                const { id } = addNote();
                navigate(`/note/${id}`);
            }}
        >
            +
        </Button>
    );
};
