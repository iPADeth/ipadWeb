import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { motion } from 'framer-motion'

import './styles.css'
import WalletConnect from '../Wallet/WalletConnect'

const WalletCanvas = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button className='mx-1' variant='dark' onClick={handleShow}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          WALLET
        </motion.div>
      </Button>

      <Offcanvas className='canBG' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title>CONNECT YOUR METAMASK</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <WalletConnect />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default WalletCanvas
