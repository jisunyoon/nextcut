import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { Badge } from "./Badge";

const meta = {
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
            align-items:center;
        `}>
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    )
}

export const Size: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
            align-items:center;
        `}>
            <Badge variant="primary" size="sm">Small</Badge>
            <Badge variant="primary" size="md">Medium</Badge>
            <Badge variant="primary" size="lg">Large</Badge>
        </div>
    )
}
