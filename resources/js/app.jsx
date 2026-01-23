import './bootstrap';
import '../css/app.css';
import 'react-toastify/dist/ReactToastify.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider, useTheme } from './Components/Theme/ThemeProvider';
import { ToastContainer } from 'react-toastify';

function ToastWrapper() {
    const { theme } = useTheme();
    return <ToastContainer theme={theme} position="top-right" autoClose={3000} />;
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <App {...props} />
                <ToastWrapper />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
