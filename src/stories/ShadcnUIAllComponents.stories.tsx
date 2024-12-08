import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { AlertCircle, CalendarIcon, ChevronDown, ChevronRight, Loader2, Mail, Slash, Terminal } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { z } from 'zod'

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
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '#shadcn-ui/components/ui/breadcrumb'
import { Button } from '#shadcn-ui/components/ui/button'
import { Calendar } from '#shadcn-ui/components/ui/calendar'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '#shadcn-ui/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#shadcn-ui/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '#shadcn-ui/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '#shadcn-ui/components/ui/popover'
import { Toaster } from '#shadcn-ui/components/ui/toaster'
import { useIsMobile } from '#shadcn-ui/hooks/use-mobile'
import { useToast } from '#shadcn-ui/hooks/use-toast'
import { cn } from '#shadcn-ui/lib/utils'

function Page() {
  return <></>
}

const meta = {
  title: 'Shadcn-UI/Components',
  component: Page,
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const AccordionTemplate: Story = {
  name: 'Accordion',
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
  name: 'Alert',
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
  name: 'Alert Dialog',
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
  name: 'Aspect Ratio',
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
  name: 'Avatar',
  render: args => (
    <Avatar {...args}>
      <AvatarImage src='https://github.com/kotonosora.png' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const BadgeTemplate: Story = {
  name: 'Badge',
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
  name: 'Breadcrumb',
  render: args => {
    const items = [
      { href: '#', label: 'Home' },
      { href: '#', label: 'Documentation' },
      { href: '#', label: 'Building Your Application' },
      { href: '#', label: 'Data Fetching' },
      { label: 'Caching and Revalidating' },
    ]

    const ITEMS_TO_DISPLAY = 3

    const [open, setOpen] = React.useState(false)
    const isMobile = useIsMobile()

    return (
      <div
        className='flex flex-col gap-1 items-start'
        {...args}
      >
        <Breadcrumb>
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

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex items-center gap-1'>
                  Components
                  <ChevronDown className='h-4 w-4' />
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start'>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/docs/components'>Components</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/components'>Components</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={items[0].href}>{items[0].label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {items.length > ITEMS_TO_DISPLAY ? (
              <>
                <BreadcrumbItem>
                  {!isMobile ? (
                    <DropdownMenu
                      open={open}
                      onOpenChange={setOpen}
                    >
                      <DropdownMenuTrigger
                        className='flex items-center gap-1'
                        aria-label='Toggle menu'
                      >
                        <BreadcrumbEllipsis className='h-4 w-4' />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='start'>
                        {items.slice(1, -2).map((item, index) => (
                          <DropdownMenuItem key={index}>
                            <Link to={item.href ? item.href : '#'}>{item.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Drawer
                      open={open}
                      onOpenChange={setOpen}
                    >
                      <DrawerTrigger aria-label='Toggle Menu'>
                        <BreadcrumbEllipsis className='h-4 w-4' />
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader className='text-left'>
                          <DrawerTitle>Navigate to</DrawerTitle>
                          <DrawerDescription>Select a page to navigate to.</DrawerDescription>
                        </DrawerHeader>
                        <div className='grid gap-1 px-4'>
                          {items.slice(1, -2).map((item, index) => (
                            <Link
                              key={index}
                              to={item.href ? item.href : '#'}
                              className='py-1 text-sm'
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <DrawerFooter className='pt-4'>
                          <DrawerClose asChild>
                            <Button variant='outline'>Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  )}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : null}
            {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
              <React.Fragment key={index}>
                {item.href ? (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        asChild
                        className='max-w-20 truncate md:max-w-none'
                      >
                        <Link to={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbPage className='max-w-20 truncate md:max-w-none'>{item.label}</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    )
  },
}

export const ButtonTemplate: Story = {
  name: 'Button',
  render: args => (
    <div
      className='flex flex-col gap-1 items-start'
      {...args}
    >
      <Button>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button
        variant='outline'
        size='icon'
      >
        <ChevronRight />
      </Button>
      <Button>
        <Mail /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className='animate-spin' />
        Please wait
      </Button>
      <Button asChild>
        <Link to='#'>Login</Link>
      </Button>
    </div>
  ),
}

export const CalendarTemplate: Story = {
  name: 'Calendar',
  decorators: [
    Story => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  render: args => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const { toast } = useToast()

    const FormSchema = z.object({
      dob: z.date({
        required_error: 'A date of birth is required.',
      }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      console.log({ data, toast })

      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }

    return (
      <div
        className='flex flex-col gap-1 items-start'
        {...args}
      >
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border'
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8'
          >
            <FormField
              control={form.control}
              name='dob'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className='w-auto p-0'
                      align='start'
                    >
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date > new Date() || date < new Date('1900-01-01')}
                        autoFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Your date of birth is used to calculate your age.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    )
  },
}

export const ToastTemplate: Story = {
  name: 'Toast',
  decorators: [
    Story => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  render: args => {
    const { toast } = useToast()

    return (
      <div
        className='flex flex-col gap-1 items-start'
        {...args}
      >
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
      </div>
    )
  },
}
