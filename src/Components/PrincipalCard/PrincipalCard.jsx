import React, { useState } from 'react'
import './PrincipalCard.scss'
import AvatarOjosCerrados from '/Avatares/avatar-ojos-cerrados.png'
import AvatarOjosCerradosLentes from '/Avatares/avatar-ojos-cerrados-lentes.png'

const PrincipalCard = ({refer, id}) => {

  const [avatar, setAvatar] = useState(AvatarOjosCerrados)

  const handleAvatar = () => {
    avatar == AvatarOjosCerrados ? setAvatar(AvatarOjosCerradosLentes) : setAvatar(AvatarOjosCerrados)
  }

  return (
    <div ref={refer} className='principal-card-container' id={id}>
      <div className="principal-card">
        <div className="text-container-principal">
          <h2>Bienvenido!</h2>
          <h3>Mi nombre es Andrés</h3>
          <h4>Web Developer Frontend</h4>
        </div>
        <div className="img-container-principal">
          <img src={avatar} alt="Avatar" onMouseEnter={handleAvatar} onMouseOut={handleAvatar} loading='eager'/>
        </div>
      </div>
    </div>
  )
}

export default PrincipalCard