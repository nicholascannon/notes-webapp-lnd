import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/theme';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <MotionConfig>
            <ThemeProvider>{children}</ThemeProvider>
        </MotionConfig>
    );
};
