import { motion } from 'framer-motion';

export default function SocialLoginButton({ icon: Icon, provider, onClick, disabled = false }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.2 }}
        >
            {Icon && <Icon size={20} />}
            <span className="text-sm">{provider}</span>
        </motion.button>
    );
}
