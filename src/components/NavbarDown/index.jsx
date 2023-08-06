import React from 'react'
import c from './NavbarDown.module.scss'
import { navList } from '../../utils'
import { Link } from 'react-router-dom'
import search from '../../images/search.svg'
import burger from '../../images/burger.svg'
import logo from '../../images/logo-white.svg'

const NavbarDown = () => {

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
          <img src={logo} alt="" />
        </div>
        <div className={c.right}>
          <div className={c.search}>
            <img src={search} alt="img" />
          </div>
          <div className={c.burger}>
            <img src={burger} alt="burger" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarDown
