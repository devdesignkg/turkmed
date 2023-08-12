import React from 'react'
import c from './Reviews.module.scss'
import Title from '../Title'
import ReviewsCard from './ReviewsCard'

const Reviews = () => {
  return (
    <div className={c.reviews}>
      <Title desc={'наши довольные пациенты'} title={'Отзывы'}/>
      <div className={c.cards}>
        <ReviewsCard/>
        <ReviewsCard/>
        <ReviewsCard/>
      </div>
    </div>
  )
}

export default Reviews
