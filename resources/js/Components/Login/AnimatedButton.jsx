import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function AnimatedButton({ 
    children, 
    disabled, 
    loading = false,
    className = '', 
    icon: Icon,
    variant = 'primary',
    ...props 
}) {
    const variants = {
        primary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20',
        secondary: 'bg-white border-2 border-slate-200 hover:border-teal-600 text-slate-700 hover:text-teal-600',
        ghost: 'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-teal-600'
    };

    return (
        <motion.button
            {...props}
            whileHover={{ scale: disabled ? 1 : 1.01 }}
            whileTap={{ scale: disabled ? 1 : 0.99 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`
                relative overflow-hidden
                px-6 py-3.5 rounded-lg
                font-semibold text-sm
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
                ${variants[variant]}
                ${className}
            `}
            disabled={disabled || loading}
        >
            {loading ? (
                <>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 1,
                            ease: 'linear'
                        }}
                    >
                        <Loader2 size={18} />
                    </motion.div>
                    <span>{children}</span>
                </>
            ) : (
                <>
                    {Icon && <Icon size={18} />}
                    <span>{children}</span>
                </>
            )}
        </motion.button>
    );
}
