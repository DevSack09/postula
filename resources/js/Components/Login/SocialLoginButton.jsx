import { motion } from 'framer-motion';

export default function SocialLoginButton({ icon: Icon, provider, onClick, disabled = false }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-slate-200 rounded-lg text-slate-700 font-medium hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.2 }}
        >
            {Icon && <Icon size={20} />}
            <span className="text-sm">{provider}</span>
        </motion.button>
    );
}
