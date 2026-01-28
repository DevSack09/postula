import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import GuestLayout from '@/Layouts/GuestLayout';
import AnimatedInput from '@/Components/Login/AnimatedInput';
import AnimatedButton from '@/Components/Login/AnimatedButton';
import ProgressBar from '@/Components/Login/ProgressBar';
import AuthHeader from '@/Components/Shared/AuthHeader';
import AuthStatus from '@/Components/Shared/AuthStatus';
import AuthFooterLink from '@/Components/Shared/AuthFooterLink';
import FormField from '@/Components/Shared/FormField';

function ForgotPasswordContent({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
    });

    useEffect(() => {
        return () => {
            reset('email');
        };
    }, []);

    // Mostrar errores con toast
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const errorMessage = errors.email || 'Error al enviar el enlace de recuperación';
            toast.error(errorMessage);
        }
    }, [errors]);

    const submit = (e) => {
        e.preventDefault();
        
        post(route('password.email'), {
            onSuccess: () => {
                toast.success('¡Enlace de recuperación enviado!');
            }
        });
    };

    const isFormValid = data.email && data.email.includes('@') && !errors.email;

    return (
        <>
            <GuestLayout>
                <Head title="Recuperar Contraseña" />
                
                <ProgressBar show={processing} />

                <motion.div className="space-y-6">
                    {/* Header */}
                    <AuthHeader 
                        title="Recuperar Contraseña"
                        subtitle="Ingresa tu correo electrónico para recibir un enlace de recuperación"
                    />

                    {/* Status Message */}
                    <AuthStatus status={status} type="success" />

                    {/* Descripción adicional */}
                    {/* <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg"
                    >
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            No hay problema si olvidaste tu contraseña. Simplemente envíanos tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                        </p>
                    </motion.div> */}

                    {/* Form */}
                    <form onSubmit={submit} className="space-y-5">
                        {/* Email Field */}
                        <FormField delay={0.55}>
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
                                disabled={processing}
                                onChange={(e) => setData('email', e.target.value)}
                                aria-required="true"
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                        </FormField>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65, duration: 0.4 }}
                        >
                            <AnimatedButton
                                type="submit"
                                loading={processing}
                                icon={Mail}
                                className="w-full"
                                disabled={processing}
                                aria-label="Enviar enlace de recuperación"
                            >
                                {processing ? 'Enviando...' : 'Enviar Enlace de Recuperación'}
                            </AnimatedButton>
                        </motion.div>

                        {/* Back to Login */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75, duration: 0.4 }}
                            className="flex justify-center"
                        >
                            <Link
                                href={route('login')}
                                className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300"
                            >
                                <ArrowLeft size={16} />
                                Volver al inicio de sesión
                            </Link>
                        </motion.div>
                    </form>

                    {/* Footer */}
                    <AuthFooterLink
                        text="¿No tienes una cuenta?"
                        linkText="Regístrate aquí"
                        href={route('register')}
                    />
                </motion.div>
            </GuestLayout>
        </>
    );
}

export default function ForgotPassword(props) {
    return <ForgotPasswordContent {...props} />;
}
