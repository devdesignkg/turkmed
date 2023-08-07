import React from 'react'
import c from './WelcomeText.module.scss'
import arrow from '../../images/arrow-right.svg'
import Title from '../Title'

const WelcomeText = () => {
  return (
    <div className={c.text}>
      <div className={c.title}>
        <p>ДОБРО ПОЖАЛОВАТЬ В TURKMED</p>
        <h1>Лучшее место чтобы излечить “гемодиализ”</h1>
      </div>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
      </span>
      <div className={c.more}>
        <p>Подробнее</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  )
}

export default WelcomeText
