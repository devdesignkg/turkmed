import React from 'react'
import c from './Title.module.scss'

const Title = ({title, desc}) => {
  return (
    <div className={c.title}>
      <p>{desc}</p>
      <h1>{title}</h1>
    </div>
  )
}

export default Title