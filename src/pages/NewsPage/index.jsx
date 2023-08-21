import React from 'react'
import { GetNews, ScrollTop } from '../../helpers'
import c from './News.module.scss'
import Title from '../../components/Title'
import { Components } from '../../components'

const NewsPage = () => {
  const {news} = GetNews()
  React.useEffect(() => {
    ScrollTop()
  }, [])
  return (
    <div className={c.news}>
      <Title desc={'мы всегда делимся своими новостями'} title={'Новости'}/>
      <div className={c.news_block}>
        <div className={c.news_card}>
          {
            news?.map((item, i) => (
              <Components.NewsCard 
                key={i}
                date={item.date} 
                description={item.description} 
                image={item.image}
                title={item.title}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NewsPage