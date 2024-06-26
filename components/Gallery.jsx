import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'

import CircleButton from './elements/CircleButton'
import { ArrowRightIcon } from './icons/ArrowRight'
import ImageWithBlurredBackground from './ImageWithBlurredBackground'

export default function Gallery({ media }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    draggable: media && media.length > 1,
    loop: true,
    skipSnaps: true,
    speed: 7,
  })
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi.on('reInit', onScroll)
    emblaApi.on('scroll', onScroll)
  }, [emblaApi, onScroll])

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

  const handlePrevious = () => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  if (!media?.length) {
    return null
  }

  return (
    <div
      className="relative md:h-[calc(100vh-70px)] lg:h-[calc(100vh-100px)] bg-lightGray"
      tabIndex={-1}
    >
      <div className="h-full overflow-hidden flex" ref={emblaRef}>
        <div className="flex items-center md:items-start w-full md:h-full space-x-2">
          {/* Slides */}
          {media.map(({ alt, src, backgroundImage }, key) => {
            return (
              <div
                key={key}
                className="w-full md:w-auto md:h-full flex items-center justify-center shrink-0 grow-0"
              >
                <ImageWithBlurredBackground
                  alt={alt}
                  src={src}
                  backgroundImage={backgroundImage}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        />
      </div>

      {/* Navigation */}
      {media.length > 1 && (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8">
            <CircleButton onClick={handlePrevious}>
              <ArrowRightIcon className="rotate-180 w-[18px] md:w-[24px]" />
            </CircleButton>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-8">
            <CircleButton onClick={handleNext}>
              <ArrowRightIcon />
            </CircleButton>
          </div>
        </>
      )}
    </div>
  )
}
