import styled from '@emotion/styled';
import { useState } from 'react';
import { Note } from '../../types';
import { DeleteNoteButton } from './DeleteNoteButton';

export const CompactNote = ({
    note,
    onClick,
}: {
    note: Note;
    onClick?: () => void;
}) => {
    const [onHover, setOnHover] = useState(false);

    return (
        <Container
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            onClick={onClick}
        >
            {onHover && (
                <DeleteNoteButton onClick={(e) => e.stopPropagation()}>
                    x
                </DeleteNoteButton>
            )}
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
}));
