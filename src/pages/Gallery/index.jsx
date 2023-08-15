import React from 'react'
import c from './Gallery.module.scss'
import { GetGallery } from '../../helpers'

const Gallery = () => {
  const {gallery} = GetGallery()
  return (
    <div className={c.gallery}>
      <div className={c.title}>
        <h1>
          Галерея
        </h1>
      </div>
      <div className={c.photos}>
        {
          gallery?.map((item, id) => (
            <div key={id} >
              <img src={item.image} alt="img" loading='lazy'/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery
