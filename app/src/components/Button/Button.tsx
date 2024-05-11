import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { theme } from '@/theme';

export const Button = (props: Props) => {
    const { $variant, ...buttonProps } = props;
    return (
        <StyledButton
            whileTap={{ scale: theme.animation.button.tap.scale }}
            $variant={$variant || 'PRIMARY'}
            {...buttonProps}
        />
    );
};

type Props = ComponentProps<typeof StyledButton>;

const StyledButton = styled(motion.button)<{ $variant?: ButtonVariant }>(
    ({ theme, $variant }) => ({
        cursor: 'pointer',
        userSelect: 'none',

        borderRadius: theme.borderRadius.radii['3xl'],
        border: 'none',

        width: theme.sizes[8],
        height: theme.sizes[8],

        backgroundColor:
            $variant === 'PRIMARY'
                ? theme.colors.greys[2]
                : theme.colors.greys[1],
        '&:hover': {
            backgroundColor:
                $variant === 'PRIMARY'
                    ? theme.colors.greys[1]
                    : theme.colors.greys[2],
        },
    }),
);

type ButtonVariant = 'PRIMARY' | 'SECONDARY';
