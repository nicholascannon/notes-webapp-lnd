import { ReactNode, createContext, useContext, useState } from 'react';
import { Note } from '../..';
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

    // TODO: maybe make these stable refs with useCallback?
    const addNote = (text: string) => {
        const note: Note = {
            id: getUUID(),
            text,
            lastUpdate: new Date(),
        };
        setNotes((notes) => ({ ...notes, [note.id]: note }));
    };
    const getNote = (id: string) => notes[id];
    const deleteNote = (id: string) => {
        const { [id]: deleted, ...newNotes } = notes;
        setNotes(newNotes);
        return deleted;
    };
    const editNote = (id: string, text: string) => {
        if (!notes[id]) {
            throw new Error(
                `Unable to edit note: note with id ${id} does not exist`,
            );
        }

        const note: Note = { ...notes[id], text, lastUpdate: new Date() };
        setNotes((notes) => ({ ...notes, [note.id]: note }));

        return note;
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

type NoteState = Record<string, Note>;

const NoteContext = createContext<ContextState | undefined>(undefined);

type ContextState = {
    notes: Note[];
    addNote: (text: string) => void;
    getNote: (id: string) => Note | undefined;
    deleteNote: (id: string) => Note | undefined;
    editNote: (id: string, text: string) => Note;
};

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }

    return context;
};
