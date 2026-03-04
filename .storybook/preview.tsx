import type { Preview } from '@storybook/react-vite'
import { Global, ThemeProvider } from '@emotion/react'
import { theme } from '../src/styles/theme'
import { globalStyles } from '../src/styles/globalStyles'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: theme.colors.bgPrimary },
      ],
    },
  },
};

export default preview;
