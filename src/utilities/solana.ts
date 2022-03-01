import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, TokenAccountsFilter } from "@solana/web3.js";
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';

const NETWORK_URL='https://api.devnet.solana.com'

const TOKEN_METADATA_PREFIX = 'metadata';
const METAPLEX_PROGRAM_ID = new PublicKey(
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  );

export function getConnection(): Connection {
    return new Connection(NETWORK_URL, 'confirmed');
  }

export const getNftsForUser = async (wallet: AnchorWallet) => {
    const connection = getConnection();
  const filter: TokenAccountsFilter = {
    programId: TOKEN_PROGRAM_ID,
  };
  const ownerTokenAccounts = (
    await connection.getParsedTokenAccountsByOwner(wallet.publicKey, filter)
  ).value
    .map(({ pubkey, account }) => {
      return {
        pubkey,
        mint: new PublicKey(account.data.parsed.info.mint),
        decimals: account.data.parsed.info.tokenAmount.decimals,
        amount: account.data.parsed.info.tokenAmount.uiAmount,
      };
    })
    .filter((tokenAccount: any) => {
      return tokenAccount.amount === 1 && tokenAccount.decimals === 0;
    });

    let metadata = [];
    for (const ota of ownerTokenAccounts) {
      const mintMetaDataAccount = await getMintMetadataAccount(ota.mint);
      const mintMetadata: any= await getMintMetadata(
        mintMetaDataAccount,
      );
      console.log('Mint meta data', mintMetadata);
      console.log('Mint meta data account', mintMetaDataAccount.toBase58())
      
      metadata.push({
        metadata: mintMetadata,
        mintTokenAccount: ota,
        mintMetaDataAccount: mintMetaDataAccount,
      });
      }

    return metadata;

}


export async function getMintMetadataAccount(
    pubkey: PublicKey,
  ): Promise<PublicKey> {
    const seeds = [
      Buffer.from(TOKEN_METADATA_PREFIX),
      METAPLEX_PROGRAM_ID.toBuffer(),
      pubkey.toBuffer(),
    ];
  
    const [mintMetadataAccount] = await PublicKey.findProgramAddress(
      seeds,
      METAPLEX_PROGRAM_ID,
    );
    return mintMetadataAccount;
  }
  
  export async function getMintMetadata(
    mintMetadataAccount: PublicKey,
  ): Promise<any | void> {
    const connection = getConnection();
  
    return await Metadata.load(connection, mintMetadataAccount).catch((err) => {
      console.log(err);
    });
  }
  