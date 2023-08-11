import React, { useRef } from 'react'
import c from './Appointment.module.scss'
import arrow from '../../images/arrow-down.svg'
import { GetDoctors, ScrollTop } from '../../helpers'
import { useParams } from 'react-router-dom'
import { timeList } from '../../utils'

const Appointment = () => {
  const { id } = useParams()
  const { doctors } = GetDoctors()
  const [genderView, setGenderView] = React.useState(false)
  const [timeView, setTimeView] = React.useState(false)
  const [value, setValue] = React.useState({
    name: '',
    gender: '',
    time: '',
    date: '',
    number: '',
  })
  const ref = useRef();
  React.useEffect(() => {
    ScrollTop()
  }, [])
  const item = doctors?.find(value => value.id === Number(id))

  console.log(value);
  return (
    <div className={c.appointment}>
      <div className={c.more}>
        <div className={c.info}>
          <div className={c.left}>
            <img 
              src={item?.image} 
              alt='img'
            />
          </div>
          <div className={c.right}>
            <div className={c.title}>
              <h1>{item?.full_name}</h1>
              <h2>{item?.job}</h2>
            </div>
            <div className={c.form}>
              <div className={c.block_1}>
                <input type="text" placeholder='Имя' onChange={(e) => setValue({...value, name: e.target.value})}/>
                <div className={c.gender} onClick={() => setGenderView(!genderView)}>
                  <p>Пол</p>
                  <img src={arrow} alt=">" />
                </div>
                {
                  genderView ?
                  <div className={c.gender_select}>
                    <p onClick={() => setValue({...value, gender: 'M'})}>
                      М
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="2" viewBox="0 0 464 2" fill="none">
                      <path d="M0 1L464 1.00004" stroke="white" stroke-opacity="0.5" />
                    </svg>
                    <p onClick={() => setValue({...value, gender: 'Ж'})}>
                      Ж
                    </p>
                  </div> : null
                }
                
              </div>
              <div className={c.block_2}>
                <input 
                  type="text" 
                  ref={ref}
                  placeholder='Дата'
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={() => (ref.current.type = "date")}
                  onBlur={() => (ref.current.type = "date")}
                />
                <div className={c.gender} onClick={() => setTimeView(!timeView)}>
                  <p>Время</p>
                  <img src={arrow} alt=">" />
                </div>
                {
                  timeView ?
                  <ul className={c.time}>
                    {
                      timeList.map((item, id) => (
                        <li key={id} onClick={() => setValue({...value, time: item})}>
                          {item}
                        </li>
                      ))
                    }
                  </ul> : null
                }
              </div>
              <div className={c.block_3}>
                <input type="number" placeholder='Номер телефона' onChange={(e) => setValue({...value, number: e.target.value})}/>
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
