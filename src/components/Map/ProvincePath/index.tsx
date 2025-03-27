import { ProvinceProps } from './types'

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
        className={`transition-all duration-300 ${
          hoveredRegion === id ? 'fill-emerald-500' : 'fill-gray-300'
        }`}
        onMouseEnter={() => setHoveredRegion(id)}
        onMouseLeave={() => setHoveredRegion(null)}
      />
    </g>
  )
}

export default ProvincePath
