import { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Dashboard/Navbar';
import Sidebar from '@/Components/Dashboard/Sidebar';

export default function DashboardLayout({ children, navigationItems, role = 'Usuario' }) {
    const { auth } = usePage().props;
    const user = auth.user;
    
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Cerrar sidebar en móvil al navegar
    useEffect(() => {
        setSidebarOpen(false);
    }, [usePage().url]);

    // Abrir sidebar por defecto en desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
            {/* Decorative background elements - similar to login */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 right-10 w-96 h-96 bg-teal-200/10 dark:bg-teal-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-10 w-96 h-96 bg-teal-300/10 dark:bg-teal-800/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
            {/* Navbar */}
            <Navbar 
                user={user} 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
            />

            {/* Layout Container */}
            <div className="flex pt-16">
                {/* Sidebar */}
                <Sidebar 
                    isOpen={sidebarOpen}
                    role={role}
                    navigationItems={navigationItems}
                />

                {/* Main Content */}
                <motion.main
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`flex-1 relative z-10 transition-all duration-300 ${
                        sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
                    }`}
                >
                    <div className="p-4 md:p-6 lg:p-8 w-full">
                        {children}
                    </div>
                </motion.main>
            </div>
        </div>
    );
}
