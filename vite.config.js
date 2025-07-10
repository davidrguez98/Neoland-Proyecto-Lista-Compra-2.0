import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path';

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
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            },
            manifest: {
                name: 'Sistema de venta de cafe',
                short_name: 'StockApp',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#1d4ed8',
                icons: [
                    {
                        src: 'icons/icon-64.png',
                        sizes: '64x64', 
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: 'icons/icon-144.png',
                        sizes: '144x144', 
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: 'icons/icon-192.png',
                        sizes: '192x192', 
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: 'icons/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ],
                // Configuración para diferentes factores de forma
                screenshots: [
                    {
                        src: 'icons/icon-512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        form_factor: 'wide'
                    },
                    {
                        src: 'icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        form_factor: 'narrow'
                    }
                ]
            }
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    server: {
        port: 3000,     // Puerto del servidor
        open: true      // Abre el navegador al iniciar
    },
});