
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Every Beetle Points Holder Deserves Cult',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet],
});
