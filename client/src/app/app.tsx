import { ThemeProvider } from '@emotion/react';
import { THEME } from './styles/theme';
import { GlobalStyles } from './styles/global';

export const App = () => {
    return (
        <ThemeProvider theme={THEME}>
            <GlobalStyles />
            <h1>Hello, world</h1>
        </ThemeProvider>
    );
};
