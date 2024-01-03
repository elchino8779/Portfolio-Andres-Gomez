import React from 'react'
import './CertificationCard.scss'
import { useModalContext } from '../../Context/ModalContext'

const CertificationCard = ({ el }) => {

  const {handleVisibilityTrue} = useModalContext()

  return (
    <div className='card-container' onClick={() => handleVisibilityTrue(el)}>
      <img className='img-card' src={`./IconosCursos/${el.iconName}`} alt="Icon" />
      <div className="text-card">
        <h5>{el.name}</h5>
        <p>{el.description}</p>
      </div>
    </div>
  )
}

export default CertificationCard