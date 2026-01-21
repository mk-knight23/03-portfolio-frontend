import { defineConfig } from 'vite';

export default defineConfig({
    base: '/03-studio-site/',
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000,
        open: true,
    }
});
