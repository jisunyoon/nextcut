import type { AvatarProps } from "./types";
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'


const AvatarStyled = styled.span<AvatarProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: ${theme.colors.bgTertiary};
    color: ${theme.colors.textSecondary};
    font-weight: ${theme.typography.fontWeight.semibold};
    width: ${({ size }) =>
        size === 'sm' ? '32px'
        : size === 'lg' ? '56px'
        : '40px'};
    height: ${({ size }) =>
        size === 'sm' ? '32px'
        : size === 'lg' ? '56px'
        : '40px'};
    font-size: ${({ size }) =>
        size === 'sm' ? '12px'
        : size === 'lg' ? '20px'
        : '16px'};
    border-radius: ${({ variant }) =>
        variant === 'rounded' ? '8px' : '50%'};
`

export function Avatar({
    src,
    alt,
    size = 'md',
    fallback,
    variant = 'circular',
}: AvatarProps){
    return(
        <AvatarStyled size={size} variant={variant}>
            {src 
                ? <img src={src} alt={alt} /> 
                : fallback
            }
        </AvatarStyled>
    )
}