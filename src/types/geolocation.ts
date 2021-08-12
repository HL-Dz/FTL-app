export interface IGeometry {
  lat: number
  lng: number
}

interface IGeoItem  {
  formatted: string
  geometry: IGeometry
}

interface IGeoStatus {
  code: number
  message: string
}

export interface IGeoLocation {
  results: Array<IGeoItem>
  status: IGeoStatus
  total_results: number
}