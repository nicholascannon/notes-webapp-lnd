import styled from '@emotion/styled';
import { useNotes } from '../../providers/NoteProvider/NoteProvider';
import { Note } from '../../types';
import { Button } from '@/components/Button';

export const CompactNote = ({
    note,
    onClick,
}: {
    note: Note;
    onClick?: () => void;
}) => {
    const { deleteNote } = useNotes();

    return (
        <Container onClick={onClick}>
            <Button
                className="close-button"
                data-testid="close-button"
                style={{
                    position: 'absolute',
                    right: '-10px',
                    top: '-10px',
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    // TODO: should add confirmation modal here
                    deleteNote(note.id);
                }}
            >
                x
            </Button>

            <p>{note.text}</p>
        </Container>
    );
};

const Container = styled.article(({ theme }) => ({
    position: 'relative',

    padding: theme.sizes[8],
    backgroundColor: theme.colors.greys[2],

    border: `2px solid ${theme.colors.greys[2]}`,
    borderRadius: theme.borderRadius.radii.lg,

    cursor: 'pointer',
    userSelect: 'none',

    width: theme.sizes.xs,
    height: theme.sizes['2xs'],

    p: {
        overflow: 'hidden',
        height: '100%',
    },

    '&:hover': {
        backgroundColor: theme.colors.greys[3],
    },
    '&:focus': {
        border: `2px solid ${theme.colors.greys[0]}`,
        outline: 0,
    },

    '& > .close-button': {
        display: 'none',
    },
    '&:hover > .close-button': {
        display: 'block',
    },
}));
