import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log("process.env.VITE_DEPLOY_ENV", process.env.VITE_DEPLOY_ENV);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_DEPLOY_ENV === 'gh-pages' ? '/react-todo-app-vite/' : '/',
})
