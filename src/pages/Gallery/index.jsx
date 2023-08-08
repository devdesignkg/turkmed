import React from 'react'
import c from './Gallery.module.scss'
import photo from '../../images/gallery-2.png'

const Gallery = () => {
  return (
    <div className={c.gallery}>
      <div className={c.title}>
        <h1>
          Галерея
        </h1>
      </div>
      <div className={c.photos}>
        {
          Array(6).fill('_').map((_, id) => (
            <div key={id} >
              <img src={photo} alt="img" loading='lazy'/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Gallery
