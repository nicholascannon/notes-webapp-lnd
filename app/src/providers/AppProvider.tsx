import { ReactNode } from 'react';
import { AnimationConfig } from '@/config/animations';
import { ThemeProvider } from '@/theme';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AnimationConfig>
            <ThemeProvider>{children}</ThemeProvider>
        </AnimationConfig>
    );
};
