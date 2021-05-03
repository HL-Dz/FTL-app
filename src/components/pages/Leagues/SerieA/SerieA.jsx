import React from 'react';
import "./SerieA.scss";
import allianz from './Roma.jpg';


let SerieABackground = {
  backgroundImage: `url(${allianz})`,
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const SerieA = () => {
  return (
    <div className="serieA" style={SerieABackground}>
      <div className="container">
        
      </div>
    </div>
  )
}

export default SerieA;