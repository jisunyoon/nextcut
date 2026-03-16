import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { Card } from "./Card";

const meta = {
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:16px;
        `}>
            <Card variant="default">
                <p>Default 카드</p>
            </Card>
            <Card variant="outline">
                <p>Outline 카드</p>
            </Card>
        </div>
    )
}

export const Padding: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:16px;
        `}>
            <Card padding="none">
                <p>None</p>
            </Card>
            <Card padding="sm">
                <p>Small</p>
            </Card>
            <Card padding="md">
                <p>Medium</p>
            </Card>
            <Card padding="lg">
                <p>Large</p>
            </Card>
        </div>
    )
}

export const Example: Story = {
    render: () => (
        <Card variant="outline" padding="lg">
            <h3 css={css`margin:0 0 8px;`}>카드 제목</h3>
            <p css={css`margin:0; color:#6B6B80;`}>카드 내용이 들어갑니다. 자유롭게 children을 넣을 수 있어요.</p>
        </Card>
    )
}
