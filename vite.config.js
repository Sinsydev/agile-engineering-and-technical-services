 import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: "/agile-engieering-and-technical-services",
  server: {
    fs: {
      strict: true
    }
  }
});


