import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "import.meta.env.VITE_FIREBASE_API_KEY": JSON.stringify(process.env.apiKey_2 || process.env.apiKey || ""),
  },
  server: {
    host: true,
    port: Number(process.env.DEV_PORT) || 3000,
    strictPort: false,
    allowedHosts: true,
  },
})
