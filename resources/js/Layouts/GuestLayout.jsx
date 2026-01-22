import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
                    animate={{
                        x: [0, 80, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-40 right-10 w-72 h-72 bg-teal-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-8 left-1/2 w-72 h-72 bg-slate-300/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Main card */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-md"
            >
                {/* Logo/Brand */}
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <Link href="/" className="inline-block">
                        <motion.div
                            className="inline-flex items-center gap-2 text-3xl font-bold text-teal-700"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Sparkles className="text-teal-600" size={32} />
                            Postula
                        </motion.div>
                    </Link>
                </motion.div>

                {/* Card */}
                <motion.div
                    className="bg-white backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200 p-8 border border-slate-200"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                    {children}
                </motion.div>

                {/* Footer text */}
                <motion.p
                    className="text-center mt-6 text-sm text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    © 2026 Postula. Todos los derechos reservados.
                </motion.p>
            </motion.div>
        </div>
    );
}
