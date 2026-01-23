import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: process.env.VERCEL || process.env.NETLIFY ? './' : '/03-studio-site/',
})
