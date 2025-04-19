import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // 🔥 This line is crucial!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
