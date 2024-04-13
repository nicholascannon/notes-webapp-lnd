import { ReactNode } from 'react';
import { MotionConfig } from '@/config/motion';
import { ThemeProvider } from '@/theme';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <MotionConfig>
            <ThemeProvider>{children}</ThemeProvider>
        </MotionConfig>
    );
};
