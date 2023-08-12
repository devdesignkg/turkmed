import React from 'react'
import c from './News.module.scss'
import NewsCard from './NewsCard'
import Title from '../Title'
import { GetNews } from '../../helpers'

const News = () => {
  const {news} = GetNews()
  
  return (
    <div className={c.news}>
      <Title desc={'мы всегда делимся своими новостями'} title={'Новости'}/>
      <div className={c.news_block}>
        <div className={c.news_card}>
          {
            news?.map(item => (
              <NewsCard 
                date={item.date} 
                description={item.description} 
                image={item.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default News
