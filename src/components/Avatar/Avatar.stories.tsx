import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { Avatar } from "./Avatar";

const meta = {
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:12px;
            align-items:center;
        `}>
            <Avatar variant="circular" fallback="YJ" />
            <Avatar variant="rounded" fallback="YJ" />
        </div>
    )
}

export const Size: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:12px;
            align-items:center;
        `}>
            <Avatar size="sm" fallback="SM" />
            <Avatar size="md" fallback="MD" />
            <Avatar size="lg" fallback="LG" />
        </div>
    )
}

export const WithImage: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:12px;
            align-items:center;
        `}>
            <Avatar size="sm" src="https://i.pravatar.cc/32" alt="user" />
            <Avatar size="md" src="https://i.pravatar.cc/40" alt="user" />
            <Avatar size="lg" src="https://i.pravatar.cc/56" alt="user" />
        </div>
    )
}

export const Fallback: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:12px;
            align-items:center;
        `}>
            <Avatar fallback="A" />
            <Avatar fallback="YJ" />
            <Avatar fallback="김" />
        </div>
    )
}