import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export default function SuccessOverlay({ show, onComplete }) {
    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-teal-600/95 backdrop-blur-sm flex items-center justify-center z-50"
            onAnimationComplete={onComplete}
        >
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2
                }}
                className="text-center"
            >
                <motion.div
                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}
                >
                    <Check className="text-teal-600" size={48} strokeWidth={3} />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold text-white mb-2"
                >
                    ¡Bienvenido!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-teal-100 text-lg"
                >
                    Iniciando sesión...
                </motion.p>

                {/* Confetti effect */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{
                            x: 0,
                            y: 0,
                            scale: 0,
                            opacity: 1
                        }}
                        animate={{
                            x: Math.cos(i * 30 * Math.PI / 180) * 200,
                            y: Math.sin(i * 30 * Math.PI / 180) * 200,
                            scale: [0, 1, 0],
                            opacity: [1, 1, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            delay: 0.3,
                            ease: "easeOut"
                        }}
                        style={{
                            left: '50%',
                            top: '50%',
                        }}
                    >
                        <Sparkles className="text-white" size={20} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
