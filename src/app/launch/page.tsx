"use client";
import React from "react";
// import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import CreateTokenButton from "@/components/CreateTokenButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from "wagmi/chains";
const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

export default function Launch() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 w-full">
              {/* Top Navigation Menu */}
              <div className="bg-white shadow-md w-full">
                <nav className="max-w-6xl mx-auto p-4">
                  <ul className="flex justify-center space-x-6">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-pink-600 transition-colors"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-pink-600 transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-pink-600 transition-colors"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-pink-600 transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <ConnectButton />
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-grow p-8">
                <div className="flex items-center justify-center h-full">
                  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-xl">
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                      Token Transfer
                    </h1>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          From
                        </label>
                        <div className="flex justify-between space-x-4">
                          <div className="w-1/2">
                            <Select>
                              <option>Select Token</option>
                              {/* Add your token options here */}
                            </Select>
                          </div>
                          <div className="w-1/2">
                            <Select>
                              <option>Select Network</option>
                              {/* Add your network options here */}
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          B@B Tokens
                        </label>
                        <Input placeholder="Amount 0.0000" className="w-full" />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          To
                        </label>
                        <div className="flex justify-between">
                          <div className="w-1/2 mr-2">
                            <Select>
                              <option>Select Token</option>
                              {/* Add your token options here */}
                            </Select>
                          </div>
                          <div className="w-1/2">
                            <Select>
                              <option>Select Network</option>
                              {/* Add your network options here */}
                            </Select>
                          </div>
                        </div>
                        <label className="block text-sm font-medium text-gray-700 mt-4">
                          B@B Tokens:
                        </label>
                        <Input placeholder="Amount 0.0000" />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Gas on Destination
                        </label>
                        <Input placeholder="Gas Amount" />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Fees
                        </label>
                        <Input placeholder="Fees Amount" />
                      </div>

                      <CreateTokenButton className="w-full py-3 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
