import { Theme } from '@emotion/react';

export const theme: Theme = {
    colors: {
        foreground: '#fff',
        background: '#000',
    },
};

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            foreground: string;
            background: string;
        };
    }
}
