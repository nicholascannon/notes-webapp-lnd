import { ReactNode, createContext, useContext, useState } from 'react';
import { Note } from '..';
import * as noteStorage from '../storage/noteStorage';
import { getUUID } from '@/utils/getUUID';

export const NoteProvider = ({
    children,
    initialNotes = [],
}: {
    children: ReactNode;
    initialNotes?: Note[];
}) => {
    const [notes, setNotes] = useState<Note[]>(initialNotes);

    const saveNotes = (notes: Note[]) => {
        noteStorage.saveNotes(notes);
        setNotes(notes);
    };

    // TODO: maybe make these stable refs with useCallback?
    const addNote = (text?: string): Note => {
        const note: Note = {
            id: getUUID(),
            text: text || '',
            lastUpdate: new Date(),
        };
        saveNotes([...notes, note]);
        return note;
    };

    const getNote = (id: string) => notes.find((note) => note.id === id);

    const deleteNote = (id: string) => {
        const note = getNote(id);
        if (!note) return undefined;

        saveNotes(notes.filter((note) => note.id !== id));
        return note;
    };

    const editNote = (id: string, text: string) => {
        const noteIndex = notes.findIndex((note) => note.id === id);
        if (noteIndex === -1) {
            throw new Error(
                `Unable to edit note: note with id ${id} does not exist`,
            );
        }

        const updatedNotes = [...notes];
        updatedNotes[noteIndex] = {
            ...updatedNotes[noteIndex],
            text,
            lastUpdate: new Date(),
        };
        saveNotes(updatedNotes);
    };

    const moveNotes = (from: number, to: number) => {
        const maxPosition = notes.length - 1;
        if (from < 0 || to < 0 || from > maxPosition || to > maxPosition) {
            return;
        }

        const updatedNotes = [...notes];
        [updatedNotes[from], updatedNotes[to]] = [
            updatedNotes[to],
            updatedNotes[from],
        ];
        saveNotes(updatedNotes);
    };

    return (
        <NoteContext.Provider
            value={{
                notes,
                addNote,
                getNote,
                deleteNote,
                editNote,
                moveNotes,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

const NoteContext = createContext<ContextState | undefined>(undefined);

type ContextState = {
    notes: Note[];
    addNote: (text?: string) => Note;
    getNote: (id: string) => Note | undefined;
    deleteNote: (id: string) => Note | undefined;
    editNote: (id: string, text: string) => void;
    moveNotes: (from: number, to: number) => void;
};

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }

    return context;
};
