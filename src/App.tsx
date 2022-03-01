import React, { useState } from 'react';
import './App.scss';
import {WalletWrapper} from './components/Wallet/WalletWrapper';
import Navbar from './components/Navbar/Navbar';
import NftCard from './components/NftCard/NftCard';

const nfts = [1,2,3,4,5,6]

function App() {

  const [selectedNfts, toggleNft] = useState([]);

  return (
    <WalletWrapper>
      <div className="App">
        <Navbar/>
        <div className="App_nft_card">
          {nfts.map((item, index) => {
            return <NftCard toggleNft={toggleNft} id={index}  />
          })}
        </div>
      </div>
    </WalletWrapper>

  );
}

export default App;
