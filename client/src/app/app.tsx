import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotesPage } from './pages/NotesPage/NotesPage';
import { GlobalStyles } from './styles/global';
import { THEME } from './styles/theme';

export const App = () => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={THEME}>
                <GlobalStyles />

                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<NotesPage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    );
};
