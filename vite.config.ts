import { defineConfig } from "vite";
// import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
    server: {
        port: 3000,
    },
    build: {
        lib: {
            entry: "src/index.ts",
            formats: ["es"]
        },
        rollupOptions: {
            external: ["crypto"]
        }
    },

});
