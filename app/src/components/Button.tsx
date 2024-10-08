import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { theme } from '@/theme';

export const Button = (props: Props) => {
    const { variant, size, ...buttonProps } = props;
    return (
        <StyledButton
            whileTap={{ scale: theme.animation.button.tap.scale }}
            variant={variant || 'PRIMARY'}
            size={size || 'sm'}
            {...buttonProps}
        />
    );
};

type Props = ComponentProps<typeof StyledButton>;

const StyledButton = styled(motion.button)<{
    variant?: 'PRIMARY' | 'SECONDARY';
    size?: 'sm' | 'md';
}>(({ theme, variant, size }) => ({
    cursor: 'pointer',
    userSelect: 'none',

    borderRadius: theme.borderRadius.radii['3xl'],
    border: 'none',

    width: size === 'sm' ? theme.sizes[8] : theme.sizes[12],
    height: size === 'sm' ? theme.sizes[8] : theme.sizes[12],

    backgroundColor:
        variant === 'PRIMARY' ? theme.colors.greys[2] : theme.colors.greys[1],
    '&:hover': {
        backgroundColor:
            variant === 'PRIMARY'
                ? theme.colors.greys[1]
                : theme.colors.greys[2],
    },
}));
