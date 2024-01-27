import { Router } from '@/router';
import { ThemeProvider } from '@/theme';

export const App = () => {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
};
