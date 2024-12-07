import type { Meta, StoryObj } from '@storybook/react'

import LoginPage from '#root/app/login-01/page'

const meta = {
  title: 'Shadcn-UI/Sample/LoginPage',
  component: LoginPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginPage>

export default meta
type Story = StoryObj<typeof meta>

export const ShadcnUILoginPage: Story = {}
