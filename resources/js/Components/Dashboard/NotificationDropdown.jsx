import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, X, Info, AlertCircle } from 'lucide-react';

export default function NotificationDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    // Ejemplo de notificaciones - esto vendría del backend
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'info',
            message: 'Tu formulario ha sido guardado correctamente',
            time: 'Hace 5 min',
            read: false
        },
        {
            id: 2,
            type: 'success',
            message: 'Documento validado exitosamente',
            time: 'Hace 1 hora',
            read: false
        },
        {
            id: 3,
            type: 'warning',
            message: 'Recuerda completar tu formulario',
            time: 'Hace 2 horas',
            read: true
        }
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const markAsRead = (id) => {
        setNotifications(notifications.map(n => 
            n.id === id ? { ...n, read: true } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const getIcon = (type) => {
        switch (type) {
            case 'success':
                return <Check className="w-4 h-4 text-green-500" />;
            case 'warning':
                return <AlertCircle className="w-4 h-4 text-yellow-500" />;
            default:
                return <Info className="w-4 h-4 text-blue-500" />;
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-300" />
                {unreadCount > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-teal-600 rounded-full text-white text-[10px] sm:text-xs flex items-center justify-center font-medium"
                    >
                        {unreadCount}
                    </motion.span>
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50"
                    >
                        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                            <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                                Notificaciones
                            </h3>
                            {unreadCount > 0 && (
                                <button
                                    onClick={markAllAsRead}
                                    className="text-xs text-teal-600 dark:text-teal-400 hover:underline"
                                >
                                    Marcar todas como leídas
                                </button>
                            )}
                        </div>

                        <div className="max-h-96 overflow-y-auto">
                            {notifications.length === 0 ? (
                                <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                                    <Bell className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                    <p className="text-sm">No tienes notificaciones</p>
                                </div>
                            ) : (
                                notifications.map((notification) => (
                                    <motion.div
                                        key={notification.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className={`p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors ${
                                            !notification.read ? 'bg-teal-50/50 dark:bg-teal-900/10' : ''
                                        }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 mt-1">
                                                {getIcon(notification.type)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-slate-800 dark:text-slate-200">
                                                    {notification.message}
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                    {notification.time}
                                                </p>
                                            </div>
                                            {!notification.read && (
                                                <button
                                                    onClick={() => markAsRead(notification.id)}
                                                    className="flex-shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        <div className="p-3 border-t border-slate-200 dark:border-slate-700">
                            <button className="w-full text-center text-sm text-teal-600 dark:text-teal-400 hover:underline">
                                Ver todas las notificaciones
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
