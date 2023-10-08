import { Theme } from '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            foreground: string;
            background: string;
        };
    }
}

export const THEME: Theme = {
    colors: {
        foreground: '#fff',
        background: '#000',
    },
};
