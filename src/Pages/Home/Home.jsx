import React, { useEffect, useRef, useState } from 'react'
import { Link, Element } from 'react-scroll';
import './Home.scss'
import HomeCard from '../../Components/HomeCard/HomeCard'
import avatarCertificaciones from '/Avatares/avatar-certificaciones.png'
import avatarProyectos from '/Avatares/avatar-proyectos.png'
import avatarSobremi from '/Avatares/avatar-sobremi.png'
import avatarContacto from '/Avatares/avatar-contactos.png'
import { useSelectorContext } from '../../Context/SelectorContext'
import PrincipalCard from '../../Components/PrincipalCard/PrincipalCard';
import UpIcon from '/Icons/up.svg'
import DownIcon from '/Icons/down.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {

  const { handleSelector } = useSelectorContext()
  const [toSectionButton, setToSectionButton] = useState('section-2')
  const [iconButton, setIconButton] = useState(DownIcon)
  const section1 = useRef()
  const section2 = useRef()
  const section3 = useRef()
  const section4 = useRef()
  const section5 = useRef()

  useEffect(() => {
    handleSelector('32px', '60px')

    window.scroll({ top: 0, behavior: 'smooth' })

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((el) => {
        if (el.isIntersecting) {
          if (el.target.id == 'section-1') {
            setToSectionButton('section-2')
            setIconButton(DownIcon)
          }
          if (el.target.id == 'section-2') setToSectionButton('section-3')
          if (el.target.id == 'section-3') setToSectionButton('section-4')
          if (el.target.id == 'section-4') {
            setToSectionButton('section-5')
            setIconButton(DownIcon)
          }
          if (el.target.id == 'section-5') {
            setToSectionButton('section-1')
            setIconButton(UpIcon)
          }
        }
      })

    }, { threshold: 0.5 });

    observer.observe(section1.current);
    observer.observe(section2.current);
    observer.observe(section3.current);
    observer.observe(section4.current);
    observer.observe(section5.current);
  }, [])

  return (
    <div className='home-page'>

      <Link
        className="button-down"
        to={toSectionButton}
        smooth={true}
        duration={500}>
        <LazyLoadImage src={iconButton} alt="Down" effect='blur'/>
      </Link>

      <Element name='section-1'>
        <PrincipalCard refer={section1} id='section-1'/>
      </Element>

      <Element name='section-2'>
        <HomeCard avatar={avatarCertificaciones}
          title='Mis certificaciones'
          description1={'Muchas o pocas, no lo sé... (80% autodidacta)'}
          description2={'De la práctica y los errores es de donde más aprendí'}
          url={'/certificaciones'}
          refer={section2}
          id='section-2' />
      </Element>

      <Element name='section-3'>
        <HomeCard avatar={avatarProyectos}
          title='Mis proyectos'
          description1={'Poniendo en práctica mis conocimientos y habilidades'}
          description2={'es lo que puedo llegar a lograr'}
          url={'/proyectos'}
          right={true}
          refer={section3}
          id='section-3' />
      </Element>

      <Element name='section-4'>
        <HomeCard avatar={avatarSobremi}
          title='Sobre Mí'
          description1={'Conoce mi historia y como logré entrar al mundo IT'}
          description2={'(más difícil de lo que imaginé)'}
          url={'/sobremi'}
          refer={section4}
          id='section-4' />
      </Element>

      <Element name='section-5'>
        <HomeCard avatar={avatarContacto}
          title='Contacto'
          description1={'Envíame un mensaje, visita mi linkedIn o mira mi perfil de GitHub'}
          description2={'Trabajemos juntos después de esto...'}
          url={'/contacto'}
          right={true}
          refer={section5}
          id='section-5' />
      </Element>
    </div>
  )
}

export default Home