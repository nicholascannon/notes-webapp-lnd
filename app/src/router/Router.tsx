import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <motion.h1
                            initial={{ opacity: 0.01, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            Hello, world
                        </motion.h1>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
