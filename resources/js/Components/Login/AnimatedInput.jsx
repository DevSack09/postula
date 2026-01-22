import { forwardRef, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default forwardRef(function AnimatedInput({ 
    type = 'text', 
    label,
    icon: Icon,
    error,
    className = '', 
    isFocused = false, 
    ...props 
}, ref) {
    const input = ref ? ref : useRef();
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    useEffect(() => {
        setHasValue(props.value && props.value.length > 0);
    }, [props.value]);

    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
            >
                {Icon && (
                    <motion.div 
                        className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10 transition-colors duration-300 ${
                            focused ? 'text-teal-600' : 'text-slate-400'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        <Icon size={20} />
                    </motion.div>
                )}
                
                <motion.input
                    {...props}
                    type={type}
                    className={`
                        w-full px-4 py-3.5 
                        ${Icon ? 'pl-12' : 'pl-4'}
                        bg-slate-50 border border-slate-200
                        rounded-lg
                        text-slate-900
                        focus:bg-white focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/10
                        transition-all duration-300
                        ${error ? 'border-red-400 focus:border-red-500' : ''}
                        ${className}
                    `}
                    ref={input}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder=" "
                    whileFocus={{ 
                        scale: 1.01,
                        transition: { duration: 0.2, ease: "easeOut" }
                    }}
                />
                
                <motion.label
                    className={`
                        absolute left-4 pointer-events-none
                        transition-all duration-300
                        ${Icon ? 'pl-8' : 'pl-0'}
                        ${focused || hasValue 
                            ? '-top-2.5 text-xs bg-white px-2 text-teal-600 font-medium' 
                            : 'top-1/2 -translate-y-1/2 text-slate-500'
                        }
                        ${error && !focused ? 'text-red-500' : ''}
                    `}
                    initial={false}
                    animate={{
                        y: focused || hasValue ? 0 : '-50%',
                        scale: focused || hasValue ? 0.85 : 1,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                    {label}
                </motion.label>
            </motion.div>

            {error && (
                <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 text-sm text-red-600 flex items-center gap-1"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
});
