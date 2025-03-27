'use client'

import { useState } from 'react'
import { Map } from '@/components'
import { provinceMapping } from '@/data'
import { cn } from '@/utils'

export default function Home() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  return (
    <div className="items-top flex w-full justify-center gap-20 p-20">
      <section className="mt-60 flex flex-col gap-8">
        <h1 className="flex flex-col items-start gap-4 text-6xl font-bold">
          <span>Thailand</span>
          <span>Population</span>
        </h1>

        <div
          className={cn(
            'min-w-[480px] rounded bg-neutral-400 p-4 shadow-md transition-opacity duration-300',
            {
              'opacity-100': hoveredRegion,
              'opacity-0': !hoveredRegion,
            },
          )}
        >
          <h2 className="text-2xl font-semibold">
            {(hoveredRegion && provinceMapping[hoveredRegion]?.title) || 'Unknown Region'}
          </h2>
          <p className="text-lg text-neutral-800">
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
