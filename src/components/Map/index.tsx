import { provinces } from '@/data'
import { MapProps } from './types'
import ProvincePath from './ProvincePath'

const Map = ({ hoveredRegion, onHover: setHoveredRegion }: MapProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="559.57092"
      height="1024.7631"
      preserveAspectRatio="xMidYMid meet"
      className="h-auto w-full"
    >
      {provinces.map((province) => (
        <ProvincePath
          key={province.id}
          {...province}
          hoveredRegion={hoveredRegion}
          setHoveredRegion={setHoveredRegion}
        />
      ))}
    </svg>
  )
}

export default Map
