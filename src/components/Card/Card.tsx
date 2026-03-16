import type { CardProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'

const StyledCard = styled.div<CardProps>`
    background: ${({ variant }) =>
        variant === 'outline' ? 'transparent' : theme.colors.bgSecondary};
    border: ${({ variant }) =>
        variant === 'outline' ? `1px solid ${theme.colors.border}` : 'none'};
    border-radius: 12px;
    padding: ${({ padding }) =>
        padding === 'none' ? '0'
        : padding === 'sm' ? theme.spacing.sm
        : padding === 'lg' ? theme.spacing.xl
        : theme.spacing.lg};
`;

export function Card({
    children,
    variant = 'default',
    padding = 'md',
}: CardProps) {
    return (
        <StyledCard variant={variant} padding={padding}>
            {children}
        </StyledCard>
    )
}
