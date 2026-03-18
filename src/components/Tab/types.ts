export interface TabItem {
    label: string;
    value: string;
}

export interface TabProps {
    items?: TabItem[];
    activeValue?: string;
    onChange?: (value: string) => void;
    variant?: 'default' | 'pill';
    size?: 'sm' | 'md' | 'lg';
}
