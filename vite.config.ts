import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  const srcPath = path.resolve(__dirname, 'src');

  const alias = {
    '@': srcPath
  }

  return {
    plugins: [
      react(),
    ],
    css: {
      modules: {
        generateScopedName: isBuild ? '[hash:base64:6]' : '[name]_[local]_[hash:base64:2]'
      },
    },
    resolve: {
      alias
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[hash].js',
          chunkFileNames: 'assets/[hash].js',
          assetFileNames: 'assets/[hash].[ext]'
        }
      }
    }
  }
})
