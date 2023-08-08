import React from 'react'
import c from './Banner.module.scss'

const Banner = ({url, desc, title}) => {
  const containerStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center ',
  };
  return (
    <div className={c.banner} style={containerStyle}>
      <div className={c.container}>
        <div className={c.banner_title}>
          <p>{desc}</p>
          <h1>{title}</h1>
          <button>Наши специальности</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
