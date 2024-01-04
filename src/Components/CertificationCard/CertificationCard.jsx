import React from 'react'
import './CertificationCard.scss'
import { useModalContext } from '../../Context/ModalContext'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const CertificationCard = ({ el }) => {

  const {handleVisibilityTrue} = useModalContext()

  return (
    <div className='card-container' onClick={() => handleVisibilityTrue(el)}>
      <LazyLoadImage className='img-card' src={`./IconosCursos/${el.iconName}`} alt="Icon" effect='blur'/>
      <div className="text-card">
        <h5>{el.name}</h5>
        <p>{el.description}</p>
      </div>
    </div>
  )
}

export default CertificationCard