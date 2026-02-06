import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // optional: same port as CRA
  },
  build: {
    outDir: 'build', // same as CRA output
  },
});
