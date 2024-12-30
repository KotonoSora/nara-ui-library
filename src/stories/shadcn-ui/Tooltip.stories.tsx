import type { Meta } from '@storybook/react'

import { Button } from '#root/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '#root/components/ui/tooltip'

function Page() {
  return <></>
}

const meta = {
  title: 'shadcn-ui/tooltip',
  component: Page,
} satisfies Meta<typeof Page>

export default meta

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
