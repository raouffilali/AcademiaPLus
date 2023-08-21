import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{ 
    // open the server to connect with another device 
    
  },
  plugins: [react()],
})
