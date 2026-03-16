import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { Skeleton } from "./Skeleton";

const meta = {
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    render: () => (
        <div css={css`
            display:flex;
            flex-direction:column;
            gap:8px;
            width:300px;
        `}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
        </div>
    )
}

export const Circular: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:16px;
            align-items:center;
        `}>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="circular" width={48} height={48} />
            <Skeleton variant="circular" width={64} height={64} />
        </div>
    )
}

export const Rectangular: Story = {
    render: () => (
        <div css={css`
            display:flex;
            flex-direction:column;
            gap:16px;
            width:300px;
        `}>
            <Skeleton variant="rectangular" height={120} />
            <Skeleton variant="rectangular" height={200} borderRadius={16} />
        </div>
    )
}

export const CardExample: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:12px;
            align-items:flex-start;
            width:300px;
        `}>
            <Skeleton variant="circular" width={40} height={40} />
            <div css={css`
                flex:1;
                display:flex;
                flex-direction:column;
                gap:8px;
            `}>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="80%" />
            </div>
        </div>
    )
}
