import type { ButtonProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const SpinnerOverlay = styled.span`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SpinnerIcon = styled.span`
    display: inline-block;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
`;

const StyledButton = styled.button<ButtonProps>`
    background: ${({ variant }) =>
        variant === 'primary' ? theme.colors.primary
        : variant === 'secondary' ? theme.colors.bgSecondary
        : variant === 'danger' ? theme.colors.error
        : variant === 'success' ? theme.colors.success
        : variant === 'warning' ? theme.colors.warning
        : 'transparent'};
    color: ${({ variant }) =>
        variant === 'ghost' ? theme.colors.textInverse
        : variant === 'warning' ? theme.colors.textInverse
        : variant === 'success' ? theme.colors.textInverse
        : variant === 'outline' ? theme.colors.primary
        : variant === 'link' ? theme.colors.primary
        : theme.colors.textPrimary};
    text-decoration: ${({ variant }) =>
        variant === 'link' ? 'underline' : 'none'};
    padding: ${({ variant, size }) => {
        if (variant === 'icon') return theme.spacing.sm;
        if (size === 'sm') return `${theme.spacing.xs} ${theme.spacing.sm}`;
        if (size === 'lg') return `${theme.spacing.md} ${theme.spacing.xl}`;
        return `${theme.spacing.sm} ${theme.spacing.lg}`;
    }};
    font-size: ${({ size }) =>
        size === 'sm' ? theme.typography.fontSize.xs
        : size === 'lg' ? theme.typography.fontSize.lg
        : theme.typography.fontSize.md};
    border-radius: ${({ size }) =>
        size === 'sm' ? '4px'
        : size === 'lg' ? '10px'
        : '6px'};
    border: ${({ variant }) =>
        variant === 'outline' ? `1px solid ${theme.colors.primary}`
        : 'none'};
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
    position: relative;
    font-weight: ${theme.typography.fontWeight.semibold};
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover:not(:disabled){
        ${({ variant }) =>
            variant === 'primary' ? `background: ${theme.colors.primaryDark};`
            : variant === 'secondary' ? `background: ${theme.colors.bgTertiary};`
            : variant === 'danger' ? `filter: brightness(0.85);`
            : variant === 'success' ? `filter: brightness(0.85);`
            : variant === 'warning' ? `filter: brightness(0.85);`
            : variant === 'outline' ? `background: ${theme.colors.primary}; color: #fff;`
            : variant === 'link' ? `color: ${theme.colors.primaryDark};`
            : variant === 'ghost' ? `opacity: 0.7;`
            : `opacity: 0.85;`}
    }
    &:active:not(:disabled){
        transform: scale(0.97);
    }
    &:disabled{
        cursor: not-allowed;
        background: ${theme.colors.bgTertiary};
        color: ${theme.colors.textTertiary};
        opacity: 0.6;
    }
`;


export function Button ( {
    variant = 'primary',
    size = 'md',
    disabled,
    loading,
    fullWidth,
    children,
    ...props
}: ButtonProps) {

    return (
        <StyledButton
            variant={variant}
            size={size}
            disabled={disabled || loading}
            fullWidth={fullWidth}
            {...props}
        >
            {loading && <SpinnerOverlay><SpinnerIcon /></SpinnerOverlay>}
            <span style={{ visibility: loading ? 'hidden' : 'visible' }}>{children}</span>
        </StyledButton>
    )
}
