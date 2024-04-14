/* eslint-disable import/export */
import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '@/providers/AppProvider';

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) =>
    render(ui, {
        wrapper: ({ children }) => (
            <AppProvider>
                <BrowserRouter>{children}</BrowserRouter>
            </AppProvider>
        ),
        ...options,
    });

export * from '@testing-library/react';
export { customRender as render };

export const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
