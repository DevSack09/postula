import { useEffect, useState, useRef } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';
import AnimatedInput from '@/Components/Login/AnimatedInput';
import AnimatedButton from '@/Components/Login/AnimatedButton';
import AnimatedCheckbox from '@/Components/Login/AnimatedCheckbox';
import SocialLoginButton from '@/Components/Login/SocialLoginButton';
import { ToastProvider, useToast } from '@/Components/Login/ToastProvider';
import CapsLockIndicator from '@/Components/Login/CapsLockIndicator';
import ProgressBar from '@/Components/Login/ProgressBar';
import LoginFooter from '@/Components/Login/LoginFooter';
import SuccessOverlay from '@/Components/Login/SuccessOverlay';

// Icono de Google SVG
const GoogleIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

function LoginContent({ status, canResetPassword }) {
    const { showToast } = useToast();
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [emailValid, setEmailValid] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formError, setFormError] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    // Validación en tiempo real del email
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailRegex.test(data.email) && data.email.length > 0);
    }, [data.email]);

    // Detectar Caps Lock
    const handleKeyPress = (e) => {
        if (e.getModifierState) {
            setCapsLockOn(e.getModifierState('CapsLock'));
        }
    };

    // Mostrar errores con toast
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setFormError(true);
            const errorMessage = errors.email || errors.password || 'Error al iniciar sesión';
            showToast(errorMessage, 'error');
            
            // Reset shake animation
            setTimeout(() => setFormError(false), 500);
        }
    }, [errors, showToast]);

    // Avatar placeholder
    const getEmailInitial = () => {
        return emailValid && data.email ? data.email.charAt(0).toUpperCase() : null;
    };

    const submit = (e) => {
        e.preventDefault();
        
        post(route('login'), {
            onSuccess: () => {
                setShowSuccess(true);
                showToast('¡Inicio de sesión exitoso!', 'success');
            },
            onError: () => {
                showToast('Credenciales incorrectas', 'error');
            }
        });
    };

    return (
        <>
            <AnimatePresence>
                {showSuccess && <SuccessOverlay show={showSuccess} />}
            </AnimatePresence>

            <GuestLayout>
                <Head title="Iniciar Sesión" />
                
                <ProgressBar show={processing} />

                <motion.div
                    ref={formRef}
                    animate={formError ? {
                        x: [-10, 10, -10, 10, 0],
                        transition: { duration: 0.4 }
                    } : {}}
                    className="space-y-6"
                >
                    {/* Header with avatar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="text-center"
                    >
                        {/* Avatar placeholder */}
                        <AnimatePresence>
                            {getEmailInitial() && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg"
                                >
                                    {getEmailInitial()}
                                </motion.div>
                            )}
                        </AnimatePresence>

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
                    <form 
                        onSubmit={submit} 
                        className="space-y-5"
                        onKeyDown={handleKeyPress}
                        onKeyUp={handleKeyPress}
                        role="form"
                        aria-label="Formulario de inicio de sesión"
                    >
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
                                isValid={emailValid && !errors.email}
                                autoComplete="username"
                                isFocused={true}
                                disabled={processing}
                                onChange={(e) => setData('email', e.target.value)}
                                aria-required="true"
                                aria-invalid={errors.email ? 'true' : 'false'}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="space-y-2"
                        >
                            <AnimatedInput
                                id="password"
                                type="password"
                                name="password"
                                label="Contraseña"
                                icon={Lock}
                                value={data.password}
                                error={errors.password}
                                showPasswordToggle={true}
                                autoComplete="current-password"
                                disabled={processing}
                                onChange={(e) => setData('password', e.target.value)}
                                onKeyDown={(e) => {
                                    handleKeyPress(e);
                                    if (e.key === 'Enter') {
                                        submit(e);
                                    }
                                }}
                                aria-required="true"
                                aria-invalid={errors.password ? 'true' : 'false'}
                                aria-describedby={errors.password ? 'password-error' : undefined}
                            />
                            <AnimatePresence>
                                {capsLockOn && <CapsLockIndicator show={capsLockOn} />}
                            </AnimatePresence>
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
                            loading={processing}
                            icon={LogIn}
                            className="w-full"
                            disabled={processing}
                            aria-label="Iniciar sesión"
                        >
                            {processing ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                        </AnimatedButton>
                    </motion.div>

                    {/* Social Login Divider */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.85, duration: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-slate-500">O continúa con</span>
                        </div>
                    </motion.div>

                    {/* Social Login Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                        className="flex gap-3"
                    >
                        <SocialLoginButton
                            icon={GoogleIcon}
                            provider="Google"
                            onClick={() => console.log('Google login clicked')}
                        />
                    </motion.div>

                    {/* Register Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.95, duration: 0.4 }}
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

                    {/* Footer */}
                    <LoginFooter />
                </form>
            </motion.div>
        </GuestLayout>
    </>
    );
}

export default function Login(props) {
    return (
        <ToastProvider>
            <LoginContent {...props} />
        </ToastProvider>
    );
}
