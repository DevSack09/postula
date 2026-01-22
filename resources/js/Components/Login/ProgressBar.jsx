import { motion } from 'framer-motion';

export default function ProgressBar({ show }) {
    if (!show) return null;

    return (
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden rounded-t-2xl">
            <motion.div
                className="h-full bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'easeInOut'
                }}
                style={{ width: '50%' }}
            />
        </div>
    );
}
