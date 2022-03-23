import { minifyHtml } from 'vite-plugin-html';
const { resolve } = require( "path");

module.exports = {
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