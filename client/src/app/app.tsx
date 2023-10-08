import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { THEME } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotesPage } from './pages/NotesPage/NotesPage';

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
