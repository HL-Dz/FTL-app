import React, { FC, useEffect, useRef, useState } from 'react';
import './Map.scss';
import closeMapImg from '../../../assets/images/ExitMap.png';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IGeometry } from '../../../types/geolocation';
import { delay } from '../../../helpers/helpers';
import UniversalLoader from '../UniversalLoader/UniversalLoader';


interface MapProps {
  closeMap: () => void
  isActiveCloseAnim: boolean
  coords: IGeometry
}

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOXGL_TOKEN}`;

const Map: FC<MapProps> = ({closeMap, isActiveCloseAnim, coords}) => {    
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(coords.lng);
  const [lat, setLat] = useState(coords.lat);
  const [zoom, setZoom] = useState(14);
  const [isMapLoading, setMapIsLoading] = useState(false);

  const renderMap = async () => {
    setMapIsLoading(true);
    await delay(500)
    if(map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })
    map.current.on('load', () => {
      setMapIsLoading(false);
      new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
    })
  }

  const removeCurrentMap = () => {
    map.current.remove();
    closeMap();
  }

  useEffect(() => {
    if(!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
  }, [])

  useEffect(() => {
    renderMap();
  }, [])

  return (
    <div className={isActiveCloseAnim ? "map map_inactive" : "map"}>
      <div className={isActiveCloseAnim ? "map__container map__container_inactive" : "map__container"}>
        {isMapLoading ? <UniversalLoader/> : null}
        <div className="map__close" onClick={removeCurrentMap}>
          <img src={closeMapImg} alt="Close map" className="map__close-img" />
        </div>
        <div className="map__content" ref={mapContainer}></div>
      </div>
    </div>
  )
}

export default Map;