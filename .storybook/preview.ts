import type { Preview } from '@storybook/react'

import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router';

import '#core/infrastructure/modern-normalize/global.css'
import '#core/infrastructure/tailwindcss/global.css'
import '#core/infrastructure/custom-css/global.css'

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
