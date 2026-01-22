import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function AnimatedCheckbox({ checked, onChange, label, ...props }) {
    return (
        <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={onChange}
                    {...props}
                />
                <motion.div
                    className={`
                        w-5 h-5 rounded border-2 
                        flex items-center justify-center
                        transition-colors duration-300
                        ${checked 
                            ? 'bg-teal-600 border-teal-600' 
                            : 'bg-white border-slate-300 group-hover:border-teal-500'
                        }
                    `}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: checked ? 1 : 0, 
                            opacity: checked ? 1 : 0 
                        }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                        <Check size={14} className="text-white" strokeWidth={3} />
                    </motion.div>
                </motion.div>
            </div>
            <span className="text-sm text-slate-600 group-hover:text-teal-700 transition-colors duration-300">
                {label}
            </span>
        </label>
    );
}
