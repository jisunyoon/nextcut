import type { ModalProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: ${theme.colors.overlay};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const Content = styled.div<Pick<ModalProps, 'size'>>`
    background: ${theme.colors.bgPrimary};
    border-radius: 16px;
    padding: ${theme.spacing.xl};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    width: ${({ size }) =>
        size === 'sm' ? '400px'
        : size === 'lg' ? '720px'
        : '560px'};
    max-width: 90vw;
    max-height: 85vh;
    overflow-y: auto;
`;

export function Modal({
    children,
    isOpen,
    onClose,
    size = 'md',
}: ModalProps) {
    if(!isOpen) return null;

    return createPortal(
        <Overlay onClick={onClose}>
            <Content size={size} onClick={(e) => e.stopPropagation()}>
                {children}
            </Content>
        </Overlay>,
        document.body
    )
}
