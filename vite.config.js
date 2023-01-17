import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, './src/views'),
    }
  },
  plugins: [react()],
})
