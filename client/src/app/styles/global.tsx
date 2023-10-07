import { Global } from '@emotion/react';

export const GlobalStyles = () => (
    <Global
        styles={(theme) => ({
            '*, *::before, *::after': {
                boxSizing: 'border-box',
            },
            '*': {
                margin: 0,
            },
            body: {
                lineHeight: 1.5,
                WebkitFontSmoothing: 'antialiased',
                color: theme.colors.foreground,
                backgroundColor: theme.colors.background,
            },
            'img, picture, video, canvas, svg': {
                display: 'block',
                maxWidth: '100%',
            },
            'input, button, textarea, select': {
                font: 'inherit',
            },
            'p, h1, h2, h3, h4, h5, h6': {
                overflowWrap: 'break-word',
            },
        })}
    />
);
