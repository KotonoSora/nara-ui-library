import type { Meta } from '@storybook/react'

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
} satisfies Meta<typeof Page>

export default meta

export function ToastSimple() {
  const { toast } = useToast()

  return (
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
  )
}

export function ToastWithTitle() {
  const { toast } = useToast()

  return (
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
  )
}

export function ToastWithAction() {
  const { toast } = useToast()

  return (
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
  )
}

export function ToastDestructive() {
  const { toast } = useToast()

  return (
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
  )
}
