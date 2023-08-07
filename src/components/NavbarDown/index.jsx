import React from 'react'
import c from './NavbarDown.module.scss'
import { navList } from '../../utils'
import {NavLink, useLocation } from 'react-router-dom'
import search from '../../images/search.svg'
import burger from '../../images/burger.svg'
import logo from '../../images/logo-white.svg'
import Sidebar from './Sidebar'

const NavbarDown = () => {
  const [sidebarActive, setSidebarActive] = React.useState(false)
  const path = useLocation().pathname
  
  React.useEffect(() => {
    setSidebarActive(false)
  }, [path])
  
  return (
     <>
      <div className={c.navbar}>
        <div className={c.container}>
          <ul>
            {
              navList.map(item => (
                <li key={item.id}>
                  <NavLink 
                    to={item.route} 
                    className={({ isActive }) => (isActive ? c.active : 'inactive')}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          <div className={c.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={c.right}>
            <div className={c.search}>
              <img src={search} alt="img" />
            </div>
            <div className={c.burger} onClick={() => setSidebarActive(!sidebarActive)}>
              <img src={burger} alt="burger" />
            </div>
          </div>
        </div>
      </div>
      <Sidebar active={sidebarActive}/>
    </>
  )
}

export default NavbarDown
