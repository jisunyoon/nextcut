import { colors } from './tokens/colors';
import { spacing } from './tokens/spacing'
import { typography } from './tokens/typography';

export const theme = {
    colors,
    spacing,
    typography,
} as const

export type theme  = typeof theme;