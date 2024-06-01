/**
 * This impl works for a reasonable amount of notes data in local
 * storage. The data structure would need to be refactored in order
 * to support a large amounts of notes.
 *
 * Would need to move to a model where notes are saved individually
 * and another structure is needed to keep the ordering of the notes.
 */
import { Note } from '..';

const STORAGE_KEY = 'notes_app_data';
const EMPTY_SERIALIZED_STATE = '[]';

type StorageNote = Note & {
    lastUpdate: string; // Date gets serialized to a string when saved to localStorage
};

export const saveNotes = (notes: Note[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const getNotes = (): Note[] => {
    const rawState: StorageNote[] = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || EMPTY_SERIALIZED_STATE,
    );
    return rawState.map(mapToNote);
};

const mapToNote = (storageNote: StorageNote): Note => ({
    ...storageNote,
    lastUpdate: new Date(storageNote.lastUpdate),
});
