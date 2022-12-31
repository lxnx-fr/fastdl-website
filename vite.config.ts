import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//import vuetify from "vite-plugin-vuetify";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //eslintPlugin(),
    vue(),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
