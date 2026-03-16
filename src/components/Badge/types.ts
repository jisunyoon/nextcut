export interface BadgeProps {
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
}
