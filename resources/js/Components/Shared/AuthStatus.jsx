import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function AuthStatus({ status, type = 'success' }) {
    if (!status) return null;

    const typeStyles = {
        success: 'bg-teal-50 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 text-teal-700 dark:text-teal-300',
        error: 'bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300',
        info: 'bg-blue-50 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300'
    };

    const iconColor = {
        success: 'text-teal-600 dark:text-teal-400',
        error: 'text-red-600 dark:text-red-400',
        info: 'text-blue-600 dark:text-blue-400'
    };

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className={`p-4 ${typeStyles[type]} rounded-lg flex items-center gap-3 transition-colors duration-300`}
            role="alert"
        >
            <AlertCircle className={iconColor[type]} size={20} />
            <p className="text-sm">{status}</p>
        </motion.div>
    );
}
