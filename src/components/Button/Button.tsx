import type { ButtonProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'

const StyledButton = styled.button<ButtonProps>`
    background: ${({ variant }) =>
        variant === 'primary' ? theme.colors.primary
        : variant === 'secondary' ? theme.colors.bgSecondary
        : 'transparent'};
    color: ${({ variant }) =>
        variant === 'ghost' ? theme.colors.textInverse
        : theme.colors.textPrimary};
    padding: ${({ variant, size }) => {
        if (variant === 'icon') return theme.spacing.sm;
        if (size === 'sm') return `${theme.spacing.xs} ${theme.spacing.sm}`;
        if (size === 'lg') return `${theme.spacing.md} ${theme.spacing.xl}`;
        return `${theme.spacing.sm} ${theme.spacing.lg}`;
    }};
    font-size: ${({ size }) =>
        size === 'sm' ? theme.typography.fontSize.sm
        : size === 'lg' ? theme.typography.fontSize.lg
        : theme.typography.fontSize.md};
    border-radius: ${({ size }) =>
        size === 'sm' ? '4px'
        : size === 'lg' ? '10px'
        : '6px'};
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
    font-weight: ${theme.typography.fontWeight.semibold};
    &:hover:not(:disabled){
        opacity: 0.85;
    }
    &:disabled{
        cursor:not-allowed;
        background: ${theme.colors.bgTertiary};
        color: ${theme.colors.textTertiary};
        opacity: 0.6;
    }
`;


export function Button ( {
    variant = 'primary',
    size = 'md',
    disabled,
    fullWidth,
    children,
    ...props
}: ButtonProps) {

    return (
        <StyledButton
            variant={variant}
            size={size}
            disabled={disabled}
            fullWidth={fullWidth}
            {...props}
        >
            {children}
        </StyledButton>
    )
}
