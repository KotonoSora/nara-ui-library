import '#core/infrastructure/modern-normalize/global.css'
import '#core/infrastructure/tailwindcss/global.css'
import '#core/infrastructure/custom-css/global.css'

import { withThemeByClassName, withThemeByDataAttribute } from '@storybook/addon-themes'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    withRouter,
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],
  parameters: {
    reactRouter: reactRouterParameters({}),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default preview
