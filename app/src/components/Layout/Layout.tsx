import { ReactNode } from 'react';
import { theme } from '@/theme';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <main
            css={{
                minHeight: '100%',
                padding: theme.sizes[16],
            }}
        >
            {children}
        </main>
    );
};
