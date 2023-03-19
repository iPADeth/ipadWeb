import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Screens

import HomeScreen from './HomeScreen'

import './index.css'
import './min.css'

// Components
import Footer from './Components/Footer'

import Header from './Components/Header'

function App() {
  useEffect(
    () => () => window.removeEventListener('scroll', () => handleScroll)
  )
  const [isSticky, setSticky] = useState(false)
  const stickyRef = useRef(null)
  const handleScroll = () => {
    if (!stickyRef.current) return
    if (stickyRef.current.getBoundingClientRect().y <= -580 || null) {
      console.log(stickyRef.current.getBoundingClientRect().y)

      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  window.addEventListener('scroll', handleScroll)
  return (
    <>
      <Header sticky={isSticky} />

      <main>
        <HomeScreen />
      </main>

      <Footer />
    </>
  )
}

export default App
