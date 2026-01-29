import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/Components/Theme/ThemeToggle';
import NotificationDropdown from './NotificationDropdown';
import UserDropdown from './UserDropdown';

export default function Navbar({ user, sidebarOpen, setSidebarOpen }) {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm z-40"
        >
            <div className="h-full px-3 sm:px-4 md:px-6 flex items-center justify-between gap-2 sm:gap-4">
                {/* Left: Menu Toggle Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Toggle menu"
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: sidebarOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {sidebarOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-300" />
                        )}
                    </motion.div>
                </motion.button>

                {/* Center: Logo */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="flex-1 flex justify-center"
                >
                    <span className="text-lg sm:text-xl font-bold text-teal-700 dark:text-teal-400">
                        Recluta
                    </span>
                </motion.div>

                {/* Right: Actions */}
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="flex items-center gap-1 sm:gap-2"
                >
                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Notifications */}
                    <NotificationDropdown />

                    {/* User Menu */}
                    <UserDropdown user={user} />
                </motion.div>
            </div>
        </motion.nav>
    );
}
