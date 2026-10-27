import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Trang chạy như một trang tĩnh (prerender): build ra thư mục dist/client, đưa lên
// Vercel / Cloudflare Pages / Netlify đều được.
export default defineConfig({
  server: { port: 8080 },
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({ prerender: { enabled: true } }),
    viteReact(),
    tailwindcss(),
  ],
});
