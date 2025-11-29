import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/goit-neo-react-hw-module1/',
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
