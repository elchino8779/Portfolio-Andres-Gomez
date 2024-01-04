import React, { useEffect } from 'react'
import './SobreMi.scss'
import aboutIcon from '/Icons/about.svg'
import { useSelectorContext } from '../../Context/SelectorContext';
import AboutCard from '../../Components/AboutCard/AboutCard';
import sobreMi from '../../assets/sobremi.json'
import libroImg from '/IconosSobreMi/libro.png'
import curriculumImg from '/IconosSobreMi/curriculum.png'
import barcoImg from '/IconosSobreMi/barco.png'
import polloImg from '/IconosSobreMi/pollo.png'
import avionImg from '/IconosSobreMi/avion.png'
import varitaMagicaImg from '/IconosSobreMi/varitamagica.png'
import sablesImg from '/IconosSobreMi/sables2.png'
import sinRetornoImg from '/IconosSobreMi/sinRetorno.png'
import graciasImg from '/IconosSobreMi/gracias.png'
import solImg from '/IconosSobreMi/sol.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const SobreMi = () => {

  const { handleSelector } = useSelectorContext();

  useEffect(() => {
    handleSelector('423px', '78px')
    window.scroll({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='sobre-mi-page'>
      <div className="sobre-mi-title-container">
        <div className="title-img-sobre-mi">
          <LazyLoadImage src={aboutIcon} alt="Icon" effect='blur'/>
          <h2>Sobre mi</h2>
        </div>
        <AboutCard img={libroImg} texts={sobreMi.parrafo1}/>
        <AboutCard img={curriculumImg} texts={sobreMi.parrafo2}  right={true}/>
        <AboutCard img={barcoImg} texts={sobreMi.parrafo3}/>
        <AboutCard img={polloImg} texts={sobreMi.parrafo4}  right={true}/>
        <AboutCard img={avionImg} texts={sobreMi.parrafo5}/>
        <AboutCard img={varitaMagicaImg} texts={sobreMi.parrafo6}  right={true}/>
        <AboutCard img={sablesImg} texts={sobreMi.parrafo7}/>
        <AboutCard img={sinRetornoImg} texts={sobreMi.parrafo8}  right={true}/>
        <AboutCard img={graciasImg} texts={sobreMi.parrafo9}/>
        <AboutCard img={solImg} texts={sobreMi.parrafo10}  right={true}/>
      </div>
    </div>
  )
}

export default SobreMi