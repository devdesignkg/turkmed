import React from 'react'
import c from './Title.module.scss'
import { useLocation } from 'react-router-dom'

const Title = ({title, desc}) => {
  const location = useLocation().pathname
  console.log(location);
  return (
    <div className={c.title}>
      <p>{desc}</p>
      <h1>{title}</h1>
    </div>
  )
}

export default Title