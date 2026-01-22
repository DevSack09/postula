import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-16 h-8 bg-slate-200 dark:bg-slate-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
            role="switch"
            aria-checked={isDark}
        >
            {/* Track background animated */}
            <motion.div
                className="absolute inset-0 rounded-full"
                initial={false}
                animate={{
                    backgroundColor: isDark ? '#0f766e' : '#0d9488',
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Toggle circle */}
            <motion.div
                className="relative w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
                initial={false}
                animate={{
                    x: isDark ? 32 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
            >
                {/* Icons with rotation animation */}
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 0 : 1,
                        rotate: isDark ? 180 : 0,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                >
                    <Sun size={14} className="text-amber-500" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0,
                        rotate: isDark ? 0 : -180,
                        opacity: isDark ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                >
                    <Moon size={14} className="text-indigo-600" />
                </motion.div>
            </motion.div>

            {/* Decorative stars for dark mode */}
            {isDark && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="absolute left-2 top-2 w-1 h-1 bg-yellow-300 rounded-full"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="absolute left-3 top-5 w-0.5 h-0.5 bg-yellow-300 rounded-full"
                    />
                </>
            )}

            {/* Decorative rays for light mode */}
            {!isDark && (
                <>
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                            transition={{
                                delay: 0.1 + (i * 0.05),
                                duration: 0.6,
                                repeat: Infinity,
                                repeatDelay: 2
                            }}
                            className="absolute w-0.5 h-0.5 bg-amber-400 rounded-full"
                            style={{
                                right: i % 2 === 0 ? '8px' : '12px',
                                top: i < 2 ? '8px' : '20px',
                            }}
                        />
                    ))}
                </>
            )}
        </motion.button>
    );
}
