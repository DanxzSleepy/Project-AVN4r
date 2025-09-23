import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/pages',
  publicDir: '../../public',
  build: {
    outDir: '../../dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@scripts': '/src/scripts'
    }
  }
})