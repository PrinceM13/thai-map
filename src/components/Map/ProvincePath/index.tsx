import { provinceMapping } from '@/data'
import { ProvinceProps } from './types'
import { cn } from '@/utils'

const isLogScale = false

const ProvincePath: React.FC<ProvinceProps> = ({
  id,
  d,
  hoveredRegion,
  setHoveredRegion,
}) => {
  const population = provinceMapping[id]?.population ?? 0

  const minPopulation = Math.min(
    ...Object.values(provinceMapping).map((province) => province.population || 0),
  )
  const maxPopulation = Math.max(
    ...Object.values(provinceMapping).map((province) => province.population || 0),
  )
  const minOpacity = 0.2
  const maxOpacity = 1

  // Calculate opacity based on population range
  let standardOpacity = (population - minPopulation) / (maxPopulation - minPopulation)
  standardOpacity = Math.max(minOpacity, Math.min(standardOpacity, maxOpacity)) // Clamp to the range of 0.2 to 1

  // Calculate opacity using a logarithmic scale to compress differences
  const logMin = Math.log(minPopulation || 1) // Avoid log(0) by setting a min value
  const logMax = Math.log(maxPopulation || 1)

  let logOpacity = (Math.log(population || 1) - logMin) / (logMax - logMin)
  logOpacity = Math.max(minOpacity, Math.min(logOpacity, maxOpacity)) // Clamp to the range of 0.2 to 1

  const opacity = isLogScale ? logOpacity : standardOpacity

  return (
    <g>
      <path
        d={d}
        id={id}
        fill="currentColor"
        stroke="#333"
        strokeWidth="1"
        className={cn(
          'fill-emerald-100 transition-all duration-300',
          { 'fill-emerald-600': hoveredRegion === id },
          //   hoveredRegion === id
          //     ? 'fill-emerald-500' // Dynamically calculate fill opacity
          //     : `opacity-[${Math.round(opacity * 100)}%]`, // Dynamically calculate fill opacity
        )}
        onMouseEnter={() => setHoveredRegion(id)}
        onMouseLeave={() => setHoveredRegion(null)}
      />
    </g>
  )
}

export default ProvincePath
