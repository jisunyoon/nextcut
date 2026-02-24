import { css } from '@emotion/react';
import { typography } from './tokens/typography';
import { colors } from './tokens/colors';

export const globalStyles = css`
  /* ========== 1. CSS 리셋 ========== */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ========== 2. HTML/Body 기본 ========== */
  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${typography.fontFamily.base};
    font-size: ${typography.fontSize.md};
    line-height: ${typography.lineHeight.base};
    color: ${colors.textPrimary};
    background-color: ${colors.bgPrimary};
    min-height: 100vh;
  }

  /* ========== 3. 요소 리셋 ========== */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  input, textarea, select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  /* ========== 4. 웹 접근성 ========== */
  :focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  /* 스크린 리더 전용 */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* ========== 5. 스크롤바 커스텀 (다크 모드) ========== */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.bgSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.textTertiary};
  }
`;