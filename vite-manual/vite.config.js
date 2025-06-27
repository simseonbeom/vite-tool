import { defineConfig } from "vite";
import { resolve } from "node:path";

const env = process.env.NODE_ENV;


export default defineConfig({
  build: {
    outDir: "docs",
  },
  server: {
    host: "localhost",
    port: 3000,
    cors: true,
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName:
        env === "development"
          ? "[hash:base64:2]"
          : "css-[local]-[hash:base64:6]",
    },
  },
  resolve: {
    alias:{'@' : resolve(__dirname,'src') }
  },
});







