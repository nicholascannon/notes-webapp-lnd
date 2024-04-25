import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
            <ToastContainer
                position="bottom-right"
                hideProgressBar
                theme="dark"
            />
        </>
    );
};
