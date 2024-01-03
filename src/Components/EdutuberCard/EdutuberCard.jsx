import React from 'react'
import './EdutuberCard.scss'

const EdutuberCard = ({ el }) => {
  return (
    <a href={el.canalURL} className='edutuber-card-container' target='_blank'>
      <img src={`./ImgEdutubers/${el.imgCanal}`} alt="Img Canal" />
      <h4>{el.name}</h4>
    </a>
  )
}

export default EdutuberCard