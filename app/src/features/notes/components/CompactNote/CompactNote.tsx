import styled from '@emotion/styled';
import { useNotes } from '../..';
import { useDragAndDropNote } from '../../hooks/useDragAndDropNote';
import { Note } from '../../types';
import { Button } from '@/components/Button';
import { useTruncateText } from '@/hooks/useTruncateText';

export const CompactNote = ({
    note,
    dropIndex,
    onClick,
}: {
    note: Note;
    dropIndex?: number;
    onClick?: () => void;
}) => {
    const { deleteNote } = useNotes();
    const truncateTextRef = useTruncateText<HTMLParagraphElement>();
    const { dragRef, dropRef, isDragging } = useDragAndDropNote(dropIndex);

    if (isDragging) return <Container data-testid="drag-container" />;

    return (
        <Container ref={dragRef} onClick={onClick}>
            <InvisibleDropZone ref={dropRef} />

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

const InvisibleDropZone = styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
});

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
