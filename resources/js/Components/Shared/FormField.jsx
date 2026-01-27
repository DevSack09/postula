import { motion } from 'framer-motion';

export default function FormField({ children, delay = 0.5 }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.4 }}
            className="space-y-2"
        >
            {children}
        </motion.div>
    );
}
