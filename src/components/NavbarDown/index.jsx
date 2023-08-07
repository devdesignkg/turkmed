import React from 'react'
import c from './NavbarDown.module.scss'
import { navList } from '../../utils'
import { Link, useNavigate } from 'react-router-dom'
import search from '../../images/search.svg'
import burger from '../../images/burger.svg'
import logo from '../../images/logo-white.svg'
import Sidebar from './Sidebar'

const NavbarDown = () => {
  const navigate = useNavigate()
  const [ sidebarActive, setSidebarActive ] = React.useState(false)
  
  return (
    <div className={c.navbar}>
      <div className={c.container}>
        <ul>
          {
            navList.map(item => (
              <li key={item.id}>
                <Link to={item.route}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className={c.logo}>
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </div>
        <div className={c.right}>
 
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
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
    </div>
  )
}

export default NavbarDown
