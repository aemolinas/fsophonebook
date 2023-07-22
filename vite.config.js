import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    name: 'happy-dom',
    root: './src',
    environment: 'happy-dom',
  }
})
