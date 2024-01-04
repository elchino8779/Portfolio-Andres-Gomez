import React from 'react'
import './Contacto.scss'
import contactIcon from '/Icons/contact.svg'
import ContactForm from '../../Components/ContactForm/ContactForm'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Contacto = () => {
  return (
    <div className='contacto-page'>
      <div className='contacto-title-container'>
        <div className="title-img-contacto">
          <LazyLoadImage src={contactIcon} alt="Icon" effect='blur' />
          <h2>Contacto</h2>
        </div>
        <div className="contact-url-container">
          <a href="mailto:andres_gomez87@outlook.com"><LazyLoadImage src="./ImgContacto/correo.svg" alt="email" effect='blur' /></a>
          <a href="https://wa.me/541126579297/?text=Estoy%20interesado%20en%20trabajar%20contigo!" target='_blank'><LazyLoadImage src="./ImgContacto/whatsapp.svg" alt="whatsapp" effect='blur' /></a>
          <a href="https://www.linkedin.com/in/andresgomez87/" target='_blank'><LazyLoadImage src="./ImgContacto/linkedin.svg" alt="linkedIn" effect='blur' /></a>
          <a href="https://github.com/elchino8779" target='_blank'><LazyLoadImage src="./ImgContacto/github.svg" alt="github" effect='blur' /></a>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contacto