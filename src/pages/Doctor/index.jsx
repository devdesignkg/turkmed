import React from 'react'
import c from './Doctor.module.scss'
import { useParams } from 'react-router-dom'
import { GetDoctors } from '../../helpers'

const DoctorMore = () => {
  const { id } = useParams()
  const { doctors } = GetDoctors()

  const item = doctors?.find(value => value.id === Number(id))
  return (
    <div className={c.container}>
      <div className={c.more}>
        <div className={c.info}>
          <div className={c.left}>
            <img 
              src={item?.image} 
              alt={item?.full_name}
            />
          </div>
          <div className={c.right}>
            <div className={c.title}>
              <h1>{item?.full_name}</h1>
              <h2>{item?.job}</h2>
              <p>{item?.description}</p>
            </div>
            <div className={c.appointment}>
              <button>Записаться на прием</button>
            </div>
          </div>
        </div>
        <div className={c.awards}>
          <h1>
            Награды
          </h1>
          <div className={c.awards_cards}>
            {
              item?.doctor_awards?.map((value, i) => <img key={i} src={value.image} alt='Награда' className={i % 2 ? c.second : ''} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorMore