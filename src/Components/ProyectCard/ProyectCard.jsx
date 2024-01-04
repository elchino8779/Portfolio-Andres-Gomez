import React, { useEffect, useRef, useState } from 'react'
import './ProyectCard.scss'
import iconProyectImg from '/Icons/iconProyectImg.svg'
import iconPlay from '/Icons/play.svg'
import { useModalContextVideo } from '../../Context/ModalContexVideo'

const ProyectCard = ({ el }) => {

  const [translate, setTranslate] = useState(0)
  const handleObserver = useRef();
  const [final, setFinal] = useState(false);
  const [btnPlay, setBtnPlay] = useState(false)

  const { handleVisibilityTrue } = useModalContextVideo()

  const handleTranslateLeft = () => {
    !final && setTranslate(translate - 400)
  }

  const handleTranslateRight = () => {
    translate != 0 && setTranslate(translate + 400)
  }

  const handleIconPlayTrue = () => { setBtnPlay(true) }
  const handleIconPlayFalse = () => { setBtnPlay(false) }

  useEffect(() => {
    const observer = new IntersectionObserver((estries) => {

      estries.forEach(entrie => {
        entrie.isIntersecting ? setFinal(true) : setFinal(false)
      })
    })

    observer.observe(handleObserver.current)

  }, [])

  return (
    <div className='proyect-card-container' onMouseOver={handleIconPlayTrue} onMouseLeave={handleIconPlayFalse}>
      {translate != 0 && <img className='icon-left' src={iconProyectImg} alt="Left" onClick={handleTranslateRight} />}
      {!final && <img className='icon-right' src={iconProyectImg} alt="Right" onClick={handleTranslateLeft} />}
      {btnPlay && <img className='icon-play' src={iconPlay} alt="Play" onClick={() => handleVisibilityTrue(el)}/>}
      <h2>{el.title}</h2>
      <div className="imgs-proyect-container" style={{ transform: `translateX(${translate}px)` }}>
        {el.imgsName.map((el, index) => <img loading='eager' ref={handleObserver} className='img-proyect' key={index} src={`./ImgProyectos/${el}`} alt='Img' />)}
      </div>
    </div>
  )
}

export default ProyectCard