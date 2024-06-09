import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import {
  fileURLToPath, URL
} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 8080,
    host: "0.0.0.0",
    open: true,
  },
  plugins: [
    vue(),
    Components({
      dts: fileURLToPath(new URL("./@types/components.d.ts", import.meta.url)),
      dirs: ["vue-router"],
    }),
    AutoImport({ 
      dts: fileURLToPath(new URL("./@types/auto-imports.d.ts", import.meta.url)),
      include: [
        /\.vue$/, 
        /\.vue\?vue/, // .vue
      ],
      imports: [
        "vue", 
        "vue-router",
      ],
      eslintrc: {
        "enabled": true,
        filepath: fileURLToPath(new URL("./eslint.auto-import.config.json", import.meta.url)),
      },
    }),  
  ],
  resolve: {
    alias: [
      {
        find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@components", replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
      },
      {
        find: "@pages", replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@store", replacement: fileURLToPath(new URL("./src/store", import.meta.url)),
      },
      {
        find: "@assets", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    ]},
  css: {preprocessorOptions: {scss: {additionalData: "@import \"@assets/styles/global.scss\";"}}},
});
