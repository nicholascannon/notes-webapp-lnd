import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import { CSSReset } from './CSSReset';
import { theme } from './theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    return (
        <EmotionThemeProvider theme={theme}>
            <CSSReset />
            {children}
        </EmotionThemeProvider>
    );
};
