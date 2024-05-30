import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AddNoteButton } from '../components/AddNoteButton';
import { NotesList } from '../components/NotesList';
import { useNotes } from '../providers/NoteProvider/NoteProvider';
import { NoteDetailsPage } from './NoteDetailsPage';
import { Layout } from '@/components/Layout';

export const NotesPage = () => {
    const { pathname } = useLocation();
    const { notes } = useNotes();

    return (
        <Layout>
            <NotesList notes={notes} enableInitAnimation={pathname === '/'} />

            <AddNoteButton />

            <Routes>
                <Route path="/note/:id" element={<NoteDetailsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
};
