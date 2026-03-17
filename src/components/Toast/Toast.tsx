import type { ToastProps } from './types';
import { useEffect } from 'react';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { createPortal } from 'react-dom'

const slideIn = keyframes`
    from { opacity: 0; transform: translateY(-12px); }
    to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div<Pick<ToastProps, 'position'>>`
    position: fixed;
    ${({ position }) => position === 'bottom' ? 'bottom: 24px;' : 'top: 24px;'}
    right: 24px;
    z-index: 2000;
    animation: ${slideIn} 0.3s ease;
`;

const Content = styled.div<Pick<ToastProps, 'variant'>>`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border-radius: 8px;
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.medium};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
    ${({ variant }) => {
        switch (variant) {
            case 'success':
                return `background: ${theme.colors.success}; color: ${theme.colors.textInverse};`;
            case 'error':
                return `background: ${theme.colors.error}; color: ${theme.colors.textInverse};`;
            case 'warning':
                return `background: ${theme.colors.warning}; color: ${theme.colors.textInverse};`;
            case 'info':
            default:
                return `background: ${theme.colors.info}; color: ${theme.colors.textInverse};`;
        }
    }}
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
    font-size: 18px;
    line-height: 1;
    opacity: 0.8;
    &:hover { opacity: 1; }
`;


export function Toast({
    message,
    variant = 'info',
    isVisible,
    onClose,
    position = 'bottom',
    duration = 3000,
}: ToastProps) {
    useEffect(() => {
        if (!isVisible || !duration || !onClose) return;
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [isVisible, duration, onClose]);

    if (!isVisible) return null;

    return createPortal(
        <Wrapper position={position}>
            <Content variant={variant}>
                {message}
                <CloseButton onClick={onClose}>×</CloseButton>
            </Content>
        </Wrapper>,
        document.body
    )
}