import { useEffect, useState } from 'react';

export const useLoginValidation = (email, password, errors) => {
    const [emailValid, setEmailValid] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);

    // Validación en tiempo real del email
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(emailRegex.test(email) && email.length > 0);
    }, [email]);

    // Detectar Caps Lock
    const handleKeyPress = (e) => {
        if (e.getModifierState) {
            setCapsLockOn(e.getModifierState('CapsLock'));
        }
    };

    // Validar si el formulario está completo y es válido
    const isFormValid = emailValid && password.length > 0 && !errors.email && !errors.password;

    // Avatar placeholder
    const getEmailInitial = () => {
        return emailValid && email ? email.charAt(0).toUpperCase() : null;
    };

    return {
        emailValid,
        capsLockOn,
        isFormValid,
        getEmailInitial,
        handleKeyPress,
    };
};
