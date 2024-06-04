// can't use barrel import to spy
import * as NoteProvider from '../NoteProvider';

export const mockUseNotes = () => {
    const addNote = vi.fn();
    const editNote = vi.fn();
    const deleteNote = vi.fn();
    const getNote = vi.fn();
    const moveNotes = vi.fn();

    vi.spyOn(NoteProvider, 'useNotes').mockImplementation(() => ({
        addNote,
        editNote,
        deleteNote,
        getNote,
        moveNotes,
        notes: [],
    }));

    return {
        notes: [],
        addNote,
        editNote,
        deleteNote,
        getNote,
        moveNotes,
    };
};
