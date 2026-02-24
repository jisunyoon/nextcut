export const typography = {
  fontFamily: {
    base: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    md: '1rem',        // 16px
    lg: '1.125rem',    // 18px
    xl: '1.375rem',    // 22px
    xxl: '1.75rem',    // 28px
    display: '2.25rem', // 36px
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.3,
    base: 1.6,
    relaxed: 1.8,
  },
} as const;