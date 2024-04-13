import { ReactNode } from 'react';
import { AnimationConfig } from '@/config/animations';
import { NoteProvider } from '@/features/notes';
import { ThemeProvider } from '@/theme';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AnimationConfig>
            <ThemeProvider>
                <NoteProvider>{children}</NoteProvider>
            </ThemeProvider>
        </AnimationConfig>
    );
};
