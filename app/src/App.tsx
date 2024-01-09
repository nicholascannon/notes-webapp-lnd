import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<h1>Hello, world</h1>} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};
