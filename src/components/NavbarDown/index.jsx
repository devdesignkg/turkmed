import React from 'react'
import c from './NavbarDown.module.scss'
import { navList } from '../../utils'
import {NavLink, useLocation, useNavigate } from 'react-router-dom'
import search from '../../images/search.svg'
import burger from '../../images/burger.svg'
import logo from '../../images/logo-white.svg'
import Sidebar from './Sidebar'
import { GetDoctors } from '../../helpers'
import SearchResult from '../SearchResult'

const NavbarDown = () => {
  const [sidebarActive, setSidebarActive] = React.useState(false)
  const [activeInp, setActiveInp] = React.useState(false)
  const [inputVal, setInputVal] = React.useState('')
  const [searchRes, setSearchRes] = React.useState(null)
  const path = useLocation().pathname
  const navigate = useNavigate()
  const {doctors} = GetDoctors()

  React.useEffect(() => {
    setSidebarActive(false)
    setActiveInp(false)
    setSearchRes(null)
  }, [path])

  React.useEffect(() => {
    setSearchRes(null)
  }, [activeInp])


  const searchingOnType = (e) => {
    console.log(e);
    const result = doctors?.filter(item => item.full_name.toLowerCase().includes(e.toLowerCase()))
    e.length >= 1 ? setSearchRes(result) : setSearchRes(null)
  }

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
            <img src={logo} alt="logo" onClick={() => navigate('/')} loading='lazy'/>
          </div>
          <div className={c.right}>
            <div className={c.search}>
              {
                activeInp && 
                <input type="text" placeholder='Поиск...' onInput={(e) => searchingOnType(e.target.value)}/>
              }
              <img src={search} alt="img" onClick={() => setActiveInp(!activeInp)}/>
            </div>
            {
              searchRes?.length > 0 ? <SearchResult data={searchRes}/> : null
            }
            <div className={c.burger} onClick={() => setSidebarActive(!sidebarActive)}>
              <img src={burger} alt="burger" />
            </div>
          </div>
        </div>
      </div>
      <Sidebar active={sidebarActive} setActive={setSidebarActive} />
    </>
  )
}

export default NavbarDown
