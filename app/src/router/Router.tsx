import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotesPage } from '@/features/notes';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<NotesPage />} />
            </Routes>
        </BrowserRouter>
    );
};
