import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { theme } from '@/theme';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <main
                css={{
                    padding: theme.sizes[16],
                }}
            >
                {children}
            </main>
            <Footer />
        </>
    );
};
