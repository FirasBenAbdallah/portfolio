import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",

  server: {
    open: true,
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("/node_modules/")) {
            return;
          }

          // React et React DOM
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/scheduler/")
          ) {
            return "react-vendor";
          }

          // Toutes les dépendances Firebase
          // regroupées dans un seul chunk
          if (
            id.includes("/@firebase/") ||
            id.includes("/firebase/")
          ) {
            return "firebase-vendor";
          }
        },
      },
    },
  },
});
