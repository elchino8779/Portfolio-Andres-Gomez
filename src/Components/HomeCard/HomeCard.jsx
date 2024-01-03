import React from 'react'
import './HomeCard.scss'
import { Link } from 'react-router-dom'
import iconRight from '/Icons/right.svg'

const HomeCard = ({avatar, title, description1, description2, url, right, refer, id}) => {
  return (
    <div ref={refer} className='home-card-container' id={id}>
      <div className={right ? 'home-card-right' : 'home-card'}>
        <div className="img-container-home" >
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="text-container-home" >
          <h2>{title}</h2>
          <p>{description1}</p>
          <p>{description2}</p>
          <Link className='link-homecard' to={url}>
            <img src={iconRight} alt="Icon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeCard