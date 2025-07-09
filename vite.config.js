import { defineConfig } from 'vite';
import { resolve } from 'path';
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    root: '.',              // Carpeta base
    publicDir: 'public',    // Archivos estáticos
    build: {
        outDir: 'dist',     // Carpeta de salida
        rollupOptions: {
            input: {
                // Clave: nombre del chunk, Valor: ruta del archivo HTML
                main: resolve(__dirname, 'index.html'),
                dashboard: resolve(__dirname, 'views/view-dashboard.html'),
            },
        },
    },
    plugins: [
        // VitePWA({
        //     registerType: 'autoUpdate',
        //     manifest: {
        //         name: 'Sistema de Stock y Ventas',
        //         short_name: 'StockApp',
        //         start_url: '/',
        //         display_override: ['window-controls-overlay'],
        //         lang: 'es-ES',
        //         display: 'standalone',
        //         background_color: '#ffffff',
        //         theme_color: '#1d4ed8',
        //         screenshots: [
        //             {
        //                 "src": "screenshots/screenshot-desktop.png",
        //                 "sizes": "1920x1080",
        //                 "form_factor": "wide",
        //                 "label": "Desktop view showing weekly meal calendar"
        //             },
        //             {
        //                 "src": "screenshots/screenshot-mobile.png",
        //                 "sizes": "750x1334",
        //                 "form_factor": "narrow",
        //                 "label": "Mobile view showing weekly meal calendar"
        //             }
        //         ],
        //         icons: [
        //             {
        //                 src: 'pwa-64x64.png',
        //                 sizes: '64x64',
        //                 type: 'image/png',
        //             },
        //             {
        //                 src: 'pwa-192x192.png',
        //                 sizes: '192x192',
        //                 type: 'image/png',
        //                 purpose: 'any',
        //             },
        //             {
        //                 src: 'pwa-512x512.png',
        //                 sizes: '512x512',
        //                 type: 'image/png',
        //                 purpose: 'maskable',
        //             },
        //         ],
        //     }
        // })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    server: {
        port: 3000,     // Puerto del servidor
        open: true      // Abre el navegador al iniciar
    },
});