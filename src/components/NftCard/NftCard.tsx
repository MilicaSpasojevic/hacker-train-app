import React from "react";
import { Nft } from "../../utilities/interfaces";

import "./NftCard.scss";

interface NftCardProps {
  nft: Nft;
}

const NftCard: React.FC<any> = ({ toggleNft, id}) => {
  return (
    <div className="nft-card" onClick={()=> toggleNft(id)}>
      <img src="https://unq-test.s3.eu-central-1.amazonaws.com/p3.jpeg" alt="Name" />
      <h3>Monkey</h3>
    </div>
  );
};

export default NftCard;
