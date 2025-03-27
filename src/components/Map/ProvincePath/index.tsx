import { ProvinceProps } from './types'
import { cn } from '@/utils'

const ProvincePath: React.FC<ProvinceProps> = ({
  id,
  d,
  hoveredRegion,
  setHoveredRegion,
}) => {
  return (
    <g>
      <path
        d={d}
        id={id}
        fill="currentColor"
        stroke="#333"
        strokeWidth="1"
        className={cn('transition-all duration-300', {
          'fill-emerald-600': hoveredRegion === id,
        })}
        onMouseEnter={() => setHoveredRegion(id)}
        onMouseLeave={() => setHoveredRegion(null)}
      />
    </g>
  )
}

export default ProvincePath
