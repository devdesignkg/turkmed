import React from 'react'
import c from './Main.module.scss'
import { Components } from '../../components'

const Main = () => {
  return (
    <div className={c.main}>
      <Components.NavbarTop/>
      <Components.NavbarDown/>
      <Components.Banner/>
      <Components.WelcomeText/>
      <Components.Specialties/>
      <Components.Doctors/>
      <Components.News/>
      <Components.Contacts/>
    </div>
  )
}

export default Main
