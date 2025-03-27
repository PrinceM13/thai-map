export type Province = {
  d: string
  title: string
  id: string
}

export type ProvinceInfo = {
  title: string
  population: number
}

export type ProvinceMapping = {
  [key: string]: ProvinceInfo
}
