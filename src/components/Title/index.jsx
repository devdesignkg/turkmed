import React from 'react'
import c from './Title.module.scss'

const Title = ({sub, title}) => {
  return (
    <div>
      <div className={c.title}>
        <p>{sub}</p>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Title
