import React from 'react'
import './Contacto.scss'
import contactIcon from '/Icons/contact.svg'
import ContactForm from '../../Components/ContactForm/ContactForm'

const Contacto = () => {
  return (
    <div className='contacto-page'>
      <div className='contacto-title-container'>
        <div className="title-img-contacto">
          <img src={contactIcon} alt="Icon" />
          <h2>Contacto</h2>
        </div>
        <div className="contact-url-container">
          <a href="mailto:andres_gomez87@outlook.com"><img src="./ImgContacto/correo.svg" alt="email" /></a>
          <a href="https://wa.me/541126579297/?text=Estoy%20interesado%20en%20trabajar%20contigo!" target='_blank'><img src="./ImgContacto/whatsapp.svg" alt="whatsapp" /></a>
          <a href="https://www.linkedin.com/in/andresgomez87/" target='_blank'><img src="./ImgContacto/linkedin.svg" alt="linkedIn" /></a>
          <a href="https://github.com/elchino8779" target='_blank'><img src="./ImgContacto/github.svg" alt="github" /></a>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contacto