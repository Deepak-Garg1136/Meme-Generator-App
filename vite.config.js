import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
export default {
  server: {
    host: '0.0.0.0', // Bind to all addresses
    port: 5173, // Specify your desired port (if needed)
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
