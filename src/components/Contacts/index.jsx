import React from 'react'
import c from './Contacts.module.scss'
import { contactsInfo } from '../../utils'
import ContactsCard from './ContactsCard'
import Map from './Map'
import { useLocation } from 'react-router-dom'
import Title from '../Title'


const Contacts = () => {
  const location = useLocation().pathname

  return (
    <div className={c.contacts}>
      {
        location === '/contacts' ? 
        <div className={c.title}>
          <p>связаться с нами</p>
          <h1>Контакты</h1>
        </div> : <Title desc={'связаться с нами'} title={'Контакты'}/>
      }
      {
        location === '/contacts' && <Map/>
      }
      <div className={c.contacts_block}>
        <div className={c.contacts_card}>
          <div className={c.contacts_img}>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
              <path d="M24.1459 33.1262C24.7274 32.7905 25.1502 32.2347 25.3211 31.5811C25.492 30.9275 25.3972 30.2296 25.0574 29.6411L23.7761 27.4219C23.4363 26.8333 22.8794 26.4022 22.2279 26.2235C21.5764 26.0447 20.8837 26.1329 20.3021 26.4687C15.9167 29.0006 13.3542 24.5622 12.0729 22.343C10.7917 20.1238 8.22919 15.6854 12.6146 13.1535C13.1962 12.8178 13.6189 12.2619 13.7899 11.6084C13.9608 10.9548 13.8659 10.2569 13.5261 9.66835L12.2449 7.44916C11.905 6.8606 11.3481 6.42952 10.6966 6.25075C10.0451 6.07199 9.35243 6.16019 8.77089 6.49594C3.28908 9.66086 1.28125 13.779 7.6875 24.875C14.0938 35.9709 18.6641 36.2911 24.1459 33.1262Z" stroke="#007E85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M35.8156 23.9621C36.9804 19.4989 36.3314 14.7346 34.0113 10.716C31.6911 6.69743 27.8896 3.75324 23.442 2.53032M29.1022 22.12C29.4492 20.7945 29.5325 19.4104 29.3472 18.0469C29.162 16.6835 28.712 15.3672 28.0227 14.1735C27.3335 12.9798 26.4187 11.9319 25.3305 11.0897C24.2423 10.2476 23.002 9.62766 21.6806 9.26539M22.4248 20.2645C22.6577 19.3714 22.5278 18.4181 22.0635 17.6141C21.5993 16.81 20.8387 16.2208 19.9488 15.9759" stroke="#007E85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p>телефон</p>
          <a href="tel:996999164000"> +996 (999) 164-000</a>
          <a href="tel:996227164000"> +996 (227) 164-000</a>
        </div>
        {
          contactsInfo.map(item => (
            <ContactsCard 
              key={item.id}
              img={item.img} 
              text={item.text} 
              span1={item.span1} 
              span2={item.span2}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Contacts
