import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/ATG',
  build: {
    outDir: 'dist', // Output folder for build
  },
})
