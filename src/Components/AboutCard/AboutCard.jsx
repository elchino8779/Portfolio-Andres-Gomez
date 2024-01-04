import React from 'react'
import './AboutCard.scss'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const AboutCard = ({ img, texts, right }) => {
  return (
    <div className='about-card-container'>
      <div className={right ? 'img-text-about-right' : 'img-text-about'}>
        <div className="img-about">
          <LazyLoadImage src={img} alt="Imagen" effect="blur"/>
        </div>
        <div className="text-about">
          <h3>{texts.title}</h3>
          <p>{texts.description}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard