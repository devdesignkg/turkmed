import React from 'react'
import c from './Card.module.scss'
import { Link } from 'react-router-dom'

const DoctorsCard = ({item}) => {
  return (
    <div className={c.card}>
      <div className={c.image}>
        <img 
          src={item.image} 
          alt={item.full_name}
        />
      </div>
      <div className={c.info}>
        <p>{item.full_name}</p>
        <h2>{item.job}</h2>
        <div className={c.socials}>
          <li>
            <Link to={'/'}>
              <img 
                src="/icons/instagram.svg"
                alt="instagram"
              />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <img 
                src="/icons/youtube.svg"
                alt="youtube"
              />
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <img 
                src="/icons/whatsapp.svg"
                alt="whatsapp"
              />
            </Link>
          </li>
        </div>
      </div>
      <button>
        Посмотреть
      </button>
    </div>
  )
}

export default DoctorsCard