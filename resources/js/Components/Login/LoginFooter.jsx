import { motion } from 'framer-motion';
import { HelpCircle, FileText, Shield, Mail } from 'lucide-react';

export default function LoginFooter() {
    const links = [
        { label: 'Ayuda', icon: HelpCircle, href: '#' },
        { label: 'Términos', icon: FileText, href: '#' },
        { label: 'Privacidad', icon: Shield, href: '#' },
        { label: 'Contacto', icon: Mail, href: '#' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800"
        >
            {links.map((link, index) => (
                <motion.a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.1), duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    aria-label={link.label}
                >
                    <link.icon size={14} />
                    <span>{link.label}</span>
                </motion.a>
            ))}
        </motion.div>
    );
}
