import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// AdStudio frontend - Vite + React 18 (JavaScript / JSX, no TypeScript)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
