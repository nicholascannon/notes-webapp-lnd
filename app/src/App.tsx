import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CSSReset, theme } from './theme';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />

            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<h1>Hello, world</h1>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};
