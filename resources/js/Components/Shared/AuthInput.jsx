import { forwardRef } from 'react';
import AnimatedInput from '@/Components/Login/AnimatedInput';

export default forwardRef(function AuthInput({ 
    label, 
    icon: Icon, 
    error, 
    showPasswordToggle = false,
    delay = 0.5,
    ...props 
}, ref) {
    return (
        <div className="w-full">
            <AnimatedInput
                ref={ref}
                label={label}
                icon={Icon}
                error={error}
                showPasswordToggle={showPasswordToggle}
                {...props}
            />
        </div>
    );
});
