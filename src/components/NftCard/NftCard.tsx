import React, { useEffect, useState } from "react";
import "./NftCard.scss";

const NftCard: React.FC<any> = ({ toggleNft, selectedNfts, id,nftData}) => {
  const [cardInfo, setCardInfo] = useState<{
    nftUrl: string,
    nftName: string
  }>()


  useEffect(()=>{
    void loadNftData();
  }, [])

  const loadNftData = async () => {
    const dataMetadata = await fetch(nftData!.metadata.data.data.uri);
    const dataMetadataJson = await dataMetadata.json();
    setCardInfo({
      nftUrl: dataMetadataJson.image,
      nftName: dataMetadataJson.name
    })
  }

  return (
    <div className="nft-card" onClick={()=> {
    }}>
      <img src={cardInfo?.nftUrl} alt="Name" />
      <h3>{cardInfo?.nftName}</h3>
    </div>
  );
};

export default NftCard;
