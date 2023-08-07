import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import {resolve} from 'node:path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})

