import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Note } from '..';
import { NotesList } from '../components/NotesList';
import { NoteDetailsPage } from './NoteDetailsPage';
import { Layout } from '@/components/Layout';

export const NotesPage = () => {
    const { pathname } = useLocation();
    // TODO: pull notes from localStorage
    const notes: Note[] = [
        {
            id: uuid(),
            lastUpdate: new Date(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non at exercitationem libero molestiae, labore quae autem fuga facilis distinctio sequi totam ullam cumque ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non at exercitationem libero molestiae, labore quae autem fuga facilis distinctio sequi totam ullam cumque ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto non at exercitationem libero molestiae, labore quae autem fuga facilis distinctio sequi totam ullam cumque ab.',
        },
    ];

    return (
        <Layout>
            <NotesList notes={notes} enableInitAnimation={pathname === '/'} />

            <Routes>
                <Route path="/note/:id" element={<NoteDetailsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
};
