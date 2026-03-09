export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>{
    variant?: 'default' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    error?: boolean | string;
    fullWidth?: boolean;
    label?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    disabled?: boolean;
}