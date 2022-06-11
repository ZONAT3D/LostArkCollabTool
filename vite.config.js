import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
    return defineConfig({
        root: 'src',
        build: {
            // Relative to the root
            outDir: '../dist',
        },
        plugins: [
            // …
            react({
                // Use React plugin in all *.jsx and *.tsx files
                include: '**/*.{jsx,tsx,js,ts}',
            }),
        ],
        resolve: {
            alias: {
              './runtimeConfig': './runtimeConfig.browser',
            },
        }
    })
};