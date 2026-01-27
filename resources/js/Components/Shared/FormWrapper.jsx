import { motion } from 'framer-motion';

export default function FormWrapper({ children, delay = 0.5 }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0.4 }}
            className="space-y-5"
        >
            {children}
        </motion.div>
    );
}
