import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';
import { AnimationConfig } from '@/config/animations';
import { NoteProvider } from '@/features/notes';
import { ThemeProvider } from '@/theme';
import { getUUID } from '@/utils/getUUID';

export const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AnimationConfig>
            <ThemeProvider>
                <ToastProvider>
                    <NoteProvider
                        // TODO: fetch these from localStorage
                        initialNotes={[
                            {
                                id: getUUID(),
                                lastUpdate: new Date(),
                                text: 'Please update me',
                            },
                        ]}
                    >
                        {children}
                    </NoteProvider>
                </ToastProvider>
            </ThemeProvider>
        </AnimationConfig>
    );
};
