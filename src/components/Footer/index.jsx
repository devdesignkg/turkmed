import React from 'react'
import c from './Footer.module.scss'
import logo from '../../images/logo-white.svg'
import FooterContacts from './FooterContacts'
import FooterLinks from './FooterLinks'
import insta from '../../images/instagram.svg'
import youtube from '../../images/youtube.svg'
import whatsapp from '../../images/whatsapp.svg'

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.container}>
        <div className={c.footer_top}>
          <div className={c.footer_info}>
            <img src={logo} alt="logo" loading='lazy'/>
            <p>
              Leading the Way in Medical <br /> Execellence, Trusted Care.
            </p>
          </div>
          <FooterLinks/>
          <FooterContacts/>
          <ul className={c.links}>
            <li>
              <img src={insta} alt="insta" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
            <li>
              <img src={whatsapp} alt="whatsapp" />
            </li>
          </ul>
        </div>
        <div className={c.footer_bottom}>
          <div className={c.line}></div>
          <div className={c.bottom_flex}>
            <p>© 2023 TURKMED - гемодиализ</p>
            <ul>
              <li>
                <img src={insta} alt="insta" />
              </li>
              <li>
                <img src={youtube} alt="youtube" />
              </li>
              <li>
                <img src={whatsapp} alt="whatsapp" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
