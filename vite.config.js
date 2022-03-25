import { minifyHtml } from 'vite-plugin-html';
const { resolve } = require( "path");

module.exports = {
    server: {
        port: 4444,
    },
    build: {
        outDir: 'dist',
        // assetsDir: 'assets',
        // cssCodeSplit: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html")
            },
            plugins: [
                minifyHtml()
            ],
        },
    },
};