import React from 'react'
import './ModalCertificaciones.scss'
import { useModalContext } from '../../Context/ModalContext'
import closeIcon from '/Icons/close.svg'

const ModalCertificaciones = () => {

  const { handleVisibilityFalse, visibilityModal, contentModal } = useModalContext()

  return (
    <>
      {visibilityModal &&
        <div className='modal-certificaciones-container' onClick={handleVisibilityFalse}>
          <div className="modal-certificaciones" onClick={(e) => e.stopPropagation()}>
            <img className='close-icon-modal' src={closeIcon} alt="Close" onClick={handleVisibilityFalse}/>
            <div className="img-certificado-container">
              <img src={`./CertificadosPortfolio/${contentModal.imgName}`} alt="Certificado" loading='eager'/>
            </div>
            <div className="separador-modal"></div>
            <div className="text-certificado-container">
              <div className="icon-title-modal">
                <img src={`./IconosCursos/${contentModal.iconName}`} alt="Icon" />
                <h2>{contentModal.name}</h2>
              </div>
              <h3>{contentModal.description}</h3>
              <ul className='skills-certificado-container'>
                {contentModal.skills.map((el, index) => <li key={index}>{el}</li>)}
              </ul>
            </div>
          </div>
        </div>}
    </>
  )
}

export default ModalCertificaciones