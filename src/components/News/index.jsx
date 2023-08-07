import React from 'react'
import c from './News.module.scss'
import NewsCard from './NewsCard'
import Title from '../Title'

const News = () => {
  return (
    <div className={c.news}>
      <Title desc={'мы всегда делимся своими новостями'} title={'Новости'}/>
      <div className={c.news_block}>
        <div className={c.news_card}>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
          <NewsCard/>
        </div>
      </div>
    </div>
  )
}

export default News
