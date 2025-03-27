'use client'

import { useState } from 'react'
import { Map } from '@/components'
import { provinceMapping } from '@/data'
import { cn } from '@/utils'

export default function Home() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  return (
    <div className="items-top flex w-full flex-col justify-center gap-8 p-8 sm:gap-10 sm:p-10 md:flex-row md:gap-20 md:p-20">
      <section className="flex flex-col gap-8 md:mt-60">
        <h1 className="flex flex-col items-start gap-4 text-3xl font-bold sm:text-5xl md:text-6xl">
          <span>Thailand</span>
          <span>Population</span>
        </h1>

        <div
          className={cn(
            'min-w-[300px] rounded bg-neutral-400 p-4 shadow-md transition-opacity duration-300 sm:min-w-[400px] md:min-w-[480px]',
            {
              'opacity-100': hoveredRegion,
              'opacity-0': !hoveredRegion,
            },
          )}
        >
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            {(hoveredRegion && provinceMapping[hoveredRegion]?.title) || 'Unknown Region'}
          </h2>
          <p className="text-sm text-neutral-800 sm:text-lg md:text-xl">
            Population:{' '}
            {(hoveredRegion &&
              provinceMapping[hoveredRegion]?.population?.toLocaleString()) ||
              'N/A'}
          </p>
        </div>
      </section>

      <Map onHover={setHoveredRegion} hoveredRegion={hoveredRegion} />
    </div>
  )
}
