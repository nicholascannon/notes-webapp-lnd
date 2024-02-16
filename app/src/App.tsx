import { AppProvider } from '@/providers/AppProvider';
import { Router } from '@/router';

export const App = () => {
    return (
        <AppProvider>
            <Router />
        </AppProvider>
    );
};
