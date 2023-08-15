import React from 'react'
import c from './Reviews.module.scss'
import Title from '../Title'
import ReviewsCard from './ReviewsCard'
import ReviewsModal from './ReviewsModal'


const Reviews = () => {
  const [modalWindow, setModalWindow] = React.useState(false)

  return (
    <div className={c.reviews}>
      <Title desc={'наши довольные пациенты'} title={'Отзывы'}/>
      {
        modalWindow && <ReviewsModal setModalState={setModalWindow}/>
      }
      <div className={c.add_btn}> 
        <button onClick={() => setModalWindow(true)}>
          Написать отзыв
        </button>
      </div>
      <div className={c.cards}>
        <ReviewsCard/>
        <ReviewsCard/>
        <ReviewsCard/>
      </div>
    </div>
  )
}

export default Reviews
