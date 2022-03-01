import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  getCoin98Wallet,
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolflareWebWallet,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React from "react";
import { useMemo } from "react";

require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletWrapper: React.FC = (props) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWebWallet({ network }),
      getSolflareWallet(),
      getLedgerWallet(),
      getSlopeWallet(),
      getCoin98Wallet(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect
        onError={(e) => console.log(e)}
      >
        {props.children}
      </WalletProvider>
    </ConnectionProvider>
  );
};
