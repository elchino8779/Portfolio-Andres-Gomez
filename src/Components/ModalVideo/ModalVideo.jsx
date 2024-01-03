import React, { useRef } from 'react'
import './ModalVideo.scss'
import { useModalContextVideo } from '../../Context/ModalContexVideo'
import closeIcon from '/Icons/close.svg'
import githubpagesIcon from '/ImgTecnologias/githubpages.png'

const ModalVideo = () => {

  const { handleVisibilityFalse, contentModal, visibilityModal } = useModalContextVideo()
  const videoPlayer = useRef()

  const handlePauseVideo = () => {
    videoPlayer.current.pause()
  }

  return (
    <>
      {visibilityModal &&
        <div className='modal-video-container' onClick={handleVisibilityFalse}>
          <div className="modal-video" onClick={(e) => e.stopPropagation()}>
          <img className='close-icon-modal-proyects' src={closeIcon} alt="Close" onClick={handleVisibilityFalse} />
            <video ref={videoPlayer} src={`./VideosProyectos/${contentModal.videoName}`} autoPlay controls></video>
            <div className="separador-modal-video"></div>
            <div className="texts-modal-video">
              <h3>{contentModal.title}</h3>
              <section className="description-container">
                {contentModal.description.map((el, index) => <p key={index}><b>●</b> {el} <b>●</b></p>)}
              </section>
              <div className="icons-video-container">
                <a href={contentModal.githubPages} target='_blank' onClick={handlePauseVideo}>
                  <img src={githubpagesIcon} alt="GitHub Pages" />
                </a>
              </div>
            </div>
          </div>
        </div>}
    </>
  )
}

export default ModalVideo