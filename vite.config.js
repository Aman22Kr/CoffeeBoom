import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Quick setting: relative base works on any GitHub Pages repo name.
// Override with VITE_BASE=/my-repo/ if you prefer an absolute base.
export default defineConfig({
  base: process.env.VITE_BASE || './',
  plugins: [react()],
})
