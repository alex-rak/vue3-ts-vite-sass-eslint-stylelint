import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
      { find: "@components", replacement: fileURLToPath(new URL("./src/components", import.meta.url)) },
      { find: "@pages", replacement: fileURLToPath(new URL("./src/pages", import.meta.url)) },
      { find: "@store", replacement: fileURLToPath(new URL("./src/store", import.meta.url)) },
      { find: "@assets", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)) },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"@assets/styles/global.scss\";",
      },
    },
  },
});
