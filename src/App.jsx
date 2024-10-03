import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import { useState } from 'react'
import './App.css'
import RequestAirdrop from "./RequestAirdrop"
import { ShowSolBalance } from './ShowSolBalance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';
function App() {

  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{ width: "90vw", display: "flex", justifyContent: "center", gap: '199px' }}>
            <WalletMultiButton />
            {/* <RequestAirdrop /> */}
            {/* <ShowSolBalance/> */}
            {/* <SendTokens/> */}
            <SignMessage/>
            <WalletDisconnectButton />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>


  )
}

export default App
