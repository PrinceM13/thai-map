import { Province } from '@/data/map/types'

export type ProvinceProps = Province & {
  hoveredRegion: string | null
  setHoveredRegion: (id: string | null) => void
}
