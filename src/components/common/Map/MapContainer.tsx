import React, { useEffect, useState, useCallback } from 'react'
import { FC } from 'react'
import { geoCoding } from '../../../api/api'
import { IGeometry } from '../../../types/geolocation'
import Map from './Map'

interface MapContainerProps {
  closeMap: () => void
  isActiveCloseAnim: boolean
  currentAddress: string
}

const MapContainer: FC<MapContainerProps> = ({closeMap, isActiveCloseAnim, currentAddress}) => {
  const [coords, setCoords] = useState<IGeometry | null>(null);

  const getCoords = async () => {
    try {
      let response = await geoCoding(currentAddress);
      setCoords(response.results[0].geometry);
    } catch (err) {
      console.log(err);
    }
  }

  const getCoordsCallback = useCallback(() => {
    getCoords();
  }, [coords])

  
  useEffect(() => {
    getCoordsCallback();
  }, [])

  if(!coords) return null;

  return <Map closeMap={closeMap} isActiveCloseAnim={isActiveCloseAnim} coords={coords}/>
}

export default MapContainer
