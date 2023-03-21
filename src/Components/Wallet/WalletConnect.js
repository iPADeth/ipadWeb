import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { ethers } from 'ethers'
import './styles.css'

const WalletConnect = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [defaultAccount, setDefaultAccount] = useState(null)
  const [userBalance, setUserBalance] = useState(null)
  const [connButtonText, setConnButtonText] = useState('CONNECT WALLET')
  const [provider, setProvider] = useState(null)

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum))

      // connect to metamask
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          setConnButtonText('Wallet Connected')
          setDefaultAccount(result[0])
        })
        .catch((error) => {
          setErrorMessage(error.message)
        })
    } else if (!window.ethereum) {
      console.log('Need to install MetaMask')
      setErrorMessage('Please install MetaMask browser extension to interact')
    }
  }

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult))
      })
    }
  }, [defaultAccount])

  return (
    <div className=''>
      <Button
        className='mx-3 my-3'
        variant='dark'
        onClick={connectWalletHandler}
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          {connButtonText}
        </motion.div>
      </Button>

      <div className='accountDisplay'>
        <p>ADDRESS: {defaultAccount ? defaultAccount : '🌝'}</p>
      </div>
      <div className='balanceDisplay'>
        <p>BALANCE: {userBalance ? userBalance : '🚀'}</p>
      </div>
    </div>
  )
}

export default WalletConnect
