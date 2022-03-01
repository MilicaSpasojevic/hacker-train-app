import React from 'react';
import './App.scss';
import { WalletWrapper } from './components/Wallet/WalletWrapper';
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
