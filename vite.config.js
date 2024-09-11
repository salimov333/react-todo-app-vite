import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_DEPLOY_ENV === 'gh-pages' ? '/react-todo-app-vite/' : '/',
})
