import Autoplay from 'embla-carousel-autoplay'
import React from 'react'

import type { Meta } from '@storybook/react'
import type { CarouselApi } from '#root/components/ui/carousel'

import { Card, CardContent } from '#root/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '#root/components/ui/carousel'

function Page() {
  return <></>
}

const meta = {
  title: 'shadcn-ui/carousel',
  component: Page,
} satisfies Meta<typeof Page>

export default meta

export function CarouselDemo() {
  return (
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
  )
}

export function CarouselSize() {
  return (
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
  )
}

export function CarouselSpacing() {
  return (
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
  )
}

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: 'start',
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
  )
}

export function CarouselDApiDemo() {
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
    <div className='mx-auto max-w-xs'>
      <Carousel
        setApi={setApi}
        className='w-full max-w-xs'
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
  )
}

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-xs'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
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
  )
}
