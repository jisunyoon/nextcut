export interface ToastProps {
    message?: string;
    variant?: 'success' | 'error' | 'warning' | 'info';
    isVisible?: boolean;
    onClose?: () => void;
    position?: 'top' | 'bottom';
    duration?: number; 
}