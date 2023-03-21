import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from 'react-bootstrap'

import { ReactComponent as CloseMenu } from './close.svg'
import { ReactComponent as MenuIcon } from './menu.svg'
import { ReactComponent as Logo } from '../../HomeScreen/assets/logo.svg'

import WalletCanvas from '../Wallet/WalletCanvas'

import './styles.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 300) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = ['navbar']
  if (scrolled) {
    x.push('scrolled')
  }
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <header className={x.join(' ')}>
      <div className='logo '>
        <a href='/'>
          <Logo className='logo' alt='Logo' title='Logo' />
        </a>
      </div>

      <nav className='navigation'>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className='option mobile-option ' onClick={closeMobileMenu}>
            <a href='#about' className=''>
              ABOUT
            </a>
          </li>
          <li className='option mobile-option' onClick={closeMobileMenu}>
            <a href='#ecosystem' className=''>
              ECOSYSTEM
            </a>
          </li>
          <li className='option mobile-option' onClick={closeMobileMenu}>
            <a href='#roadmap' className=''>
              ROADMAP
            </a>
          </li>
          <li className='option mobile-option' onClick={closeMobileMenu}>
            <a href='#faq' className=''>
              FAQ
            </a>
          </li>
          <li className='option mobile-option' onClick={closeMobileMenu}>
            <a href='#'>
              <Button className='mx-1' variant='dark'>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <h6 className='navBTN'>BUY NOW </h6>
                </motion.div>
              </Button>
            </a>
          </li>
        </ul>
      </nav>
      <ul className='signin-up'>
        <li className='sign-in ' onClick={closeMobileMenu}>
          <a href='#about'>ABOUT</a>
        </li>
        <li className='sign-in' onClick={closeMobileMenu}>
          <a href='#ecosystem' className='txtBrd'>
            ECOSYSTEM
          </a>
        </li>
        <li className='sign-in' onClick={closeMobileMenu}>
          <a href='#roadmap' className='txtBrd'>
            ROADMAP
          </a>
        </li>
        <li className='sign-in' onClick={closeMobileMenu}>
          <a href='#faq' className='txtBrd'>
            FAQ
          </a>
        </li>
        <li className='sign-in ' onClick={closeMobileMenu}>
          <a href='#'>
            <Button className='mx-1' variant='dark'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <h6 className='navBTN'>BUY NOW </h6>
              </motion.div>
            </Button>
          </a>
        </li>
        <li className='sign-in ' onClick={closeMobileMenu}>
          <WalletCanvas />
        </li>
      </ul>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? <div className='menu-icon' /> : <div className='menu-icon' />}
      </div>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? (
          <CloseMenu className='menu-icon' />
        ) : (
          <MenuIcon className='menu-icon' />
        )}
      </div>
    </header>
  )
}

export default Header
