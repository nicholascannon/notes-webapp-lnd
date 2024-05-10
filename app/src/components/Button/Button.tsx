import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { theme } from '@/theme';

export const Button = (props: Props) => {
    return (
        <StyledButton
            data-testid="close-button"
            whileTap={{ scale: theme.animation.button.tap.scale }}
            {...props}
        />
    );
};

type Props = ComponentProps<typeof StyledButton>;

const StyledButton = styled(motion.button)(({ theme }) => ({
    borderRadius: theme.borderRadius.radii['3xl'],
    border: 'none',
    width: theme.sizes[8],
    height: theme.sizes[8],
    backgroundColor: theme.colors.greys[2],
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: theme.colors.greys[1],
    },
}));
