import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '#root/components/ui/button'
import { ToastAction } from '#root/components/ui/toast'
import { Toaster } from '#root/components/ui/toaster'
import { useToast } from '#root/hooks/use-toast'

function Page() {
  return <></>
}

const meta = {
  title: 'shadcn-ui/toast',
  component: Page,
  decorators: [
    Story => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const ToastTemplate: Story = {
  name: 'Sample',
  render: args => {
    const { toast } = useToast()

    return (
      <table {...args}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Sample</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple</td>
            <td>
              <Button
                variant='outline'
                onClick={() => {
                  toast({
                    description: 'Your message has been sent.',
                  })
                }}
              >
                Show Toast
              </Button>
            </td>
          </tr>
          <tr>
            <td>With title</td>
            <td>
              <Button
                variant='outline'
                onClick={() => {
                  toast({
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with your request.',
                  })
                }}
              >
                Show Toast
              </Button>
            </td>
          </tr>
          <tr>
            <td>With Action</td>
            <td>
              <Button
                variant='outline'
                onClick={() => {
                  toast({
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with your request.',
                    action: <ToastAction altText='Try again'>Try again</ToastAction>,
                  })
                }}
              >
                Show Toast
              </Button>
            </td>
          </tr>
          <tr>
            <td>Destructive</td>
            <td>
              <Button
                variant='outline'
                onClick={() => {
                  toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with your request.',
                    action: <ToastAction altText='Try again'>Try again</ToastAction>,
                  })
                }}
              >
                Show Toast
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    )
  },
}
