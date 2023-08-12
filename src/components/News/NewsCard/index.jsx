import React from 'react'
import c from './NewsCard.module.scss'
import arrow from '../../../images/arrow-right.svg'
import newsImg from '../../../images/news.png'

const NewsCard = ({date, description, image}) => {
  return (
    <div className={c.card}>
      <img src={image} alt="news" loading='lazy'/>
      <div className={c.card_inner}>
        <span className={c.date}>
          {date}
        </span>
        <p>
          {description.length > 50 ? description.split('').slice(0, 50).join('') + '...' : description}
        </p>
        <button>
          Подробнее
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  )
}

export default NewsCard
