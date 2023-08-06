import React from 'react'
import c from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={c.banner}>
      <div className={c.container}>
        <div className={c.banner_title}>
          <p>Мы заботимся о вашей здоровии</p>
          <h1>Впереди в медицинском совершенстве</h1>
          <button>Наши специальности</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
