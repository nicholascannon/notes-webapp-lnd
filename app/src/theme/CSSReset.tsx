import { Global, css } from '@emotion/react';

export const CSSReset = () => (
    <Global
        styles={(theme) => css`
            /* Box sizing rules */
            *,
            *::before,
            *::after {
                box-sizing: border-box;
                color: ${theme.colors.foreground};
            }

            /* Remove default margin and padding */
            * {
                margin: 0;
                padding: 0;
            }

            /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
            ul,
            ol {
                list-style: none;
            }

            /* Set core root defaults */
            html:focus-within {
                scroll-behavior: smooth;
            }

            /* Set core body defaults */
            body {
                text-rendering: optimizeSpeed;
                line-height: 1.5;
                background-color: ${theme.colors.background};
                font-family: ${theme.font};
                position: relative;

                min-height: 100vh;
                max-width: 100vw;
                overflow-x: hidden;
            }

            /* A elements that don't have a class get default styles */
            a:not([class]) {
                text-decoration-skip-ink: auto;
            }

            /* Make images easier to work with */
            img,
            picture {
                max-width: 100%;
                display: block;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
                font: inherit;
            }

            /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
            @media (prefers-reduced-motion: reduce) {
                html:focus-within {
                    scroll-behavior: auto;
                }

                *,
                *::before,
                *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                }
            }
        `}
    />
);
