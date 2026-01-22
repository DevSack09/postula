import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function CapsLockIndicator({ show }) {
    if (!show) return null;

    return (
        <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 text-sm text-amber-600 flex items-center gap-1"
            role="alert"
        >
            <AlertTriangle size={16} />
            <span>Bloq Mayús está activado</span>
        </motion.p>
    );
}
