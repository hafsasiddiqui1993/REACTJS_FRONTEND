import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/REACTJS_FRONTEND/',
  plugins: [react()],
})
