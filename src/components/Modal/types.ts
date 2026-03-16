export interface ModalProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    size?: 'sm' | 'md' | 'lg';
}
