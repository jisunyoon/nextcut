import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { Input } from "./Input";

const meta = {
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
        `}>
            <Input variant="default" placeholder="Default" />
            <Input variant="outline" placeholder="Outline" />
        </div>
    )
}

export const Size: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
        `}>
            <Input variant="outline" size="sm" placeholder="Size Small" />
            <Input variant="outline" size="md" placeholder="Size Medium" />
            <Input variant="outline" size="lg" placeholder="Size Large" />
        </div>
    )
}

export const WithLabel: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:16px;
        `}>
            <Input variant="default" label="이름" placeholder="이름을 입력하세요" />
            <Input variant="outline" label="이메일" placeholder="이메일을 입력하세요" />
        </div>
    )
}

export const Error: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:16px;
        `}>
            <Input variant="default" error placeholder="Default Error" />
            <Input variant="outline" error="이메일 형식이 올바르지 않습니다" placeholder="Outline Error" />
        </div>
    )
}

export const HelperText: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:16px;
        `}>
            <Input variant="outline" helperText="영문, 숫자 포함 8자 이상" placeholder="비밀번호" />
            <Input variant="outline" error="비밀번호가 일치하지 않습니다" placeholder="비밀번호 확인" />
        </div>
    )
}

export const Disabled: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
        `}>
            <Input variant="default" disabled placeholder="Default Disabled" />
            <Input variant="outline" disabled placeholder="Outline Disabled" />
        </div>
    )
}

export const FullWidth: Story = {
    render: () => (
        <div css={css`
            display:flex;
            flex-direction:column;
            gap:8px;
            width:320px;
        `}>
            <Input variant="outline" fullWidth placeholder="Full Width" />
            <Input variant="outline" fullWidth label="라벨" helperText="도움말 텍스트" placeholder="Full Width with Label" />
        </div>
    )
}

const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
    </svg>
);

const LockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 1a4 4 0 0 0-4 4v2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4zm2 6H6V5a2 2 0 1 1 4 0v2z" />
    </svg>
);

export const WithIcon: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:16px;
        `}>
            <Input variant="outline" leftIcon={<SearchIcon />} placeholder="검색어를 입력하세요" />
            <Input variant="outline" rightIcon={<LockIcon />} placeholder="비밀번호" />
            <Input variant="outline" leftIcon={<SearchIcon />} rightIcon={<LockIcon />} placeholder="양쪽 아이콘" />
        </div>
    )
}
