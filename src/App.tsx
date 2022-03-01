import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import NftCard from './components/NftCard/NftCard';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { getNftsForUser } from './utilities/solana';


const App: React.FC = () => {

  const [selectedNfts, toggleNft] = useState([]);
  const wallet = useAnchorWallet();
  const [usersNfts, setUsersNfts] = useState<any>([]);

  useEffect(()=>{
    if(wallet) {
      void getNfts();
    }
  }, [wallet])

  const getNfts = async () => {
    const metadataArray =  await getNftsForUser(wallet!);
    setUsersNfts(metadataArray);
  }


  return (
      <div className="App">
        <Navbar/>
        <div className="App_nft_card">
          {usersNfts.map((item: any, index: any) => {
            return <NftCard toggleNft={toggleNft} selectedNfts={selectedNfts} id={index} nftData={usersNfts[index]}  />
          })}
        </div>
      </div>

  );
}

export default App;
