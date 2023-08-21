import React from 'react'
import c from './NewsCard.module.scss'

const NewsCard = ({date, description, image, title}) => {
  return (
    <div className={c.card}>
      <img src={image} alt="news" loading='lazy'/>
      <div className={c.card_inner}>
        <span className={c.date}>
          {date}
        </span>
        <h3>{title}</h3>
        <p>
          {description.length > 50 ? description.split('').slice(0, 50).join('') + '...' : description}
        </p>
      </div>
    </div>
  )
}

export default NewsCard
