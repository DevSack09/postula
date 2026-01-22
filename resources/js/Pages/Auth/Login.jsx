import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';
import AnimatedInput from '@/Components/Login/AnimatedInput';
import AnimatedButton from '@/Components/Login/AnimatedButton';
import AnimatedCheckbox from '@/Components/Login/AnimatedCheckbox';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Iniciar Sesión" />

            <div className="space-y-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-slate-900">
                        Bienvenido de nuevo
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Ingresa tus credenciales para continuar
                    </p>
                </motion.div>

                {/* Status Message */}
                {status && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="p-4 bg-teal-50 border border-teal-300 rounded-lg flex items-center gap-3"
                    >
                        <AlertCircle className="text-teal-600" size={20} />
                        <p className="text-sm text-teal-700">{status}</p>
                    </motion.div>
                )}

                {/* Form */}
                <form onSubmit={submit} className="space-y-5">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <AnimatedInput
                            id="email"
                            type="email"
                            name="email"
                            label="Correo electrónico"
                            icon={Mail}
                            value={data.email}
                            error={errors.email}
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                    >
                        <AnimatedInput
                            id="password"
                            type="password"
                            name="password"
                            label="Contraseña"
                            icon={Lock}
                            value={data.password}
                            error={errors.password}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </motion.div>

                    {/* Remember & Forgot Password */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="flex items-center justify-between"
                    >
                        <AnimatedCheckbox
                            name="remember"
                            checked={data.remember}
                            label="Recordarme"
                            onChange={(e) => setData('remember', e.target.checked)}
                        />

                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors duration-300"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                    >
                        <AnimatedButton
                            type="submit"
                            disabled={processing}
                            icon={LogIn}
                            className="w-full"
                        >
                            {processing ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                        </AnimatedButton>
                    </motion.div>

                    {/* Register Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                        className="text-center pt-4 border-t border-slate-200"
                    >
                        <p className="text-sm text-slate-600">
                            ¿No tienes una cuenta?{' '}
                            <Link
                                href={route('register')}
                                className="font-semibold text-teal-600 hover:text-teal-700 transition-colors duration-300"
                            >
                                Regístrate aquí
                            </Link>
                        </p>
                    </motion.div>
                </form>
            </div>
        </GuestLayout>
    );
}
