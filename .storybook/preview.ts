import '#core/infrastructure/modern-normalize/global.css'
import '#core/infrastructure/tailwindcss/global.css'
import '#core/infrastructure/custom-css/global.css'

import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

import type { Preview } from '@storybook/react'

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
}

export default preview
