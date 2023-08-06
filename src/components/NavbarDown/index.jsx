import React from 'react'
import c from './NavbarDown.module.scss'
import { navList } from '../../utils'
import { Link } from 'react-router-dom'
import search from '../../images/search.svg'

const NavbarDown = () => {
  return (
    <div className={c.navbar}>
      <div className={c.container}>
        <ul>
          {
            navList.map(item => (
              <li>
                <Link to={item.route}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className={c.search}>
          <img src={search} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default NavbarDown
