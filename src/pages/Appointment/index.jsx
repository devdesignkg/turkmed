import React from 'react'
import c from './Appointment.module.scss'
import doctorImg from '../../images/gallery-2.png'
import arrow from '../../images/arrow-down.svg'

const Appointment = () => {
  return (
    <div className={c.appointment}>
      <div className={c.more}>
        <div className={c.info}>
          <div className={c.left}>
            <img 
              src={doctorImg}
              alt='img'
            />
          </div>
          <div className={c.right}>
            <div className={c.title}>
              <h1>Саттаржанов Даниел</h1>
              <h2>Врач Гемодиализ</h2>
            </div>
            <div className={c.form}>
              <div className={c.block_1}>
                <input type="text" placeholder='Имя'/>
                <div className={c.gender}>
                  <p>Пол</p>
                  <img src={arrow} alt=">" />
                </div>
              </div>
              <div className={c.block_2}>
                <div className={c.gender}>
                  <p>Дата</p>
                  <img src={arrow} alt=">" />
                </div>
                <div className={c.gender}>
                  <p>Время</p>
                  <img src={arrow} alt=">" />
                </div>
              </div>
              <div className={c.block_3}>
                <input type="number" placeholder='Номер телефона' />
                <button>Подтвердить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
