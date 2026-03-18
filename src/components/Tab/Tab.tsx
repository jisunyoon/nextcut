import type { TabProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'

const TabList = styled.div<Pick<TabProps, 'variant'>>`
    display: inline-flex;
    gap: ${({ variant }) => variant === 'pill' ? '4px' : '0'};
    ${({ variant }) => variant === 'default'
        ? `border-bottom: 1px solid ${theme.colors.divider};`
        : `background: ${theme.colors.bgSecondary}; border-radius: 8px; padding: 4px;`}
`;

const TabButton = styled.button<{
    isActive?: boolean;
    variant?: TabProps['variant'];
    size?: TabProps['size'];
}>`
    border: none;
    cursor: pointer;
    font-weight: ${theme.typography.fontWeight.medium};
    transition: all 0.2s ease;
    font-size: ${({ size }) =>
        size === 'sm' ? theme.typography.fontSize.xs
        : size === 'lg' ? theme.typography.fontSize.lg
        : theme.typography.fontSize.md};
    padding: ${({ size }) =>
        size === 'sm' ? '6px 12px'
        : size === 'lg' ? '12px 24px'
        : '8px 16px'};
    ${({ variant, isActive }) => variant === 'pill'
        ? `
            border-radius: 6px;
            background: ${isActive ? theme.colors.primary : 'transparent'};
            color: ${isActive ? '#fff' : theme.colors.textSecondary};
            &:hover:not(:disabled) {
                background: ${isActive ? theme.colors.primaryDark : theme.colors.bgTertiary};
            }
        `
        : `
            background: transparent;
            color: ${isActive ? theme.colors.primary : theme.colors.textSecondary};
            border-bottom: 2px solid ${isActive ? theme.colors.primary : 'transparent'};
            margin-bottom: -1px;
            &:hover:not(:disabled) {
                color: ${isActive ? theme.colors.primary : theme.colors.textPrimary};
            }
        `}
`;

export function Tab({
    items = [],
    activeValue,
    onChange,
    variant = 'default',
    size = 'md',
}: TabProps) {
    return (
        <TabList variant={variant}>
            {items.map((item) => (
                <TabButton
                    key={item.value}
                    isActive={item.value === activeValue}
                    variant={variant}
                    size={size}
                    onClick = {() => onChange?.(item.value)}
                >
                    {item.label}
                </TabButton>
            ))}
        </TabList>
    )
}
