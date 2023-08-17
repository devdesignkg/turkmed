import React from 'react'
import {GetLicenses} from '../../helpers'
import c from './Licenses.module.scss'


const Licenses = () => {
  const {licenses} = GetLicenses()
  
  return (
    <div className={c.licenses}>
      {
        licenses?.map(item => (
          <div>
            <img src={item.image} alt="licenses" />
          </div>
        ))
      }
    </div>
  )
}

export default Licenses
