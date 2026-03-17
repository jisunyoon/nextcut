import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Toast } from "./Toast";
import { Button } from "../Button/Button";

const meta = {
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
    render: () => {
        const [variant, setVariant] = useState<'success' | 'error' | 'warning' | 'info' | null>(null);
        return (
            <>
                <div css={css`display:flex;gap:8px;`}>
                    <Button variant="success" onClick={() => setVariant('success')}>Success</Button>
                    <Button variant="danger" onClick={() => setVariant('error')}>Error</Button>
                    <Button variant="warning" onClick={() => setVariant('warning')}>Warning</Button>
                    <Button onClick={() => setVariant('info')}>Info</Button>
                </div>
                <Toast
                    message={`${variant} 메시지입니다.`}
                    variant={variant ?? 'info'}
                    isVisible={variant !== null}
                    onClose={() => setVariant(null)}
                />
            </>
        )
    }
}

export const Position: Story = {
    render: () => {
        const [position, setPosition] = useState<'top' | 'bottom' | null>(null);
        return (
            <>
                <div css={css`display:flex;gap:8px;`}>
                    <Button variant="outline" onClick={() => setPosition('top')}>Top</Button>
                    <Button variant="outline" onClick={() => setPosition('bottom')}>Bottom</Button>
                </div>
                <Toast
                    message="토스트 위치 확인"
                    variant="info"
                    isVisible={position !== null}
                    onClose={() => setPosition(null)}
                    position={position ?? 'bottom'}
                />
            </>
        )
    }
}

export const AutoClose: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        return (
            <>
                <Button onClick={() => setShow(true)}>3초 후 자동 닫힘</Button>
                <Toast
                    message="3초 후에 사라집니다."
                    variant="success"
                    isVisible={show}
                    onClose={() => setShow(false)}
                    duration={3000}
                />
            </>
        )
    }
}
