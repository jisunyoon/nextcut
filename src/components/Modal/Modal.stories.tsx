import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Modal } from "./Modal";
import { Button } from "../Button/Button";

const meta = {
  component: Modal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div css={css`position:relative; height:500px; overflow:hidden;`}>
            <Story />
        </div>
    )
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <h3 css={css`margin:0 0 8px;`}>모달 제목</h3>
                    <p css={css`margin:0 0 16px; color:#6B6B80;`}>모달 내용이 들어갑니다.</p>
                    <Button size="sm" onClick={() => setIsOpen(false)}>닫기</Button>
                </Modal>
            </>
        )
    }
}

export const Size: Story = {
    render: () => {
        const [open, setOpen] = useState<'sm' | 'md' | 'lg' | null>(null);
        return (
            <>
                <div css={css`display:flex;gap:8px;`}>
                    <Button variant="outline" onClick={() => setOpen('sm')}>Small</Button>
                    <Button variant="outline" onClick={() => setOpen('md')}>Medium</Button>
                    <Button variant="outline" onClick={() => setOpen('lg')}>Large</Button>
                </div>
                <Modal isOpen={open !== null} onClose={() => setOpen(null)} size={open ?? 'md'}>
                    <h3 css={css`margin:0 0 8px;`}>{open} 모달</h3>
                    <p css={css`margin:0 0 16px; color:#6B6B80;`}>사이즈 비교용 모달입니다.</p>
                    <Button size="sm" onClick={() => setOpen(null)}>닫기</Button>
                </Modal>
            </>
        )
    }
}
