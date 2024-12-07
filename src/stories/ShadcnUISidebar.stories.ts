import type { Meta, StoryObj } from '@storybook/react'

import DashboardPage from '#root/app/dashboard-01/page'

const meta = {
  title: 'Shadcn-UI/Sample/DashboardPage',
  component: DashboardPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DashboardPage>

export default meta
type Story = StoryObj<typeof meta>

export const ShadcnUIDashboardPage: Story = {}
