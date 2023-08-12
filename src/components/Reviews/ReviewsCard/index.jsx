import React, { lazy } from 'react'
import c from './ReviewsCard.module.scss'
import user from '../../../images/specialties.png'


const ReviewsCard = () => {
  return (
    <div className={c.card}>
      <div className={c.user_img}>
        <img src={user} alt="" loading='lazy'/>
      </div>
      <div className={c.card_inner}>
        <h3>
          Палянчаев тукунчу
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
        </p>
      </div>
      <h1>
        “
      </h1>
    </div>
  )
}

export default ReviewsCard
