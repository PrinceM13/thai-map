'use client'

import { useState } from 'react'
import { Map } from '@/components'
import { provinceMapping } from '@/data'
import { cn } from '@/utils'

export default function Home() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  return (
    <div className="items-top flex min-h-screen w-full flex-col items-center justify-center gap-8 px-8 py-6 md:flex-row md:gap-8 md:px-10 md:py-5 lg:gap-20 lg:px-20 lg:py-10">
      <section className="flex flex-col gap-4 md:gap-8">
        <h1 className="flex flex-row justify-center gap-4 text-3xl font-bold md:flex-col md:items-start md:text-5xl lg:text-6xl">
          <span>Thailand</span>
          <span>Population</span>
        </h1>

        <div
          className={cn(
            'min-w-[300px] rounded bg-neutral-400 p-4 shadow-md transition-opacity duration-300 md:min-w-[320px] lg:min-w-[480px]',
            {
              'opacity-100': hoveredRegion,
              'md:opacity-0': !hoveredRegion,
            },
          )}
        >
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            {(hoveredRegion && provinceMapping[hoveredRegion]?.title) || 'Unknown Region'}
          </h2>
          <p className="text-sm text-neutral-800 md:text-lg lg:text-xl">
            Population:{' '}
            {(hoveredRegion &&
              provinceMapping[hoveredRegion]?.population?.toLocaleString()) ||
              'N/A'}
          </p>
        </div>
      </section>

      <div className="flex justify-center">
        <Map onHover={setHoveredRegion} hoveredRegion={hoveredRegion} />
      </div>
    </div>
  )
}
