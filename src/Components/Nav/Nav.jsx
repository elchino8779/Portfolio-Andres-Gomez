import './Nav.scss'
import AvatarLentes from '/Avatares/avatar-lentes.png'
import { NavLink } from 'react-router-dom'
import { useSelectorContext } from '../../Context/SelectorContext'
import homeIcon from '/IconsNav/home.svg'
import certificacionesIcon from '/IconsNav/certificate.svg'
import proyectsIcon from '/IconsNav/proyects.svg'
import aboutIcon from '/IconsNav/about.svg'
import contactIcon from '/IconsNav/contact.svg'

const Nav = () => {

  const { selectorX, selectorW, handleSelector } = useSelectorContext();

  return (
    <nav className='nav-container'>
      <div className="logo-texts">
        <img src={AvatarLentes} alt="Avatar" />
        <div className="text">
          <h1>Andres Gomez</h1>
          <h3>Web Developer Frontend</h3>
        </div>
      </div>
      <div className="buttons-nav">
        <div className="buttons-container">

          <div className="selector-nav" style={{ left: selectorX, width: selectorW }}></div>

          <NavLink className='link-nav' to='/' onClick={() => handleSelector('32px', '60px')}>
            <p>Home</p>
            <img src={homeIcon} alt="Home" />
          </NavLink>
          <NavLink className='link-nav' to='/certificaciones' >
            <p>Certificaciones</p>
            <img src={certificacionesIcon} alt="Certificaciones" />
          </NavLink>
          <NavLink className='link-nav' to='/proyectos' >
            <p>Proyectos</p>
            <img src={proyectsIcon} alt="Proyectos" />
          </NavLink>
          <NavLink className='link-nav' to='/sobremi' >
            <p>Sobre Mí</p>
            <img src={aboutIcon} alt="Sobre Mí" />
          </NavLink>
          <NavLink className='link-nav' to='/contacto' >
            <p>Contacto</p>
            <img src={contactIcon} alt="Contacto" />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav