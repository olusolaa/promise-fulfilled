import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages for repository: https://github.com/olusolaa/promise-fulfilled
  // set the base to the repo name so assets resolve correctly.
  base: '/promise-fulfilled/',
})
