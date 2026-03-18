import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Pagination } from "./Pagination";

const meta = {
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [page, setPage] = useState(1);
        return (
            <Pagination totalPages={5} currentPage={page} onChange={setPage} />
        )
    }
}

export const ActiveMiddle: Story = {
    render: () => {
        const [page, setPage] = useState(3);
        return (
            <Pagination totalPages={5} currentPage={page} onChange={setPage} />
        )
    }
}

export const Size: Story = {
    render: () => {
        const [page1, setPage1] = useState(2);
        const [page2, setPage2] = useState(2);
        const [page3, setPage3] = useState(2);
        return (
            <div css={css`display:flex;flex-direction:column;gap:16px;`}>
                <Pagination totalPages={5} currentPage={page1} onChange={setPage1} size="sm" />
                <Pagination totalPages={5} currentPage={page2} onChange={setPage2} size="md" />
                <Pagination totalPages={5} currentPage={page3} onChange={setPage3} size="lg" />
            </div>
        )
    }
}
