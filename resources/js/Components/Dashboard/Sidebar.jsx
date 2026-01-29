import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Home, FileText, ChevronRight } from 'lucide-react';

export default function Sidebar({ isOpen, role = 'Aspirante', navigationItems }) {
    const { url } = usePage();

    const isActive = (href) => {
        return url === href || url.startsWith(href + '/');
    };

    return (
        <>
            {/* Overlay para móvil */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={() => {}}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ x: isOpen ? 0 : -280 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-16 left-0 bottom-0 w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 shadow-lg z-30 flex flex-col lg:translate-x-0"
            >
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 border-b border-slate-200 dark:border-slate-800"
                >
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">
                            Menú Principal
                        </p>
                        <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <div className="text-slate-600 dark:text-slate-300 text-sm">Rol:</div>
                        <div className="font-semibold text-teal-700 dark:text-teal-400 text-sm">{role}</div>
                    </div>
                </motion.div>

                {/* Navigation */}
                <nav className="flex-1 p-3 overflow-y-auto">
                    <div className="space-y-1">
                        {navigationItems.map((item, index) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            return (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 + 0.15 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="group relative block"
                                    >
                                        <motion.div
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                                                active
                                                    ? 'bg-teal-600 text-white shadow-md'
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                            }`}
                                        >
                                            <Icon className={`w-5 h-5 flex-shrink-0 ${
                                                active ? 'text-white' : 'text-slate-500 dark:text-slate-400'
                                            }`} />
                                            <span className="flex-1 font-medium text-sm">
                                                {item.label}
                                            </span>
                                            {active && (
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        {/* Active indicator */}
                                        {active && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-teal-600 rounded-r-full shadow-md"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </nav>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"
                >
                    <div className="text-center space-y-1">
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                            Recluta v1.0
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            © 2026 Sistema Integral de Reclutamiento
                        </p>
                    </div>
                </motion.div>
            </motion.aside>
        </>
    );
}
