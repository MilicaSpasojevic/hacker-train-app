import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import './Navbar.scss'

const Navbar:React.FC = () => {
  return (
    <div className='navbar'>
        <div className='navbar__wallet'>
        <WalletModalProvider>
        <WalletMultiButton/>
        </WalletModalProvider>
        </div>

    </div>
  )
}

export default Navbar