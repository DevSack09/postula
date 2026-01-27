import { motion, AnimatePresence } from 'framer-motion';

export default function AuthHeader({ title, subtitle, avatar = null }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-center"
        >
            {/* Avatar placeholder */}
            <AnimatePresence>
                {avatar && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg"
                    >
                        {avatar}
                    </motion.div>
                )}
            </AnimatePresence>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
