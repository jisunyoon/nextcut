import type { InputProps } from './types';
import { theme } from '../../styles/theme';
import styled from '@emotion/styled'

type StyledInputProps = {
    variant?: InputProps['variant'];
    inputSize?: InputProps['size'];
    error?: InputProps['error'];
    hasLeftIcon?: boolean;
    hasRightIcon?: boolean;
};

const Wrapper = styled.div<{ fullWidth?: boolean }>`
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

const Label = styled.label`
    font-size: ${theme.typography.fontSize.xs};
    color: ${theme.colors.textSecondary};
    font-weight: ${theme.typography.fontWeight.medium};
`;

const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.span<{ position: 'left' | 'right' }>`
    position: absolute;
    ${({ position }) => position === 'left' ? 'left: 10px;' : 'right: 10px;'}
    display: flex;
    align-items: center;
    color: ${theme.colors.textSecondary};
    pointer-events: none;
`;

const HelperText = styled.span<{ isError?: boolean }>`
    font-size: ${theme.typography.fontSize.xs};
    color: ${({ isError }) => isError ? theme.colors.error : theme.colors.textSecondary};
`;

const StyledInput = styled('input', {
shouldForwardProp: (prop) =>
        !['inputSize', 'variant', 'error', 'hasLeftIcon', 'hasRightIcon'].includes(prop)
})<StyledInputProps>`
    background: transparent;
    border: ${({ variant }) =>
        variant === 'outline' ? `1px solid ${theme.colors.border}`
        : 'none'};
    color: ${theme.colors.textInverse};
    border-radius: ${({ variant, inputSize }) =>
        variant === 'default' ? '0'
        : inputSize === 'sm' ? '4px'
        : inputSize === 'lg' ? '10px'
        : '6px'};
    padding: ${({ inputSize }) =>
        inputSize === 'sm' ? `${theme.spacing.xs} ${theme.spacing.sm}`
        : inputSize === 'lg' ? `${theme.spacing.md} ${theme.spacing.lg}`
        : `${theme.spacing.sm} ${theme.spacing.md}`};
    padding-left: ${({ hasLeftIcon }) => hasLeftIcon ? '36px' : undefined};
    padding-right: ${({ hasRightIcon }) => hasRightIcon ? '36px' : undefined};
    font-size: ${({ inputSize }) =>
        inputSize === 'sm' ? theme.typography.fontSize.xs
        : inputSize === 'lg' ? theme.typography.fontSize.lg
        : theme.typography.fontSize.md};
    height: ${({ inputSize }) =>
        inputSize === 'sm' ? '32px'
        : inputSize === 'lg' ? '48px'
        : '40px'};
    width: 100%;
    outline: none;
    transition: border-color 0.2s ease, border-bottom 0.2s ease;
    ${({ error, variant }) =>
        error
        ? variant === 'default'
            ? `border-bottom: 2px solid ${theme.colors.error};`
            : `border-color: ${theme.colors.error};`
        : ''}
    &:focus {
        ${({ variant, error }) =>
            error ? '' :
            variant === 'default'
            ? `border-bottom: 2px solid ${theme.colors.primary};`
            : `border-color: ${theme.colors.primary};`}
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;


export function Input({
    variant = 'default',
    size = 'md',
    error,
    fullWidth,
    label,
    helperText,
    leftIcon,
    rightIcon,
    disabled,
    ...props
}: InputProps) {
    const hasError = !!error;
    const errorMessage = typeof error === 'string' ? error : undefined;

    return (
        <Wrapper fullWidth={fullWidth}>
            {label && <Label>{label}</Label>}
            <InputContainer>
                {leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
                <StyledInput
                    variant={variant}
                    inputSize={size}
                    error={error}
                    hasLeftIcon={!!leftIcon}
                    hasRightIcon={!!rightIcon}
                    disabled={disabled}
                    {...props}
                />
                {rightIcon && <IconWrapper position="right">{rightIcon}</IconWrapper>}
            </InputContainer>
            {(errorMessage || helperText) && (
                <HelperText isError={hasError}>
                    {errorMessage || helperText}
                </HelperText>
            )}
        </Wrapper>
    )
}