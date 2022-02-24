import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // https://github.com/gxmari007/vite-plugin-eslint
    eslint(),

    // https://github.com/aleclarson/vite-tsconfig-paths
    tsconfigPaths(),

    // https://github.com/antfu/unplugin-auto-import
    autoImport({
      imports: ['react', 'react-router-dom'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
    legacy({
      targets: ['> 1%', 'last 2 versions', 'not dead'],
      modernPolyfills: ['es.object.entries', 'es.object.from-entries'],
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/scss/shared";`,
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [],
  },

  server: {
    fs: {
      strict: true,
    },
    port: 8080,
    proxy: {
      '/api': `http://localhost:3000`,
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
          'react-router-dom': ['react-router-dom'],
        },
      },
    },
  },
})
