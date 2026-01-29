import { useState, useRef, useEffect } from 'react';
import { Link, router } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';

export default function UserDropdown({ user }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        router.post(route('logout'));
    };

    // Generar iniciales del email
    const getInitials = () => {
        if (user.nombre && user.pApelldio) {
            return `${user.nombre.charAt(0)}${user.pApelldio.charAt(0)}`.toUpperCase();
        }
        return user.email.substring(0, 2).toUpperCase();
    };

    // Nombre completo
    const getFullName = () => {
        if (user.nombre && user.pApelldio) {
            return `${user.nombre} ${user.pApelldio} ${user.sApellido || ''}`.trim();
        }
        return user.email;
    };

    const menuItems = [
        { icon: User, label: 'Ver perfil', href: route('profile.edit') },
        { icon: HelpCircle, label: 'Soporte', href: '#' },
        { icon: LogOut, label: 'Cerrar sesión', onClick: handleLogout, danger: true }
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-600 flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-md"
                >
                    {getInitials()}
                </motion.div>
                <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight">
                        {getFullName()}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                        {user.email}
                    </p>
                </div>
                <ChevronDown 
                    className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50"
                    >
                        {/* User Info Header */}
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-semibold shadow-md">
                                    {getInitials()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-slate-800 dark:text-slate-200 truncate">
                                        {getFullName()}
                                    </p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {item.onClick ? (
                                        <button
                                            onClick={item.onClick}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                                item.danger
                                                    ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                            }`}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            {item.label}
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                                item.danger
                                                    ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                            }`}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
