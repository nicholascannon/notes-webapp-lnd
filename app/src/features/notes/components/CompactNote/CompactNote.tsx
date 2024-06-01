import styled from '@emotion/styled';
import { useNotes } from '../..';
import { Note } from '../../types';
import { Button } from '@/components/Button';
import { useTruncateText } from '@/hooks/useTruncateText';

export const CompactNote = ({
    note,
    onClick,
}: {
    note: Note;
    onClick?: () => void;
}) => {
    const { deleteNote } = useNotes();
    const truncateTextRef = useTruncateText<HTMLParagraphElement>();

    return (
        <Container onClick={onClick}>
            <Button
                className="delete-note-button"
                data-testid="delete-note-button"
                css={{
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

            <ContentWrapper>
                <p ref={truncateTextRef}>{note.text}</p>
            </ContentWrapper>
        </Container>
    );
};

const ContentWrapper = styled.div({
    overflow: 'hidden',
    height: '100%',

    p: {
        overflowWrap: 'anywhere',
    },
});

const Container = styled.article(({ theme }) => ({
    position: 'relative',

    padding: theme.sizes[8],
    backgroundColor: theme.colors.greys[2],

    border: `2px solid ${theme.colors.greys[2]}`,
    borderRadius: theme.borderRadius.radii.lg,

    cursor: 'pointer',
    userSelect: 'none',

    height: '100%',

    '&:hover': {
        backgroundColor: theme.colors.greys[3],
    },
    '&:focus': {
        border: `2px solid ${theme.colors.greys[0]}`,
        outline: 0,
    },

    '& > .delete-note-button': {
        display: 'none',
    },
    '&:hover > .delete-note-button': {
        display: 'block',
    },
}));
