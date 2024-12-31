import type { Meta } from '@storybook/react'

import { Avatar, AvatarFallback, AvatarImage } from '#root/components/ui/avatar'

function Page() {
  return <></>
}

const meta = {
  title: 'shadcn-ui/avatar',
  component: Page,
} satisfies Meta<typeof Page>

export default meta

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src='https://github.com/kotonosora.png'
        alt='@kotonosora'
      />
      <AvatarFallback>KS</AvatarFallback>
    </Avatar>
  )
}
