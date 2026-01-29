import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Home, FileText, CheckCircle, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard({ formularioCompletado, documentosPendientes, estadoValidacion }) {
    const navigationItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '/aspirante/dashboard' },
        { icon: Home, label: 'Inicio', href: '/aspirante/inicio' },
        { icon: FileText, label: 'Formulario', href: '/aspirante/formulario' }
    ];

    const stats = [
        {
            icon: CheckCircle,
            label: 'Formulario',
            value: formularioCompletado ? 'Completado' : 'Pendiente',
            color: formularioCompletado ? 'green' : 'yellow',
            bgColor: formularioCompletado ? 'bg-green-100 dark:bg-green-900/20' : 'bg-yellow-100 dark:bg-yellow-900/20',
            textColor: formularioCompletado ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
        },
        {
            icon: Clock,
            label: 'Estado',
            value: estadoValidacion,
            color: 'blue',
            bgColor: 'bg-blue-100 dark:bg-blue-900/20',
            textColor: 'text-blue-600 dark:text-blue-400'
        },
        {
            icon: AlertCircle,
            label: 'Documentos Pendientes',
            value: documentosPendientes.length,
            color: 'red',
            bgColor: 'bg-red-100 dark:bg-red-900/20',
            textColor: 'text-red-600 dark:text-red-400'
        }
    ];

    return (
        <DashboardLayout 
            navigationItems={navigationItems}
            role="Aspirante"
        >
            <Head title="Dashboard Aspirante" />

            <div className="space-y-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 sm:mb-8"
                >
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        Dashboard
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                        Bienvenido a tu panel de aspirante
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-4 sm:p-6"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                                            {stat.label}
                                        </p>
                                        <p className={`text-xl sm:text-2xl font-bold ${stat.textColor}`}>
                                            {stat.value}
                                        </p>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`${stat.bgColor} p-2 sm:p-3 rounded-lg`}
                                    >
                                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.textColor}`} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {/* Acciones Rápidas */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-4 sm:p-6"
                    >
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                            Acciones Rápidas
                        </h3>
                        <div className="space-y-3">
                            <motion.a
                                href="/aspirante/formulario"
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 dark:text-teal-400" />
                                    <div>
                                        <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                                            Continuar Formulario
                                        </p>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                            Completa tu solicitud
                                        </p>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                    className="text-teal-600 dark:text-teal-400"
                                >
                                    →
                                </motion.div>
                            </motion.a>

                            <motion.button
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                                    <div className="text-left">
                                        <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                                            Ver Documentos
                                        </p>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                            Gestiona tus archivos
                                        </p>
                                    </div>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400">→</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-between p-3 sm:p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 dark:text-orange-400" />
                                    <div className="text-left">
                                        <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-white">
                                            Estado de Solicitud
                                        </p>
                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                            Revisa tu progreso
                                        </p>
                                    </div>
                                </div>
                                <span className="text-slate-600 dark:text-slate-400">→</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Información */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-4 sm:p-6"
                    >
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">
                            Información Importante
                        </h3>
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="p-3 sm:p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-500"
                            >
                                <h4 className="text-sm sm:text-base font-semibold text-teal-900 dark:text-teal-200 mb-1">
                                    Estado del Formulario
                                </h4>
                                <p className="text-xs sm:text-sm text-teal-700 dark:text-teal-300">
                                    Estado: <span className="font-medium">{estadoValidacion}</span>
                                </p>
                                <p className="text-xs sm:text-sm text-teal-700 dark:text-teal-300">
                                    Completado: <span className="font-medium">{formularioCompletado ? 'Sí' : 'No'}</span>
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500"
                            >
                                <h4 className="text-sm sm:text-base font-semibold text-yellow-900 dark:text-yellow-200 mb-1">
                                    Recordatorio
                                </h4>
                                <p className="text-xs sm:text-sm text-yellow-700 dark:text-yellow-300">
                                    Puedes guardar tu progreso y continuar en cualquier momento.
                                    Tu información estará segura.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500"
                            >
                                <h4 className="text-sm sm:text-base font-semibold text-green-900 dark:text-green-200 mb-1">
                                    ¿Necesitas ayuda?
                                </h4>
                                <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                                    Contáctanos si tienes alguna duda sobre el proceso.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </DashboardLayout>
    );
}
