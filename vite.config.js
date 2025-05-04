import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  build: {
    outDir: 'dist',
    rollupOptions:{
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  base: './',
  server:{
    historyApiFallback: true
  }
})
