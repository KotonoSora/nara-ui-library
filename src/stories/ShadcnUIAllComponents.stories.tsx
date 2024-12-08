import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import Autoplay from 'embla-carousel-autoplay'
import {
  AlertCircle,
  ArrowUpCircle,
  BellRing,
  CalendarIcon,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Circle,
  HelpCircle,
  Loader2,
  LucideIcon,
  Mail,
  MoreHorizontal,
  Slash,
  Tags,
  Terminal,
  Trash,
  User,
  XCircle,
} from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { z } from 'zod'

import type { Meta, StoryObj } from '@storybook/react'
import type { CarouselApi } from '#shadcn-ui/components/ui/carousel'

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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#shadcn-ui/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '#shadcn-ui/components/ui/carousel'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '#shadcn-ui/components/ui/chart'
import { Checkbox } from '#shadcn-ui/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '#shadcn-ui/components/ui/collapsible'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '#shadcn-ui/components/ui/command'
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
import { Input } from '#shadcn-ui/components/ui/input'
import { Label } from '#shadcn-ui/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '#shadcn-ui/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '#shadcn-ui/components/ui/select'
import { Switch } from '#shadcn-ui/components/ui/switch'
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

export const CardTemplate: Story = {
  name: 'Card',
  render: args => {
    const notifications = [
      {
        title: 'Your call has been confirmed.',
        description: '1 hour ago',
      },
      {
        title: 'You have a new message!',
        description: '1 hour ago',
      },
      {
        title: 'Your subscription is expiring soon!',
        description: '2 hours ago',
      },
    ]

    return (
      <div
        className='flex flex-col gap-1 items-start'
        {...args}
      >
        <Card className='w-[350px]'>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    placeholder='Name of your project'
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='framework'>Framework</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>

        <Card className={cn('w-[380px]')}>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <div className=' flex items-center space-x-4 rounded-md border p-4'>
              <BellRing />
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>Push Notifications</p>
                <p className='text-sm text-muted-foreground'>Send notifications to device.</p>
              </div>
              <Switch />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'
                >
                  <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                  <div className='space-y-1'>
                    <p className='text-sm font-medium leading-none'>{notification.title}</p>
                    <p className='text-sm text-muted-foreground'>{notification.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full'>
              <Check /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  },
}

export const CarouselTemplate: Story = {
  name: 'Carousel',
  render: args => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
      if (!api) {
        return
      }

      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)

      api.on('select', () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])

    return (
      <div
        className='flex flex-col gap-1 items-center'
        {...args}
      >
        <Carousel className='w-full max-w-xs'>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-sm'
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='md:basis-1/2 lg:basis-1/3'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-3xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Carousel className='w-full max-w-sm'>
          <CarouselContent className='-ml-1'>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='pl-1 md:basis-1/2 lg:basis-1/3'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-2xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className='h-14' />

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          orientation='vertical'
          className='w-full max-w-xs'
        >
          <CarouselContent className='-mt-1 h-[200px]'>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className='pt-1 md:basis-1/2'
              >
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex items-center justify-center p-6'>
                      <span className='text-3xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className='h-14' />

        <div className='mx-auto max-w-xs'>
          <Carousel
            setApi={setApi}
            className='w-full max-w-xs'
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>{index + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='py-2 text-center text-sm text-muted-foreground'>
            Slide {current} of {count}
          </div>
        </div>

        <div className='h-14' />
      </div>
    )
  },
}

export const ChartTemplate: Story = {
  name: 'Chart',
  render: args => {
    const chartData = React.useMemo(
      () => [
        { date: '2024-04-01', desktop: 222, mobile: 150 },
        { date: '2024-04-02', desktop: 97, mobile: 180 },
        { date: '2024-04-03', desktop: 167, mobile: 120 },
        { date: '2024-04-04', desktop: 242, mobile: 260 },
        { date: '2024-04-05', desktop: 373, mobile: 290 },
        { date: '2024-04-06', desktop: 301, mobile: 340 },
        { date: '2024-04-07', desktop: 245, mobile: 180 },
        { date: '2024-04-08', desktop: 409, mobile: 320 },
        { date: '2024-04-09', desktop: 59, mobile: 110 },
        { date: '2024-04-10', desktop: 261, mobile: 190 },
        { date: '2024-04-11', desktop: 327, mobile: 350 },
        { date: '2024-04-12', desktop: 292, mobile: 210 },
        { date: '2024-04-13', desktop: 342, mobile: 380 },
        { date: '2024-04-14', desktop: 137, mobile: 220 },
        { date: '2024-04-15', desktop: 120, mobile: 170 },
        { date: '2024-04-16', desktop: 138, mobile: 190 },
        { date: '2024-04-17', desktop: 446, mobile: 360 },
        { date: '2024-04-18', desktop: 364, mobile: 410 },
        { date: '2024-04-19', desktop: 243, mobile: 180 },
        { date: '2024-04-20', desktop: 89, mobile: 150 },
        { date: '2024-04-21', desktop: 137, mobile: 200 },
        { date: '2024-04-22', desktop: 224, mobile: 170 },
        { date: '2024-04-23', desktop: 138, mobile: 230 },
        { date: '2024-04-24', desktop: 387, mobile: 290 },
        { date: '2024-04-25', desktop: 215, mobile: 250 },
        { date: '2024-04-26', desktop: 75, mobile: 130 },
        { date: '2024-04-27', desktop: 383, mobile: 420 },
        { date: '2024-04-28', desktop: 122, mobile: 180 },
        { date: '2024-04-29', desktop: 315, mobile: 240 },
        { date: '2024-04-30', desktop: 454, mobile: 380 },
        { date: '2024-05-01', desktop: 165, mobile: 220 },
        { date: '2024-05-02', desktop: 293, mobile: 310 },
        { date: '2024-05-03', desktop: 247, mobile: 190 },
        { date: '2024-05-04', desktop: 385, mobile: 420 },
        { date: '2024-05-05', desktop: 481, mobile: 390 },
        { date: '2024-05-06', desktop: 498, mobile: 520 },
        { date: '2024-05-07', desktop: 388, mobile: 300 },
        { date: '2024-05-08', desktop: 149, mobile: 210 },
        { date: '2024-05-09', desktop: 227, mobile: 180 },
        { date: '2024-05-10', desktop: 293, mobile: 330 },
        { date: '2024-05-11', desktop: 335, mobile: 270 },
        { date: '2024-05-12', desktop: 197, mobile: 240 },
        { date: '2024-05-13', desktop: 197, mobile: 160 },
        { date: '2024-05-14', desktop: 448, mobile: 490 },
        { date: '2024-05-15', desktop: 473, mobile: 380 },
        { date: '2024-05-16', desktop: 338, mobile: 400 },
        { date: '2024-05-17', desktop: 499, mobile: 420 },
        { date: '2024-05-18', desktop: 315, mobile: 350 },
        { date: '2024-05-19', desktop: 235, mobile: 180 },
        { date: '2024-05-20', desktop: 177, mobile: 230 },
        { date: '2024-05-21', desktop: 82, mobile: 140 },
        { date: '2024-05-22', desktop: 81, mobile: 120 },
        { date: '2024-05-23', desktop: 252, mobile: 290 },
        { date: '2024-05-24', desktop: 294, mobile: 220 },
        { date: '2024-05-25', desktop: 201, mobile: 250 },
        { date: '2024-05-26', desktop: 213, mobile: 170 },
        { date: '2024-05-27', desktop: 420, mobile: 460 },
        { date: '2024-05-28', desktop: 233, mobile: 190 },
        { date: '2024-05-29', desktop: 78, mobile: 130 },
        { date: '2024-05-30', desktop: 340, mobile: 280 },
        { date: '2024-05-31', desktop: 178, mobile: 230 },
        { date: '2024-06-01', desktop: 178, mobile: 200 },
        { date: '2024-06-02', desktop: 470, mobile: 410 },
        { date: '2024-06-03', desktop: 103, mobile: 160 },
        { date: '2024-06-04', desktop: 439, mobile: 380 },
        { date: '2024-06-05', desktop: 88, mobile: 140 },
        { date: '2024-06-06', desktop: 294, mobile: 250 },
        { date: '2024-06-07', desktop: 323, mobile: 370 },
        { date: '2024-06-08', desktop: 385, mobile: 320 },
        { date: '2024-06-09', desktop: 438, mobile: 480 },
        { date: '2024-06-10', desktop: 155, mobile: 200 },
        { date: '2024-06-11', desktop: 92, mobile: 150 },
        { date: '2024-06-12', desktop: 492, mobile: 420 },
        { date: '2024-06-13', desktop: 81, mobile: 130 },
        { date: '2024-06-14', desktop: 426, mobile: 380 },
        { date: '2024-06-15', desktop: 307, mobile: 350 },
        { date: '2024-06-16', desktop: 371, mobile: 310 },
        { date: '2024-06-17', desktop: 475, mobile: 520 },
        { date: '2024-06-18', desktop: 107, mobile: 170 },
        { date: '2024-06-19', desktop: 341, mobile: 290 },
        { date: '2024-06-20', desktop: 408, mobile: 450 },
        { date: '2024-06-21', desktop: 169, mobile: 210 },
        { date: '2024-06-22', desktop: 317, mobile: 270 },
        { date: '2024-06-23', desktop: 480, mobile: 530 },
        { date: '2024-06-24', desktop: 132, mobile: 180 },
        { date: '2024-06-25', desktop: 141, mobile: 190 },
        { date: '2024-06-26', desktop: 434, mobile: 380 },
        { date: '2024-06-27', desktop: 448, mobile: 490 },
        { date: '2024-06-28', desktop: 149, mobile: 200 },
        { date: '2024-06-29', desktop: 103, mobile: 160 },
        { date: '2024-06-30', desktop: 446, mobile: 400 },
      ],
      []
    )

    const chartConfig = {
      views: {
        label: 'Page Views',
      },
      desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))',
      },
      mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))',
      },
    } satisfies ChartConfig

    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>('desktop')

    const total = React.useMemo(
      () => ({
        desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
        mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
      }),
      [chartData]
    )

    const chartDataCustom = [
      { month: 'January', desktop: 186, mobile: 80 },
      { month: 'February', desktop: 305, mobile: 200 },
      { month: 'March', desktop: 237, mobile: 120 },
      { month: 'April', desktop: 73, mobile: 190 },
      { month: 'May', desktop: 209, mobile: 130 },
      { month: 'June', desktop: 214, mobile: 140 },
    ]

    const chartConfigCustom = {
      desktop: {
        label: 'Desktop',
        color: 'hsl(var(--chart-1))',
      },
      mobile: {
        label: 'Mobile',
        color: 'hsl(var(--chart-2))',
      },
    } satisfies ChartConfig

    return (
      <div
        className='flex flex-col gap-1 items-stretch'
        {...args}
      >
        <Card>
          <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
            <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
              <CardTitle>Bar Chart - Interactive</CardTitle>
              <CardDescription>Showing total visitors for the last 3 months</CardDescription>
            </div>
            <div className='flex'>
              {['desktop', 'mobile'].map(key => {
                const chart = key as keyof typeof chartConfig
                return (
                  <button
                    key={chart}
                    data-active={activeChart === chart}
                    className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                    onClick={() => setActiveChart(chart)}
                  >
                    <span className='text-xs text-muted-foreground'>{chartConfig[chart].label}</span>
                    <span className='text-lg font-bold leading-none sm:text-3xl'>
                      {total[key as keyof typeof total].toLocaleString()}
                    </span>
                  </button>
                )
              })}
            </div>
          </CardHeader>
          <CardContent className='px-2 sm:p-6'>
            <ChartContainer
              config={chartConfig}
              className='aspect-auto h-[250px] w-full'
            >
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='date'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={value => {
                    const date = new Date(value)
                    return date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className='w-[150px]'
                      nameKey='views'
                      labelFormatter={value => {
                        return new Date(value).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      }}
                    />
                  }
                />
                <Bar
                  dataKey={activeChart}
                  fill={`var(--color-${activeChart})`}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='px-2 sm:p-6'>
            <ChartContainer
              config={chartConfigCustom}
              className='aspect-auto h-[350px] w-full'
            >
              <BarChart
                accessibilityLayer
                data={chartDataCustom}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='month'
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={value => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey='desktop'
                  fill='var(--color-desktop)'
                  radius={4}
                />
                <Bar
                  dataKey='mobile'
                  fill='var(--color-mobile)'
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    )
  },
}

export const CheckboxTemplate: Story = {
  name: 'Checkbox',
  render: args => {
    const { toast } = useToast()

    const FormSchema = z.object({
      mobile: z.boolean().default(false).optional(),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        mobile: true,
      },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }

    const itemsCustom = [
      {
        id: 'recents',
        label: 'Recents',
      },
      {
        id: 'home',
        label: 'Home',
      },
      {
        id: 'applications',
        label: 'Applications',
      },
      {
        id: 'desktop',
        label: 'Desktop',
      },
      {
        id: 'downloads',
        label: 'Downloads',
      },
      {
        id: 'documents',
        label: 'Documents',
      },
    ] as const

    const FormSchemaCustom = z.object({
      items: z.array(z.string()).refine(value => value.some(item => item), {
        message: 'You have to select at least one item.',
      }),
    })

    const formCustom = useForm<z.infer<typeof FormSchemaCustom>>({
      resolver: zodResolver(FormSchemaCustom),
      defaultValues: {
        items: ['recents', 'home'],
      },
    })

    function onSubmitCustom(data: z.infer<typeof FormSchemaCustom>) {
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
        <div className='flex items-center space-x-2'>
          <Checkbox id='terms' />
          <label
            htmlFor='terms'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Accept terms and conditions
          </label>
        </div>

        <div className='items-top flex space-x-2'>
          <Checkbox id='terms1' />
          <div className='grid gap-1.5 leading-none'>
            <label
              htmlFor='terms1'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              Accept terms and conditions
            </label>
            <p className='text-sm text-muted-foreground'>You agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>

        <div className='flex items-center space-x-2'>
          <Checkbox
            id='terms2'
            disabled
          />
          <label
            htmlFor='terms2'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Accept terms and conditions
          </label>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6'
          >
            <FormField
              control={form.control}
              name='mobile'
              render={({ field }) => (
                <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className='space-y-1 leading-none'>
                    <FormLabel>Use different settings for my mobile devices</FormLabel>
                    <FormDescription>
                      You can manage your mobile notifications in the <Link to='/examples/forms'>mobile settings</Link>{' '}
                      page.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>

        <Form {...formCustom}>
          <form
            onSubmit={formCustom.handleSubmit(onSubmitCustom)}
            className='space-y-8'
          >
            <FormField
              control={formCustom.control}
              name='items'
              render={() => (
                <FormItem>
                  <div className='mb-4'>
                    <FormLabel className='text-base'>Sidebar</FormLabel>
                    <FormDescription>Select the items you want to display in the sidebar.</FormDescription>
                  </div>
                  {itemsCustom.map(item => (
                    <FormField
                      key={item.id}
                      control={formCustom.control}
                      name='items'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex flex-row items-start space-x-3 space-y-0'
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={checked => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter(value => value !== item.id))
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>{item.label}</FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
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

export const CollapsibleTemplate: Story = {
  name: 'Collapsible',
  render: args => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <div
        className='flex flex-col gap-1 items-start'
        {...args}
      >
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className='w-[350px] space-y-2'
        >
          <div className='flex items-center justify-between space-x-4 px-4'>
            <h4 className='text-sm font-semibold'>@peduarte starred 3 repositories</h4>
            <CollapsibleTrigger asChild>
              <Button
                variant='ghost'
                size='sm'
                className='w-9 p-0'
              >
                <ChevronsUpDown className='h-4 w-4' />
                <span className='sr-only'>Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className='rounded-md border px-4 py-3 font-mono text-sm'>@radix-ui/primitives</div>
          <CollapsibleContent className='space-y-2'>
            <div className='rounded-md border px-4 py-3 font-mono text-sm'>@radix-ui/colors</div>
            <div className='rounded-md border px-4 py-3 font-mono text-sm'>@stitches/react</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    )
  },
}

export const ComboboxTemplate: Story = {
  name: 'Combobox',
  render: args => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState('')

    const frameworks = [
      {
        value: 'next.js',
        label: 'Next.js',
      },
      {
        value: 'sveltekit',
        label: 'SvelteKit',
      },
      {
        value: 'nuxt.js',
        label: 'Nuxt.js',
      },
      {
        value: 'remix',
        label: 'Remix',
      },
      {
        value: 'astro',
        label: 'Astro',
      },
    ]

    type Status = {
      value: string
      label: string
      icon: LucideIcon
    }

    const statuses: Status[] = [
      {
        value: 'backlog',
        label: 'Backlog',
        icon: HelpCircle,
      },
      {
        value: 'todo',
        label: 'Todo',
        icon: Circle,
      },
      {
        value: 'in progress',
        label: 'In Progress',
        icon: ArrowUpCircle,
      },
      {
        value: 'done',
        label: 'Done',
        icon: CheckCircle2,
      },
      {
        value: 'canceled',
        label: 'Canceled',
        icon: XCircle,
      },
    ]

    const [openCustom, setOpenCustom] = React.useState(false)
    const [selectedStatusCustom, setSelectedStatusCustom] = React.useState<Status | null>(null)

    const labelsCustomDropdown = ['feature', 'bug', 'enhancement', 'documentation', 'design', 'question', 'maintenance']

    const [labelCustomDropdown, setLabelCustomDropdown] = React.useState('feature')
    const [openCustomDropdown, setOpenCustomDropdown] = React.useState(false)

    type StatusCustomResponsive = {
      value: string
      label: string
    }

    const statusesCustomResponsive: StatusCustomResponsive[] = [
      {
        value: 'backlog',
        label: 'Backlog',
      },
      {
        value: 'todo',
        label: 'Todo',
      },
      {
        value: 'in progress',
        label: 'In Progress',
      },
      {
        value: 'done',
        label: 'Done',
      },
      {
        value: 'canceled',
        label: 'Canceled',
      },
    ]

    const [openCustomResponsive, setOpenCustomResponsive] = React.useState(false)
    const isMobile = useIsMobile()
    const [selectedStatusCustomResponsive, setSelectedStatusCustomResponsive] = React.useState<Status | null>(null)

    const { toast } = useToast()

    const languagesCustomForm = [
      { label: 'English', value: 'en' },
      { label: 'French', value: 'fr' },
      { label: 'German', value: 'de' },
      { label: 'Spanish', value: 'es' },
      { label: 'Portuguese', value: 'pt' },
      { label: 'Russian', value: 'ru' },
      { label: 'Japanese', value: 'ja' },
      { label: 'Korean', value: 'ko' },
      { label: 'Chinese', value: 'zh' },
    ] as const

    const FormSchemaCustomForm = z.object({
      language: z.string({
        required_error: 'Please select a language.',
      }),
    })

    const formCustomForm = useForm<z.infer<typeof FormSchemaCustomForm>>({
      resolver: zodResolver(FormSchemaCustomForm),
    })

    function onSubmitCustomForm(data: z.infer<typeof FormSchemaCustomForm>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }

    const [openCustomForm, setOpenCustomForm] = React.useState(false)

    return (
      <div
        className='flex flex-col gap-1 items-start'
        {...args}
      >
        <Popover
          open={open}
          onOpenChange={setOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='w-[200px] justify-between'
            >
              {value ? frameworks.find(framework => framework.value === value)?.label : 'Select framework...'}
              <ChevronsUpDown className='opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0'>
            <Command>
              <CommandInput placeholder='Search framework...' />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map(framework => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={currentValue => {
                        setValue(currentValue === value ? '' : currentValue)
                        setOpen(false)
                      }}
                    >
                      {framework.label}
                      <Check className={cn('ml-auto', value === framework.value ? 'opacity-100' : 'opacity-0')} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <div className='flex items-center space-x-4'>
          <p className='text-sm text-muted-foreground'>Status</p>
          <Popover
            open={openCustom}
            onOpenChange={setOpenCustom}
          >
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                size='sm'
                className='w-[150px] justify-start'
              >
                {selectedStatusCustom ? (
                  <>
                    <selectedStatusCustom.icon className='mr-2 h-4 w-4 shrink-0' />
                    {selectedStatusCustom.label}
                  </>
                ) : (
                  <>+ Set status</>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className='p-0'
              side='right'
              align='start'
            >
              <Command>
                <CommandInput placeholder='Change status...' />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {statuses.map(status => (
                      <CommandItem
                        key={status.value}
                        value={status.value}
                        onSelect={value => {
                          setSelectedStatusCustom(statuses.find(priority => priority.value === value) || null)
                          setOpenCustom(false)
                        }}
                      >
                        <status.icon
                          className={cn(
                            'mr-2 h-4 w-4',
                            status.value === selectedStatusCustom?.value ? 'opacity-100' : 'opacity-40'
                          )}
                        />
                        <span>{status.label}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className='flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center'>
          <p className='text-sm font-medium leading-none'>
            <span className='mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground'>
              {labelCustomDropdown}
            </span>
            <span className='text-muted-foreground'>Create a new project</span>
          </p>
          <DropdownMenu
            open={openCustomDropdown}
            onOpenChange={setOpenCustomDropdown}
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                size='sm'
              >
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='w-[200px]'
            >
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User />
                  Assign to...
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarIcon />
                  Set due date...
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Tags />
                    Apply label
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className='p-0'>
                    <Command>
                      <CommandInput
                        placeholder='Filter label...'
                        autoFocus={true}
                      />
                      <CommandList>
                        <CommandEmpty>No label found.</CommandEmpty>
                        <CommandGroup>
                          {labelsCustomDropdown.map(label => (
                            <CommandItem
                              key={label}
                              value={label}
                              onSelect={value => {
                                setLabelCustomDropdown(value)
                                setOpenCustomDropdown(false)
                              }}
                            >
                              {label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='text-red-600'>
                  <Trash />
                  Delete
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {!isMobile ? (
          <Popover
            open={openCustomResponsive}
            onOpenChange={setOpenCustomResponsive}
          >
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                className='w-[150px] justify-start'
              >
                {selectedStatusCustomResponsive ? <>{selectedStatusCustomResponsive.label}</> : <>+ Set status</>}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className='w-[200px] p-0'
              align='start'
            >
              <Command>
                <CommandInput placeholder='Filter status...' />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {statusesCustomResponsive.map(status => (
                      <CommandItem
                        key={status.value}
                        value={status.value}
                        onSelect={value => {
                          setSelectedStatusCustomResponsive(statuses.find(priority => priority.value === value) || null)
                          setOpenCustomResponsive(false)
                        }}
                      >
                        {status.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        ) : (
          <Drawer
            open={openCustomResponsive}
            onOpenChange={setOpenCustomResponsive}
          >
            <DrawerTrigger asChild>
              <Button
                variant='outline'
                className='w-[150px] justify-start'
              >
                {selectedStatusCustomResponsive ? <>{selectedStatusCustomResponsive.label}</> : <>+ Set status</>}
              </Button>
            </DrawerTrigger>
            <DrawerTitle className='hidden'>Choose a status</DrawerTitle>
            <DrawerDescription className='hidden'>Select a status to set.</DrawerDescription>
            <DrawerContent>
              <div className='mt-4 border-t'>
                <Command>
                  <CommandInput placeholder='Filter status...' />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {statusesCustomResponsive.map(status => (
                        <CommandItem
                          key={status.value}
                          value={status.value}
                          onSelect={value => {
                            setSelectedStatusCustomResponsive(
                              statuses.find(priority => priority.value === value) || null
                            )
                            setOpenCustomResponsive(false)
                          }}
                        >
                          {status.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </DrawerContent>
          </Drawer>
        )}

        <Form {...formCustomForm}>
          <form
            onSubmit={formCustomForm.handleSubmit(onSubmitCustomForm)}
            className='space-y-6'
          >
            <FormField
              control={formCustomForm.control}
              name='language'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Language</FormLabel>
                  <Popover
                    open={openCustomForm}
                    onOpenChange={setOpenCustomForm}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          role='combobox'
                          className={cn('w-[200px] justify-between', !field.value && 'text-muted-foreground')}
                        >
                          {field.value
                            ? languagesCustomForm.find(language => language.value === field.value)?.label
                            : 'Select language'}
                          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-[200px] p-0'>
                      <Command>
                        <CommandInput placeholder='Search language...' />
                        <CommandList>
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {languagesCustomForm.map(language => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  formCustomForm.setValue('language', language.value)
                                  setOpenCustomForm(false)
                                }}
                              >
                                {language.label}
                                <Check
                                  className={cn(
                                    'ml-auto',
                                    language.value === field.value ? 'opacity-100' : 'opacity-0'
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>This is the language that will be used in the dashboard.</FormDescription>
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
