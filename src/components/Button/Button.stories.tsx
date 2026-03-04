import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { Button } from "./Button";

const meta = {
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
        `}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
        </div>
    )
}

export const Size: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
            align-items: flex-start;
        `}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    )
}

const PlayIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2l10 6-10 6V2z" />
    </svg>
);


const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M7 1h2v6h6v2H9v6H7V9H1V7h6V1z" />
    </svg>
);

const TrashIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M5 1h6v1h4v2H1V2h4V1zm1 4h1v8H6V5zm3 0h1v8H9V5zM2 4h12l-1 11H3L2 4z" />
    </svg>
);


export const Disabled: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
        `}>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
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
            <Button fullWidth>Full Width</Button>
            <Button variant="secondary" fullWidth>Full Width Secondary</Button>
        </div>
    )
}

export const WithIcon: Story = {
    render: () => (
        <div css={css`
            display:flex;
            gap:8px;
            align-items: flex-start;
        `}>
            <Button variant="primary">
                <span css={css`display:flex;align-items:center;gap:6px;`}>
                    <PlayIcon />
                </span>
            </Button>
            <Button variant="primary">
                <span css={css`display:flex;align-items:center;gap:6px;`}>
                    <PlayIcon /> Play
                </span>
            </Button>
            <Button variant="secondary">
                <span css={css`display:flex;align-items:center;gap:6px;`}>
                    <PlusIcon /> Add
                </span>
            </Button>
            <Button variant="ghost">
                <span css={css`display:flex;align-items:center;gap:6px;`}>
                    <TrashIcon /> Delete
                </span>
            </Button>
        </div>
    )
}