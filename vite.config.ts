import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import autoprefixer from "autoprefixer";
import { robots } from "vite-plugin-robots";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), robots({})],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}), // add options if needed
      ],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
