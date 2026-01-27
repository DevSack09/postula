import { motion } from 'framer-motion';

export default function AuthFooterLink({ text, linkText, href, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.4 }}
            className="text-center pt-4 border-t border-slate-200 dark:border-slate-700"
        >
            <p className="text-sm text-slate-600 dark:text-slate-400">
                {text}{' '}
                <a
                    href={href}
                    onClick={onClick}
                    className="font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300"
                >
                    {linkText}
                </a>
            </p>
        </motion.div>
    );
}
