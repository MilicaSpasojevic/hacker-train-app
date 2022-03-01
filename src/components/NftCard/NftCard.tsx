import React from "react";
import { Nft } from "../../utilities/interfaces";

import "./NftCard.scss";

interface NftCardProps {
  nft: Nft;
}

const NftCard: React.FC<any> = () => {
  return (
    <div className="nft-card">
      <img src="https://unq-test.s3.eu-central-1.amazonaws.com/p3.jpeg" alt="Name" />
      <h3>Monkey</h3>
    </div>
  );
};

export default NftCard;
