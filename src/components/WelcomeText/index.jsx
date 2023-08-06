import React from 'react'
import c from './WelcomeText.module.scss'
import arrow from '../../images/arrow-right.svg'
import Title from '../title'

const WelcomeText = () => {
  return (
    <div className={c.text}>
      <Title sub={'ДОБРО ПОЖАЛОВАТЬ В TURKMED'} title={'Лучшее место чтобы излечить “гемодиализ”'}/>
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
