import { NotesList } from './components/NotesList/NotesList';

export const NotesPage = () => {
    return (
        <NotesList
            notes={[
                {
                    id: '1',
                    lastEdited: new Date().toISOString(),
                    text: 'Hello, world',
                },
            ]}
        />
    );
};
