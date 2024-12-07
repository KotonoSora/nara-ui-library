import { AlertCircle, Terminal } from 'lucide-react'

import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '#shadcn-ui/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '#shadcn-ui/components/ui/alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '#shadcn-ui/components/ui/alert-dialog'
import { AspectRatio } from '#shadcn-ui/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '#shadcn-ui/components/ui/avatar'
import { Badge } from '#shadcn-ui/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '#shadcn-ui/components/ui/breadcrumb'
import { Button } from '#shadcn-ui/components/ui/button'

function Page() {
  return <div>Shadcn UI</div>
}

const meta = {
  title: 'Shadcn-UI/Components',
  component: Page,
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const PageTemplate: Story = {}

export const AccordionTemplate: Story = {
  render: args => (
    <Accordion
      type='single'
      collapsible
      className='w-full'
      {...args}
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
        <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const AlertTemplate: Story = {
  render: args => (
    <div
      className='flex flex-col gap-1 items-start'
      {...args}
    >
      <Alert>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>

      <Alert variant='destructive'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const AlertDialogTemplate: Story = {
  render: args => (
    <div
      className='flex flex-col gap-1 items-start'
      {...args}
    >
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant='outline'>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
}

export const AspectRatioTemplate: Story = {
  render: args => (
    <div
      className='w-[450px]'
      {...args}
    >
      <AspectRatio ratio={16 / 9}>
        <img
          src='https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800&dpr=2&q=80'
          alt='Image'
          className='rounded-md object-cover w-full h-full'
        />
      </AspectRatio>

      <div>
        Photo by{' '}
        <a
          href='https://unsplash.com/@aridley88?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
          target='_blank'
          rel='noreferrer nofollow'
        >
          Andrew Ridley
        </a>{' '}
        on{' '}
        <a
          href='https://unsplash.com/photos/a-multicolored-tile-wall-with-a-pattern-of-small-squares-jR4Zf-riEjI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
          target='_blank'
          rel='noreferrer nofollow'
        >
          Unsplash
        </a>
      </div>
    </div>
  ),
}

export const AvatarTemplate: Story = {
  render: args => (
    <Avatar {...args}>
      <AvatarImage src='https://github.com/kotonosora.png' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const BadgeTemplate: Story = {
  render: args => (
    <div
      className='flex flex-col gap-1 items-start'
      {...args}
    >
      <Badge>Badge</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='outline'>Outline</Badge>
      <Badge variant='destructive'>Destructive</Badge>
    </div>
  ),
}

export const BreadcrumbTemplate: Story = {
  render: args => (
    <Breadcrumb {...args}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
}
