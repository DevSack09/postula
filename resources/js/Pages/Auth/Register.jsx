import { useEffect, useState, useRef } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, UserPlus } from 'lucide-react';
import { toast } from 'react-toastify';
import GuestLayout from '@/Layouts/GuestLayout';
import AnimatedInput from '@/Components/Login/AnimatedInput';
import AnimatedButton from '@/Components/Login/AnimatedButton';
import ProgressBar from '@/Components/Login/ProgressBar';
import SuccessOverlay from '@/Components/Login/SuccessOverlay';
import AuthHeader from '@/Components/Shared/AuthHeader';
import AuthStatus from '@/Components/Shared/AuthStatus';
import AuthFooterLink from '@/Components/Shared/AuthFooterLink';
import FormField from '@/Components/Shared/FormField';

function RegisterContent() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        primer_apellido: '',
        segundo_apellido: '',
        email: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);
    const [formError, setFormError] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    // Validación de email
    const isEmailValid = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(data.email) && data.email.length > 0;
    };

    // Validar si el formulario está completo
    const isFormValid = 
        data.name && 
        data.name.trim().length > 0 &&
        data.primer_apellido && 
        data.primer_apellido.trim().length > 0 &&
        isEmailValid() && 
        !errors.name &&
        !errors.primer_apellido &&
        !errors.segundo_apellido &&
        !errors.email;

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
                    <form onSubmit={submit} className="space-y-5">
                        {/* Name Field */}
                        <FormField delay={0.5}>
                            <AnimatedInput
                                id="name"
                                type="text"
                                name="name"
                                label="Nombre(s)"
                                icon={User}
                                value={data.name}
                                error={errors.name}
                                autoComplete="given-name"
                                isFocused={true}
                                disabled={processing}
                                onChange={(e) => setData('name', e.target.value)}
                                aria-required="true"
                                aria-invalid={errors.name ? 'true' : 'false'}
                            />
                        </FormField>

                        {/* Primer Apellido Field */}
                        <FormField delay={0.55}>
                            <AnimatedInput
                                id="primer_apellido"
                                type="text"
                                name="primer_apellido"
                                label="Primer Apellido"
                                icon={User}
                                value={data.primer_apellido}
                                error={errors.primer_apellido}
                                autoComplete="family-name"
                                disabled={processing}
                                onChange={(e) => setData('primer_apellido', e.target.value)}
                                aria-required="true"
                                aria-invalid={errors.primer_apellido ? 'true' : 'false'}
                            />
                        </FormField>

                        {/* Segundo Apellido Field */}
                        <FormField delay={0.6}>
                            <AnimatedInput
                                id="segundo_apellido"
                                type="text"
                                name="segundo_apellido"
                                label="Segundo Apellido (Opcional)"
                                icon={User}
                                value={data.segundo_apellido}
                                error={errors.segundo_apellido}
                                autoComplete="family-name"
                                disabled={processing}
                                onChange={(e) => setData('segundo_apellido', e.target.value)}
                                aria-required="false"
                                aria-invalid={errors.segundo_apellido ? 'true' : 'false'}
                            />
                        </FormField>

                        {/* Email Field */}
                        <FormField delay={0.65}>
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

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
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
