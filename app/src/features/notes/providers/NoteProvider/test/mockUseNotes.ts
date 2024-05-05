// must use long import here for spy to work :(
import * as useNotes from '../NoteProvider';

export const mockUseNotes = () => {
    const addNote = jest.fn();
    const editNote = jest.fn();
    const deleteNote = jest.fn();
    const getNote = jest.fn();

    jest.spyOn(useNotes, 'useNotes').mockImplementation(() => ({
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
