import React from 'react'
import './AboutCard.scss'

const AboutCard = ({ img, texts, right }) => {
  return (
    <div className='about-card-container'>
      <div className={right ? 'img-text-about-right' : 'img-text-about'}>
        <div className="img-about">
          <img src={img} alt="Imagen" />
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