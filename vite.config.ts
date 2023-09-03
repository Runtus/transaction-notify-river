import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [
        ...VitePluginNode({
            adapter: "express",

            appPath: "./src/index.ts",

            exportName: "appTest",

            tsCompiler: "esbuild",

            // What's is swc: https://swc.rs/docs/configuration/swcrc
            swcOptions: {},
        }),
    ],
});
