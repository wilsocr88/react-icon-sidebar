import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    root: __dirname,
    resolve: {
        alias: {
            "react-icon-sidebar": path.resolve(__dirname, "../src/index.js"),
        },
    },
    server: {
        open: true,
    },
    build: {
        outDir: path.resolve(__dirname, "dist"),
        emptyOutDir: true,
    },
});
