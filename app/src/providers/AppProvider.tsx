import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';
import { AnimationConfig } from '@/config/animations';
import { NoteProvider, getNotes } from '@/features/notes';
import { ThemeProvider } from '@/theme';

const NOTES = getNotes();

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AnimationConfig>
            <ThemeProvider>
                <ToastProvider>
                    <NoteProvider initialNotes={NOTES}>{children}</NoteProvider>
                </ToastProvider>
            </ThemeProvider>
        </AnimationConfig>
    );
};
