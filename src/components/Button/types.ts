export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon' | 'danger' | 'success' | 'warning' | 'outline' | 'link';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    children?: React.ReactNode;
}