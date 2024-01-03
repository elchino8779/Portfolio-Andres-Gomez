import React, { useEffect } from 'react'
import './Certificaciones.scss'
import certificateIcon from '/Icons/certificate.svg'
import youTubeIcon from '/Icons/youtube.svg'
import codeIcon from '/Icons/code.svg'
import { useSelectorContext } from '../../Context/SelectorContext'
import CertificationCard from '../../Components/CertificationCard/CertificationCard'
import certificacionesJSON from '../../assets/certificaciones.json'
import edutubersJSON from '../../assets/edutubers.json'
import EdutuberCard from '../../Components/EdutuberCard/EdutuberCard'
import ModalCertificaciones from '../../Components/ModalCertificaciones/ModalCertificaciones'
import ImgTecnologias from '../../assets/lenguajes.json'

const Certificaciones = () => {

  const { handleSelector } = useSelectorContext();

  useEffect(() => {
    handleSelector('134px', '130px')
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='certificaciones-page'>
      <ModalCertificaciones />

      <div className="certificaciones-title-container">
        <div className="title-img-certificate">
          <img src={codeIcon} alt="Icon" />
          <h2>Lenguajes y tecnologías</h2>
        </div>
        <div className="lenguajes-tecnologias-container">
          {ImgTecnologias.map((el, index) =>
            <div key={index} className='img-name-container'>
              <img src={`./ImgTecnologias/${el.imgName}`} alt={el.name} />
              <p>{el.name}</p>
            </div>)}
        </div>
      </div>

      <div className="certificaciones-title-container">
        <div className="title-img-certificate">
          <img src={certificateIcon} alt="Icon" />
          <h2>Certificaciones</h2>
        </div>
        <div className="certificaciones-container">
          {certificacionesJSON.map((el, index) => <CertificationCard key={index} el={el} />)}
        </div>
      </div>

      <div className="certificaciones-title-container">
        <div className="title-img-certificate">
          <img src={youTubeIcon} alt="Icon" />
          <h2>EduTubers</h2>
        </div>
        <div className="edutubers-container">
          {edutubersJSON.map((el, index) => <EdutuberCard key={index} el={el} />)}
        </div>
      </div>
      <blockquote>
        *Los iconos e imagenes representados en esta página <b>NO</b> son de mi autoría y pertenecen a 
        <a href='https://www.aluracursos.com/' target='_blank'> Alura Latam</a>,
        <a href='https://www.ticmas.com/' target='_blank'> Ticmas Academy</a>,
        <a href='https://www.argentina.gob.ar/economia/conocimiento/argentina-programa' target='_blank'> Argentina Programa</a>,
        <a href='https://open-bootcamp.com/' target='_blank'> OpenBootcamp</a>,
        <a href='https://www.sololearn.com/es/' target='_blank'> SoloLearn</a>,
        <a href='https://platzi.com/' target='_blank'> Platzi</a>,
        <a href='https://www.youtube.com/@jonmircha' target='_blank'> JonMircha</a>,
        <a href='https://www.youtube.com/@midudev' target='_blank'> MiduDev</a>,
        <a href='https://www.youtube.com/@VictorRoblesWEB' target='_blank'> VictorRobles</a> y
        <a href='https://www.youtube.com/@freecodecampespanol' target='_blank'> freeCodeCamp </a>
        respectivamente. Son utilizados solo con fines ilustrativos haciendo <b>REFERENCIA</b> a los cursos que realizé en sus plataformas y/o canales de 
        <a href='https://www.youtube.com/' target='_blank'> YouTube </a>
        para demostrar mis conocimientos adquiridos gracias a los mismos.
        </blockquote>
    </div>
  )
}

export default Certificaciones