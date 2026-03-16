import type { BadgeProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'

const StyledBadge = styled.span<BadgeProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: ${theme.typography.fontWeight.medium};
    border-radius: 9999px;
    white-space: nowrap;
    font-size: ${({ size }) =>
        size === 'sm' ? '11px'
        : size === 'lg' ? '14px'
        : '12px'};
    padding: ${({ size }) =>
        size === 'sm' ? '1px 6px'
        : size === 'lg' ? '4px 12px'
        : '2px 8px'};
    height: ${({ size }) =>
        size === 'sm' ? '18px'
        : size === 'lg' ? '28px'
        : '22px'};
    ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return `
                    background: ${theme.colors.primary};
                    color: #fff;
                `;
            case 'success':
                return `
                    background: ${theme.colors.success};
                    color: ${theme.colors.textInverse};
                `;
            case 'warning':
                return `
                    background: ${theme.colors.warning};
                    color: ${theme.colors.textInverse};
                `;
            case 'error':
                return `
                    background: ${theme.colors.error};
                    color: #fff;
                `;
            case 'info':
                return `
                    background: ${theme.colors.info};
                    color: ${theme.colors.textInverse};
                `;
            case 'outline':
                return `
                    background: transparent;
                    color: ${theme.colors.textSecondary};
                    border: 1px solid ${theme.colors.border};
                `;
            default:
                return `
                    background: ${theme.colors.bgTertiary};
                    color: ${theme.colors.textPrimary};
                `;
        }
    }}
`;

export function Badge({
    variant = 'default',
    size = 'md',
    children,
}: BadgeProps) {
    return (
        <StyledBadge variant={variant} size={size}>
            {children}
        </StyledBadge>
    )
}
