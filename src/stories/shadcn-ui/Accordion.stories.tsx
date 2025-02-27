import type { Meta } from '@storybook/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '#root/components/ui/accordion'

function Page() {
  return <></>
}

const meta = {
  title: 'shadcn-ui/accordion',
  component: Page,
} satisfies Meta<typeof Page>

export default meta

export function AccordionDemo() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-[300px]'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
