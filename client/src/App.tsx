import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotesPage } from './features/NotesPage';
import { GlobalStyles } from './styles/global';
import { THEME } from './styles/theme';

export const App = () => {
    return (
        <ThemeProvider theme={THEME}>
            <GlobalStyles />

            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<NotesPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};
