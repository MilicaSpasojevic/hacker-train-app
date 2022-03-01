import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { WalletWrapper } from './components/Wallet/WalletWrapper';
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import Navbar from './components/Navbar/Navbar';
import NftCard from './components/NftCard/NftCard';

function App() {
  return (
    <WalletWrapper>
      <div className="App">
        <Navbar/>
        <NftCard/>
      </div>
    </WalletWrapper>

  );
}

export default App;
