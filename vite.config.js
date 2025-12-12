import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/pages/index.html',
        akumaverse: 'src/pages/Akumaverse-Dimensão_Sombria.html',
        lumencore: 'src/pages/LumenCore-Dimensão_do_Conhecimento.html',
        noctforge: 'src/pages/NoctForge-Forja_de_Ideias.html'
      }
    }
  },
  server: {
    port: 3001,
    open: '/src/pages/index.html'
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