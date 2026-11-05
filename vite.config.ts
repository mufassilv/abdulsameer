import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' makes the build work from any GitHub Pages path
// (https://<user>.github.io/<repo>/) without further configuration.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
