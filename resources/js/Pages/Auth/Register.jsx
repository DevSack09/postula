import { useEffect, useState, useRef } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, UserPlus } from 'lucide-react';
import { toast } from 'react-toastify';
import GuestLayout from '@/Layouts/GuestLayout';
import AnimatedInput from '@/Components/Login/AnimatedInput';
import AnimatedButton from '@/Components/Login/AnimatedButton';
import CapsLockIndicator from '@/Components/Login/CapsLockIndicator';
import ProgressBar from '@/Components/Login/ProgressBar';
import SuccessOverlay from '@/Components/Login/SuccessOverlay';
import AuthHeader from '@/Components/Shared/AuthHeader';
import AuthStatus from '@/Components/Shared/AuthStatus';
import AuthFooterLink from '@/Components/Shared/AuthFooterLink';
import FormField from '@/Components/Shared/FormField';

function RegisterContent() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [formError, setFormError] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    // Validación de email
    const isEmailValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(data.email) && data.email.length > 0;
    };

    // Validación de contraseña
    const isPasswordValid = () => {
        return data.password && data.password.length >= 8;
    };

    // Validación de confirmación
    const isPasswordConfirmationValid = () => {
        return data.password_confirmation === data.password && data.password_confirmation.length > 0;
    };

    // Validar si el formulario está completo
    const isFormValid = 
        data.name && 
        data.name.trim().length > 0 &&
        isEmailValid() && 
        isPasswordValid() && 
        isPasswordConfirmationValid() &&
        !errors.name &&
        !errors.email &&
        !errors.password &&
        !errors.password_confirmation;

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
            const errorMessage = Object.values(errors)[0] || 'Error al registrarse';
            toast.error(errorMessage);
            
            // Reset shake animation
            setTimeout(() => setFormError(false), 500);
        }
    }, [errors]);

    const submit = (e) => {
        e.preventDefault();
        
        post(route('register'), {
            onSuccess: () => {
                setShowSuccess(true);
                toast.success('¡Registro exitoso!');
            }
        });
    };

    return (
        <>
            <AnimatePresence>
                {showSuccess && <SuccessOverlay show={showSuccess} />}
            </AnimatePresence>

            <GuestLayout>
                <Head title="Registrarse" />
                
                <ProgressBar show={processing} />

                <motion.div
                    ref={formRef}
                    animate={formError ? {
                        x: [-10, 10, -10, 10, 0],
                        transition: { duration: 0.4 }
                    } : {}}
                    className="space-y-6"
                >
                    {/* Header */}
                    <AuthHeader 
                        title="Crear Cuenta"
                        subtitle="Completa el formulario para registrarte"
                    />

                    {/* Form */}
                    <form onSubmit={submit} className="space-y-5" onKeyDown={handleKeyPress} onKeyUp={handleKeyPress}>
                        {/* Name Field */}
                        <FormField delay={0.5}>
                            <AnimatedInput
                                id="name"
                                type="text"
                                name="name"
                                label="Nombre Completo"
                                icon={User}
                                value={data.name}
                                error={errors.name}
                                autoComplete="name"
                                isFocused={true}
                                disabled={processing}
                                onChange={(e) => setData('name', e.target.value)}
                                aria-required="true"
                                aria-invalid={errors.name ? 'true' : 'false'}
                            />
                        </FormField>

                        {/* Email Field */}
                        <FormField delay={0.55}>
                            <AnimatedInput
                                id="email"
                                type="email"
                                name="email"
                                label="Correo Electrónico"
                                icon={Mail}
                                value={data.email}
                                error={errors.email}
                                autoComplete="username"
                                disabled={processing}
                                onChange={(e) => setData('email', e.target.value)}
                                aria-required="true"
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                        </FormField>

                        {/* Password Field */}
                        <FormField delay={0.6}>
                            <AnimatedInput
                                id="password"
                                type="password"
                                name="password"
                                label="Contraseña"
                                icon={Lock}
                                value={data.password}
                                error={errors.password}
                                showPasswordToggle={true}
                                autoComplete="new-password"
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
                            />
                            <AnimatePresence>
                                {capsLockOn && <CapsLockIndicator show={capsLockOn} />}
                            </AnimatePresence>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.65, duration: 0.3 }}
                                className="text-xs text-slate-500 dark:text-slate-400 mt-1"
                            >
                                Mínimo 8 caracteres
                            </motion.p>
                        </FormField>

                        {/* Password Confirmation Field */}
                        <FormField delay={0.65}>
                            <AnimatedInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                label="Confirmar Contraseña"
                                icon={Lock}
                                value={data.password_confirmation}
                                error={errors.password_confirmation}
                                showPasswordToggle={true}
                                autoComplete="new-password"
                                disabled={processing}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                onKeyDown={(e) => {
                                    handleKeyPress(e);
                                    if (e.key === 'Enter') {
                                        submit(e);
                                    }
                                }}
                                aria-required="true"
                                aria-invalid={errors.password_confirmation ? 'true' : 'false'}
                            />
                        </FormField>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75, duration: 0.4 }}
                        >
                            <AnimatedButton
                                type="submit"
                                loading={processing}
                                icon={UserPlus}
                                className="w-full"
                                disabled={processing}
                                aria-label="Registrarse"
                            >
                                {processing ? 'Registrando...' : 'Registrarse'}
                            </AnimatedButton>
                        </motion.div>
                    </form>

                    {/* Footer */}
                    <AuthFooterLink
                        text="¿Ya tienes una cuenta?"
                        linkText="Inicia sesión aquí"
                        href={route('login')}
                    />
                </motion.div>
            </GuestLayout>
        </>
    );
}

export default function Register() {
    return <RegisterContent />;
}
