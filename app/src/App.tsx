import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@/theme';

export const App = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<h1>Hello, world</h1>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};
