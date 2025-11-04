import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Dockerコンテナ外からのアクセスを許可
    port: 5173, 
    watch: {
      usePolling: true, // ホットリロードの安定性を向上させる
    }
  }
})
