import type { SkeletonProps } from './types';
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

const StyledSkeleton = styled.div<SkeletonProps>`
    background: linear-gradient(
        90deg,
        #E0E0E0 25%,
        #F0F0F0 50%,
        #E0E0E0 75%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s ease-in-out infinite;
    width: ${({ width }) =>
        width ? (typeof width === 'number' ? `${width}px` : width) : '100%'};
    height: ${({ height, variant }) =>
        height
            ? (typeof height === 'number' ? `${height}px` : height)
            : variant === 'text' ? '1em'
            : variant === 'circular' ? '40px'
            : '100px'};
    border-radius: ${({ variant, borderRadius }) =>
        borderRadius
            ? (typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius)
            : variant === 'circular' ? '50%'
            : variant === 'text' ? '4px'
            : '8px'};
    ${({ variant, width }) =>
        variant === 'circular' && !width ? 'width: 40px;' : ''}
`;

export function Skeleton({
    variant = 'text',
    width,
    height,
    borderRadius,
}: SkeletonProps) {
    return (
        <StyledSkeleton
            variant={variant}
            width={width}
            height={height}
            borderRadius={borderRadius}
        />
    )
}
