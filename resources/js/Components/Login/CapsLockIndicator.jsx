import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function CapsLockIndicator({ show }) {
    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200"
            role="alert"
        >
            <AlertTriangle size={14} />
            <span>Bloq Mayús está activado</span>
        </motion.div>
    );
}
