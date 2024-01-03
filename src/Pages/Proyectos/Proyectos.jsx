import React from 'react'
import './Proyectos.scss'
import { useEffect } from 'react'
import { useSelectorContext } from '../../Context/SelectorContext';
import proyectIcon from '/Icons/proyects.svg'
import ProyectCard from '../../Components/ProyectCard/ProyectCard';
import proyectJSON from '../../assets/proyectos.json'
import ModalVideo from '../../Components/ModalVideo/ModalVideo';
import githubIcon from '/ImgContacto/github.svg'

const Proyectos = () => {

  const { handleSelector } = useSelectorContext();

  useEffect(() => {
    handleSelector('290px', '88px')
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='proyectos-page'>
      <ModalVideo />
      <div className="proyectos-title-container">
        <div className="title-img-proyectos">
          <img src={proyectIcon} alt="Icon" />
          <h2>Proyectos personales</h2>
        </div>
        <div className="proyectos-container">
          {proyectJSON.map(el => <ProyectCard key={el.title} el={el}/>)}
        </div>
        <footer>*Si desea conocer la totalidad de mis proyectos, lo invito a visitar mi perfil de GitHub <a href='https://github.com/elchino8779' target='_blank'><img src={githubIcon}></img></a></footer>
      </div>
    </div>
  )
}

export default Proyectos