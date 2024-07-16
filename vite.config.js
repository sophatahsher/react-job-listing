import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`) });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const apiBaseUrl = process.env.VITE_API_BASE_URL;
  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: apiBaseUrl ? apiBaseUrl : 'http://localhost:5000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
  };
})
