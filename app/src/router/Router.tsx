import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<h1>Hello, world</h1>} />
            </Routes>
        </BrowserRouter>
    );
};
