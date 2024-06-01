import { ReactNode, createContext, useContext, useState } from 'react';
import { Note } from '../..';
import * as noteStorage from '../../storage/noteStorage';
import { getUUID } from '@/utils/getUUID';

export const NoteProvider = ({
    children,
    initialNotes,
}: {
    children: ReactNode;
    initialNotes?: Note[];
}) => {
    const [notes, setNotes] = useState<NoteState>(
        initialNotes
            ? initialNotes.reduce(
                  (notes, note) => ({ ...notes, [note.id]: note }),
                  {},
              )
            : {},
    );

    const saveNotes = (notes: NoteState) => {
        noteStorage.saveNotes(notes);
        setNotes(notes);
    };

    // TODO: maybe make these stable refs with useCallback?
    const addNote = (text?: string): Note => {
        const newNote: Note = {
            id: getUUID(),
            text: text || '',
            lastUpdate: new Date(),
        };
        saveNotes({ ...notes, [newNote.id]: newNote });
        return newNote;
    };

    const getNote = (id: string) => notes[id];

    const deleteNote = (id: string) => {
        const { [id]: deleted, ...updatedState } = notes;
        saveNotes(updatedState);
        return deleted;
    };

    const editNote = (id: string, text: string) => {
        if (!notes[id]) {
            throw new Error(
                `Unable to edit note: note with id ${id} does not exist`,
            );
        }

        saveNotes({
            ...notes,
            [id]: {
                ...notes[id],
                text,
                lastUpdate: new Date(),
            },
        });
    };

    return (
        <NoteContext.Provider
            value={{
                notes: Object.values(notes),
                addNote,
                getNote,
                deleteNote,
                editNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

export type NoteState = Record<string, Note>;

const NoteContext = createContext<ContextState | undefined>(undefined);

type ContextState = {
    notes: Note[];
    addNote: (text?: string) => Note;
    getNote: (id: string) => Note | undefined;
    deleteNote: (id: string) => Note | undefined;
    editNote: (id: string, text: string) => void;
};

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }

    return context;
};
