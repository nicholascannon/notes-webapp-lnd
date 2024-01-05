import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyles } from './styles/global';
import { THEME } from './styles/theme';

export const App = () => {
    return (
        <ThemeProvider theme={THEME}>
            <GlobalStyles />

            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<h1>Hello, world</h1>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};
