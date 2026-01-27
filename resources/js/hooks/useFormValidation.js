import { useEffect, useState } from 'react';

/**
 * Hook genérico para validación de formularios
 * Se puede reutilizar en Login, Register, ForgotPassword, etc.
 */
export const useFormValidation = (formData, validationRules = {}) => {
    const [fieldErrors, setFieldErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    // Validación de email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.length > 0;
    };

    // Validación de contraseña
    const validatePassword = (password, minLength = 8) => {
        return password && password.length >= minLength;
    };

    // Validación genérica
    const validateField = (name, value, rule) => {
        if (!rule) return true;
        
        switch (rule.type) {
            case 'email':
                return validateEmail(value);
            case 'password':
                return validatePassword(value, rule.minLength || 8);
            case 'required':
                return value && value.trim().length > 0;
            case 'min':
                return value && value.length >= rule.value;
            case 'match':
                return value === formData[rule.field];
            default:
                return true;
        }
    };

    // Validar todos los campos
    useEffect(() => {
        const errors = {};
        let isValid = true;

        Object.keys(validationRules).forEach((fieldName) => {
            if (!validateField(fieldName, formData[fieldName], validationRules[fieldName])) {
                errors[fieldName] = true;
                isValid = false;
            }
        });

        setFieldErrors(errors);
        setIsFormValid(isValid);
    }, [formData, validationRules]);

    return {
        fieldErrors,
        isFormValid,
        validateField,
        validateEmail,
        validatePassword,
    };
};
