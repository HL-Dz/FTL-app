import React, { FC } from 'react';
import './Map.scss';
import closeMapImg from '../../../assets/images/ExitMap.png';

interface MapProps {
  closeMap: () => void
  isActiveCloseAnim: boolean
}

const Map: FC<MapProps> = ({closeMap, isActiveCloseAnim}) => {
  return (
    <div className={isActiveCloseAnim ? "map map_inactive" : "map"}>
      <div className={isActiveCloseAnim ? "map__container map__container_inactive" : "map__container"}>
        <div className="map__close" onClick={closeMap}>
          <img src={closeMapImg} alt="Close map" className="map__close-img" />
        </div>
        <div className="map__content"></div>
      </div>
    </div>
  )
}

export default Map;