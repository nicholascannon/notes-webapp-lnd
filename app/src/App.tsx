import { MotionConfig } from '@/config';
import { Router } from '@/router';
import { ThemeProvider } from '@/theme';

export const App = () => {
    return (
        <MotionConfig>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </MotionConfig>
    );
};
