import { defineConfig } from 'vite'

// Static invitation page: index.html is served as written, assets live in public/ with their original paths.
export default defineConfig({
  build: { assetsInlineLimit: 0 },
})
