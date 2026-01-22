import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
};

const colors = {
    success: 'bg-teal-50 border-teal-200 text-teal-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
};

const iconColors = {
    success: 'text-teal-600',
    error: 'text-red-600',
    warning: 'text-amber-600',
    info: 'text-blue-600',
};

export default function Toast({ message, type = 'info', onClose, duration = 5000 }) {
    const Icon = icons[type];

    useEffect(() => {
        if (duration) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={`flex items-center gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm ${colors[type]}`}
            role="alert"
            aria-live="polite"
        >
            <Icon className={iconColors[type]} size={20} />
            <p className="flex-1 text-sm font-medium">{message}</p>
            <motion.button
                onClick={onClose}
                className="text-current opacity-60 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Cerrar notificación"
            >
                <X size={18} />
            </motion.button>
        </motion.div>
    );
}
