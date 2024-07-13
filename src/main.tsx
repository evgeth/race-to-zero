import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'

import { mainnet, arbitrum } from 'viem/chains'
import { reconnect } from '@wagmi/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// 1. Get a project ID at https://cloud.walletconnect.com
const projectId = 'eb050f572f79cc1a63fc0cb87ea3f8ef'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain.
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})
reconnect(config)

// 3. Create modal
const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
})