import './Nav.scss'
import AvatarLentes from '/Avatares/avatar-lentes.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelectorContext } from '../../Context/SelectorContext'
import homeIcon from '/IconsNav/home.svg'
import certificacionesIcon from '/IconsNav/certificate.svg'
import proyectsIcon from '/IconsNav/proyects.svg'
import aboutIcon from '/IconsNav/about.svg'
import contactIcon from '/IconsNav/contact.svg'
import vigneteImg from '/Icons/vignete.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Nav = () => {

  const { selectorX, selectorW, handleSelector } = useSelectorContext();
  const navigate = useNavigate()


  const goHome = () =>{
    navigate('/')
  }

  return (
    <nav className='nav-container'>
      <div className="logo-texts" onClick={goHome}>
        <div className="vignete-nav-container">
          <img src={vigneteImg} alt="Viñeta" />
          <p>Hola!</p>
        </div>
        <img src={AvatarLentes} alt="Avatar" loading='eager' />
        <div className="text">
          <h1>Andrés Gómez</h1>
          <h3>Web Developer Frontend</h3>
        </div>
      </div>
      <div className="buttons-nav">
        <div className="buttons-container">

          <div className="selector-nav" style={{ left: selectorX, width: selectorW }}></div>

          <NavLink className='link-nav' to='/' onClick={() => handleSelector('32px', '60px')}>
            <p>Home</p>
            <LazyLoadImage src={homeIcon} alt="Home" effect='blur' />
          </NavLink>
          <NavLink className='link-nav' to='/certificaciones'>
            <p>Certificaciones</p>
            <LazyLoadImage src={certificacionesIcon} alt="Certificaciones" effect='blur' />
          </NavLink>
          <NavLink className='link-nav' to='/proyectos' >
            <p>Proyectos</p>
            <LazyLoadImage src={proyectsIcon} alt="Proyectos" effect='blur' />
          </NavLink>
          <NavLink className='link-nav' to='/sobremi' >
            <p>Sobre Mí</p>
            <LazyLoadImage src={aboutIcon} alt="Sobre Mí" effect='blur' />
          </NavLink>
          <NavLink className='link-nav' to='/contacto' >
            <p>Contacto</p>
            <LazyLoadImage src={contactIcon} alt="Contacto" effect='blur' />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav