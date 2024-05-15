// can't use barrel import to spy
import * as NoteProvider from '../NoteProvider';

export const mockUseNotes = () => {
    const addNote = jest.fn();
    const editNote = jest.fn();
    const deleteNote = jest.fn();
    const getNote = jest.fn();

    jest.spyOn(NoteProvider, 'useNotes').mockImplementation(() => ({
        addNote,
        editNote,
        deleteNote,
        getNote,
        notes: [],
    }));

    return {
        addNote,
        editNote,
        deleteNote,
        getNote,
    };
};
