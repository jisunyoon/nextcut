import type { PaginationProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`;

const PageButton = styled.button<{
    isActive?: boolean;
    size?: PaginationProps['size'];
}>`
    border: 1px solid ${({ isActive }) => isActive ? theme.colors.primary : theme.colors.border};
    background: ${({ isActive }) => isActive ? theme.colors.primary : 'transparent'};
    color: ${({ isActive }) => isActive ? '#fff' : theme.colors.textPrimary};
    cursor: pointer;
    font-weight: ${theme.typography.fontWeight.medium};
    transition: all 0.2s ease;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ size }) =>
        size === 'sm' ? theme.typography.fontSize.xs
        : size === 'lg' ? theme.typography.fontSize.lg
        : theme.typography.fontSize.md};
    width: ${({ size }) =>
        size === 'sm' ? '28px'
        : size === 'lg' ? '40px'
        : '32px'};
    height: ${({ size }) =>
        size === 'sm' ? '28px'
        : size === 'lg' ? '40px'
        : '32px'};
    &:hover:not(:disabled) {
        border-color: ${theme.colors.primary};
        color: ${({ isActive }) => isActive ? '#fff' : theme.colors.primary};
    }
    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const ArrowButton = styled(PageButton)`
    font-size: ${({ size }) =>
        size === 'sm' ? '18px'
        : size === 'lg' ? '28px'
        : '22px'};
    line-height: 1;
`;

export function Pagination({
    totalPages = 1,
    currentPage = 1,
    onChange,
    size = 'md',
}: PaginationProps) {
    const pages = Array.from({ length:totalPages }, (_,index) => index + 1);
    return (
        <Wrapper>
            <ArrowButton size={size} onClick={() => onChange?.(currentPage - 1)} disabled={currentPage <= 1}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </ArrowButton>
            {pages.map((page) => (
                <PageButton
                    key={page}
                    isActive={page === currentPage}
                    size={size}
                    onClick={()=> onChange?.(page)}
                >
                    {page}
                </PageButton>
            ))}
            <ArrowButton size={size} onClick={() => onChange?.(currentPage + 1)} disabled={currentPage >= totalPages}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </ArrowButton>
        </Wrapper>
    )
}
