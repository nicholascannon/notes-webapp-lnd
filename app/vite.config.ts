/// <reference types="vitest" />
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        react({
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
            jsxImportSource: '@emotion/react',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/config/vitest.ts',
        clearMocks: true,
    },
});
