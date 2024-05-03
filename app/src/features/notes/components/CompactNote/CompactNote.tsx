import styled from '@emotion/styled';
import { useNotes } from '../../providers/NoteProvider/NoteProvider';
import { Note } from '../../types';
import { CloseButton } from '@/components/CloseButton';

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
            <CloseButton
                className="close-button"
                // TODO: should add confirmation modal here
                onClick={() => deleteNote(note.id)}
            />
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
