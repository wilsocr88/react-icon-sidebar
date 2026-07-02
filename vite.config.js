import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "SideMenu",
            fileName: format => `react-icon-sidebar.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "react-icons"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react-icons": "ReactIcons",
                },
            },
        },
    },
});
