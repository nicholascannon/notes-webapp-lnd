import { ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
                    <DndProvider backend={HTML5Backend}>
                        <NoteProvider initialNotes={NOTES}>
                            {children}
                        </NoteProvider>
                    </DndProvider>
                </ToastProvider>
            </ThemeProvider>
        </AnimationConfig>
    );
};
