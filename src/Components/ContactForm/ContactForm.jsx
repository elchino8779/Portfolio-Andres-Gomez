import React, { useEffect, useState } from 'react'
import './ContactForm.scss'
import { useSelectorContext } from '../../Context/SelectorContext'
import iconCheck from '/Icons/check.svg'

const initialForm = {
  name: '',
  email: '',
  tel: '',
  mensaje: ''
}

const regexNombre = new RegExp('^.{3,30}$')
const regexEmail = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')
const regexTel = new RegExp('^.{10,20}$')
const regexMensaje = new RegExp('^.{15,255}$')

const ContactForm = () => {

  const [enviando, setEnviando] = useState(false)
  const [formDate, setFormDate] = useState(initialForm)
  const { handleSelector } = useSelectorContext();
  const [validateForm, setValidateForm] = useState(false)
  const [visibilityModal, setVisibilityModal] = useState(false)
  const [contentModal, setContentModal] = useState('');

  useEffect(() => {
    handleSelector('548px', '82px')
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (regexNombre.exec(formDate.name) && regexEmail.exec(formDate.email) && regexTel.exec(formDate.tel) && regexMensaje.exec(formDate.mensaje)) {
      setValidateForm(true)
    }
    else {
      setValidateForm(false)
    }
  }, [formDate])

  const handleFocus = () => {
    window.scroll({ top: '1000', behavior: 'smooth' })
  }

  const handleForm = (e) => {
    setFormDate({ ...formDate, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm) {
      setEnviando(true)
      fetch("https://formsubmit.co/ajax/andres_gomez87@outlook.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formDate.name,
          Email: formDate.email,
          Telefono: formDate.tel,
          Mensaje: formDate.mensaje
        })
      })
        .then(response => response.json())
        .then(data => {
          setEnviando(false)
          setValidateForm(false)
          if (data.success) {
            setContentModal('Gracias! Me comunicaré contigo a la brevedad')
            setVisibilityModal(true)
            setFormDate(initialForm)
            setTimeout(() => {
              setContentModal('')
              setVisibilityModal(false)
            }, 4000);
          }
          else {
            setContentModal('Ocurrió un error!\nPor favor intente nuevamente')
            setVisibilityModal(true)
            setTimeout(() => {
              setContentModal('')
              setVisibilityModal(false)
            }, 4000);
          }
        })
        .catch(error => {
          setEnviando(false)
          setContentModal('Error en el servidor.\nPor favor intente nuevamente más tarde!')
          setVisibilityModal(true)
          setTimeout(() => {
            setContentModal('')
            setVisibilityModal(false)
          }, 4000);
        })
    }
    else {
      setContentModal('Todos los datos son requeridos!')
      setVisibilityModal(true)
      setTimeout(() => {
        setContentModal('')
        setVisibilityModal(false)
      }, 4000);
    }
  }


  return (
    <div className='contact-form-container'>
      {visibilityModal &&
        <div className='modal-form-container'>
          <p>{contentModal}</p>
        </div>}
      <p>Envíame un mensaje y me comunicaré contigo a la brevedad</p>
      <form onClick={handleFocus} onSubmit={(e) => { handleSubmit(e) }}>
        <label htmlFor="name">Nombre / Empresa {regexNombre.exec(formDate.name) && <img src={iconCheck} alt="check" />}</label>
        <input className={!regexNombre.exec(formDate.name) ? 'input-no-validate' : 'input-yes-validate'}
          type="text"
          name="name"
          id='name'
          autoComplete='off'
          value={formDate.name}
          onChange={(e) => handleForm(e)} />

        <label htmlFor="email">Email {regexEmail.exec(formDate.email) && <img src={iconCheck} alt="check" />} </label>
        <input className={!regexEmail.exec(formDate.email) ? 'input-no-validate' : 'input-yes-validate'}
          type="email"
          name="email"
          id='email'
          autoComplete='on'
          value={formDate.email}
          onChange={(e) => handleForm(e)} />

        <label htmlFor="tel">Teléfono {regexTel.exec(formDate.tel) && <img src={iconCheck} alt="check" />} </label>
        <input className={!regexTel.exec(formDate.tel) ? 'input-no-validate' : 'input-yes-validate'}
          type="number"
          name="tel"
          id='tel'
          autoComplete='off'
          value={formDate.tel}
          onChange={(e) => handleForm(e)} />

        <label htmlFor="mensaje">Mensaje {regexMensaje.exec(formDate.mensaje) && <img src={iconCheck} alt="check" />} </label>
        <textarea
          className={!regexMensaje.exec(formDate.mensaje) ? 'textarea-no-validate' : 'textarea-yes-validate'}
          name="mensaje"
          cols="30"
          rows="10"
          id='mensaje'
          placeholder='Estoy interesado en trabajar contigo!'
          value={formDate.mensaje}
          onChange={(e) => handleForm(e)}></textarea>

        <button className={!validateForm ? 'button-no-validate' : "button-yes-validate"} style={!validateForm ? { cursor: 'not-allowed' } : { cursor: 'pointer' }}>{!enviando
          ? 'Enviar!'
          : <l-dot-pulse
            size="35"
            speed="1.8"
            color="rgb(180, 180, 180)"
          ></l-dot-pulse>}
        </button>
      </form>
    </div>
  )
}

export default ContactForm