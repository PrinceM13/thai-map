import { provinces } from '@/data'
import { MapProps } from './types'
import ProvincePath from './ProvincePath'

const Map = ({ hoveredRegion, onHover: setHoveredRegion }: MapProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height={`${1024.7631 / 559.57092}em`}
      className="h-fit w-fit min-w-[300px] md:min-w-[370px] lg:min-w-[410px]"
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
