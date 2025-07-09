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
            manifest: {
                name: 'Sistema de venta de cafe',
                short_name: 'StockApp',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#1d4ed8',
                icons: [
                    {
                        src: '/icons/icon-144.png', //añadir iconos
                        sizes: '144x144', 
                        type: 'image/png'
                    },
                    {
                        src: '/icons/icon-192.png', //añadir iconos
                        sizes: '192x192', 
                        type: 'image/png'
                    },
                    {
                        src: '/icons/icon-512.png', //añadir iconos
                        sizes: '512x512',
                        type: 'image/png'
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