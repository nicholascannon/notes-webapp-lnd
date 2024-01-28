import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

export const Button = (props: Props) => (
    <StyledButton
        initial={{
            scale: 0,
        }}
        whileTap={{
            scale: 0.9,
        }}
        whileInView={{
            scale: 1,
        }}
        {...props}
    />
);

type Props = ComponentProps<typeof StyledButton>;

const StyledButton = styled(motion.button)(({ theme }) => ({
    margin: 0,
    padding: `${theme.space[1]} ${theme.space[4]}`,

    borderRadius: theme.borderRadius.radii.md,
    border: `1px solid ${theme.colors.greys[1]}`,

    backgroundColor: theme.colors.greys[1],

    cursor: 'pointer',

    '&:hover': {
        backgroundColor: theme.colors.greys[2],
    },

    '&:active': {
        border: `1px solid ${theme.colors.greys[0]}`,
    },
    '&:focus': {
        border: `1px solid ${theme.colors.greys[0]}`,
        outline: 0,
    },
}));
