import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useState,
} from 'react';
import { NIL as NIL_UUID } from 'uuid';
import { Note } from '../..';

// TODO: remove this test note
const TEST_NOTE = {
    id: NIL_UUID,
    lastUpdate: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non at exercitationem libero molestiae, labore quae autem fuga facilis distinctio sequi totam ullam cumque ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non at exercitationem libero molestiae, labore quae autem fuga facilis distinctio sequi totam ullam cumque ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non at exercitationem libero molestiae, labore quae autem fuga facilis distinctio sequi totam ullam cumque ab.',
};

export const NoteProvider = ({ children }: { children: ReactNode }) => {
    const [notes, setNotes] = useState<Note[]>([TEST_NOTE]);

    const addNote = useCallback(
        (note: Note) => setNotes((notes) => [...notes, note]),
        [],
    );

    // TODO: this list structure doesn't scale well
    const getNote = (id: string): Note | undefined =>
        notes.find((note) => note.id === id);

    return (
        <NoteContext.Provider value={{ notes, addNote, getNote }}>
            {children}
        </NoteContext.Provider>
    );
};

const NoteContext = createContext<NoteState | undefined>(undefined);

type NoteState = {
    notes: Note[];
    addNote: (note: Note) => void;
    getNote: (id: string) => Note | undefined;
};

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }

    return context;
};
