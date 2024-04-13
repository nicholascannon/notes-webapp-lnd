import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { theme } from '@/theme';

export const DeleteNoteButton = (props: Props) => {
    return (
        <StyledDeleteNoteButton
            data-testid="delete-button"
            whileTap={{ scale: theme.animation.button.tap.scale }}
            {...props}
        />
    );
};

type Props = ComponentProps<typeof StyledDeleteNoteButton>;

const StyledDeleteNoteButton = styled(motion.button)(({ theme }) => ({
    position: 'absolute',
    right: '-10px',
    top: '-10px',
    borderRadius: theme.borderRadius.radii.full,
    border: 'none',
    width: theme.sizes[8],
    height: theme.sizes[8],
    backgroundColor: theme.colors.greys[2],
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: theme.colors.greys[1],
    },
}));
