import React from 'react'
import c from './NewsCard.module.scss'
import arrow from '../../../images/arrow-right.svg'
import newsImg from '../../../images/news.png'

const NewsCard = () => {
  return (
    <div className={c.card}>
      <img src={newsImg} alt="news" loading='lazy'/>
      <div className={c.card_inner}>
        <span className={c.date}>
          05.08.2023
        </span>
        <p>
          This Article’s Title goes Here, but not too long.
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
