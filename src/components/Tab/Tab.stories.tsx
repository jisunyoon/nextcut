import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { Tab } from "./Tab";
import { useState } from 'react';

const meta = {
  component: Tab,
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { label: '전체', value: 'all' },
    { label: '진행중', value: 'active' },
    { label: '완료', value: 'done' },
];

export const Default: Story = {
    render: () => {
        const [active, setActive] = useState('all');
        return (
            <Tab items={items} activeValue={active} onChange={setActive} />
        )
    }
}

export const Pill: Story = {
    render: () => {
        const [active, setActive] = useState('active');
        return (
            <Tab items={items} activeValue={active} onChange={setActive} variant="pill" />
        )
    }
}

export const Size: Story = {
    render: () => {
        const [active1, setActive1] = useState('all');
        const [active2, setActive2] = useState('all');
        const [active3, setActive3] = useState('all');
        return (
            <div css={css`display:flex;flex-direction:column;gap:16px;`}>
                <Tab items={items} activeValue={active1} onChange={setActive1} size="sm" />
                <Tab items={items} activeValue={active2} onChange={setActive2} size="md" />
                <Tab items={items} activeValue={active3} onChange={setActive3} size="lg" />
            </div>
        )
    }
}
