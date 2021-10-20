import React from 'react';
import { sectionsData } from './InfoData';

const InfoContent = () => {
  return (
    <div className="info__content">
      {
        sectionsData.map(section => {
          return (
            <section className="info__section" id={section.pathId} key={section.id}>
              <div className="info__title">
                {section.title}
                <i className={section.cls}></i>
              </div>
              <div className="info__description">
                <p className="info__text">
                  {section.text}
                </p>
              </div>
              {
                section.images.map((image, index) => {
                  return (
                    <div className="info__section-pic" key={index}>
                      <img src={image} alt="Info" className="info__section-img"/>
                    </div>
                  )
                })
              }
            </section>
          )
        })
      }
    </div>
  )
}

export default InfoContent;