// vite.config.ts — dynamic base for GitHub Pages
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = 'thecueRoom_V2'
const base = process.env.GITHUB_ACTIONS ? `/${repo}/` : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
