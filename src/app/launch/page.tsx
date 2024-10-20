// "use client";
// import React from "react";
// // import { Button } from "@/components/ui/button";
// import { Select } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import CreateTokenButton from "@/components/CreateTokenButton";
// import { Button } from "@/components/ui/button";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   sepolia,
// } from "wagmi/chains";
// const config = getDefaultConfig({
//   appName: "My RainbowKit App",
//   projectId: "YOUR_PROJECT_ID",
//   chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });
// const queryClient = new QueryClient();

// export default function Launch() {
//   return (
//     <>
//       <WagmiProvider config={config}>
//         <QueryClientProvider client={queryClient}>
//           <RainbowKitProvider>
//             <div className="flex flex-col min-h-screen bg-black text-white">
//               {/* Header */}
//               <header className="bg-black p-4">
//                 <nav className="max-w-6xl mx-auto flex justify-between items-center">
//                   <h1 className="text-2xl font-bold">JustLaunch</h1>
//                   <ConnectButton />
//                 </nav>
//               </header>

//               {/* Main Content */}
//               <main className="flex-grow container mx-auto px-4 py-8">
//                 <div className="text-center mb-12">
//                   <h2 className="text-4xl font-bold mb-4">
//                     The Ultimate On-Chain Trading Experience
//                   </h2>
//                   <p className="text-xl mb-8">
//                     Experience seamless and secure transactions directly on the
//                     blockchain with JustLaunch Trading Tools.
//                   </p>
//                   <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full text-lg">
//                     Launch Telegram Bot
//                   </Button>
//                 </div>

//                 {/* Statistics */}
//                 <div className="grid grid-cols-3 gap-8 mb-12">
//                   {["Trade Volume", "Total Users", "Total Trades"].map(
//                     (stat, index) => (
//                       <div
//                         key={index}
//                         className="bg-white bg-opacity-10 rounded-lg p-6 text-center"
//                       >
//                         <h3 className="text-2xl font-bold mb-2">{stat}</h3>
//                         <p className="text-4xl font-bold">0</p>
//                       </div>
//                     )
//                   )}
//                 </div>

//                 {/* Features */}
//                 <div className="mb-12">
//                   <h3 className="text-2xl font-bold mb-6 text-center">
//                     Why choose JustLaunch?
//                   </h3>
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                     {[
//                       "Fast and Secure Transactions",
//                       "User-Friendly Interface",
//                       "Advanced Trading Tools",
//                       "Low Fees",
//                     ].map((feature, index) => (
//                       <div
//                         key={index}
//                         className="bg-white bg-opacity-10 rounded-lg p-4 text-center"
//                       >
//                         <p className="font-semibold">{feature}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Referral Program */}
//                 <div className="bg-black bg-opacity-10 rounded-lg p-8 mb-12">
//                   <h3 className="text-2xl font-bold mb-4">
//                     Unlock Passive Earnings With our Top-Tier Referral Program
//                   </h3>
//                   <ul className="list-disc list-inside mb-6">
//                     <li>Save 10% on JustLaunch Fees</li>
//                     <li>Receive up to 35% of the fees from referrals</li>
//                     <li>
//                       Accumulate 5 layers of referrals. Earn from your
//                       referral's referrals!
//                     </li>
//                   </ul>
//                   <div className="flex space-x-4">
//                     <Button className="bg-pink-600 hover:bg-pink-700">
//                       Learn more
//                     </Button>
//                     <Button className="bg-indigo-600 hover:bg-indigo-700">
//                       Claim your referral link
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Testimonials */}
//                 <div className="mb-12">
//                   <h3 className="text-2xl font-bold mb-6 text-center">
//                     What people say about JustLaunch
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {[
//                       {
//                         text: "JustLaunch keeps growing every day. It's the fastest and most reliable trading bot I've ever used!",
//                         author: "@Trader123",
//                       },
//                       {
//                         text: "Switching to JustLaunch was a game-changer for me. If you trade on-chain, you need this tool!",
//                         author: "@CryptoEnthusiast",
//                       },
//                     ].map((testimonial, index) => (
//                       <div
//                         key={index}
//                         className="bg-white bg-opacity-10 rounded-lg p-6"
//                       >
//                         <p className="mb-4">"{testimonial.text}"</p>
//                         <p className="font-bold">- {testimonial.author}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </main>

//               {/* Footer */}
//               <footer className="bg-black text-white py-8">
//                 <div className="container mx-auto px-4">
//                   <div className="flex justify-between items-center">
//                     <p>&copy; 2024 JustLaunch Trading. All rights reserved.</p>
//                     <div className="space-x-4">
//                       {["Twitter", "Discord", "Telegram", "YouTube"].map(
//                         (social, index) => (
//                           <a
//                             key={index}
//                             href="#"
//                             className="hover:text-pink-400"
//                           >
//                             {social}
//                           </a>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </footer>
//             </div>
//           </RainbowKitProvider>
//         </QueryClientProvider>
//       </WagmiProvider>
//     </>
//   );
// }
import Image from "next/image";
import Link from "next/link";

import unicornImage from "@/app/assets/unicorn.jpeg";

export default function Home() {
  return (
    <main className="jsx-333846384 __variable_3a0388 __variable_a40e88 font-sans bg-black">
      <nav className="sticky lg:-top-4 lg:pt-8 pt-4 top-0 pb-4 px-5 z-50 lg:h-[84px] h-[64px] bg-[#0A0D13] lg:bg-opacity-70 lg:backdrop-blur-xl">
        <div className="flex justify-between items-center p-0 w-full mx-auto max-w-[1216px]">
          <div className="flex lg:gap-6 gap-3">
            <div className="lg:hidden flex">
              <button className="inline-flex items-center justify-center whitespace-nowrap label-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 ring-faded-100 disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 text-white rounded-md h-8 w-8 -ml-2 -mr-1 outline-none hover:backdrop-brightness-100 focus-visible:backdrop-brightness-100">
                {/* Menu icon */}
              </button>
            </div>
            <a href="/"></a>
            <ul className="items-center gap-6 lg:flex hidden">
              <li>
                <a
                  href="https://t.me/solana_trojanbot"
                  className="text-sm font-medium leading-5 text-white" // Changed text color to white
                  target="_blank"
                >
                  Telegram Bot
                </a>
              </li>
              <li>
                <a
                  href="https://docs.uniswap.org/contracts/v4/overview"
                  className="text-sm font-medium leading-5 text-white" // Changed text color to white
                  target="_blank"
                >
                  Learn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap label-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 ring-faded-100 disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 text-white grey-button-bg border border-white/10 hover:backdrop-brightness-150 focus-visible:backdrop-brightness-150 h-8 rounded-md px-3 text-sm leading-5"
              href="/links"
            >
              Links
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                className="w-4 h-4 ml-2 text-white/60"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8.417 1.75h5.833v5.833h-1.5V4.311L7.333 9.727l-1.06-1.06 5.416-5.417H8.417zM1.75 3.083h5.167v1.5H3.25v8.167h8.167V8.583h1.5v5.667H1.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <div className="flex flex-col">
        <section className="flex max-w-[1216px] w-full mx-auto overflow-hidden">
          <div className="w-full max-w-[936px] mx-auto relative pt-[60px] pb-8 md:py-6 px-5 display flex flex-col items-start justify-center md:min-h-[550px]">
            <h1 className="font-serif md:text-5xl text-3xl text-[28px] uppercase text-white">
              <span className="hidden md:inline">
                Trading on Unichain. <br /> Made Easier. <br />
              </span>
              <span className="md:hidden">
                The Ultimate On-Chain Trading Experience
              </span>
            </h1>
            <Image
              src={unicornImage}
              alt="Unicorn"
              width={300} // Decreased width to 400
              height={100} // Decreased height to 240
              className="mt-6 w-full max-w-[400px] ml-auto mr-[50px]" // Updated max-width to match the new width
            />
            <p className="text-sm mt-2 md:mt-3 md:max-w-[480px] text-white">
              Experience seamless and secure transactions directly on the
              blockchain with Uniswap. Our decentralized, user-centric, and
              precise solutions give you the ultimate edge in trading.
            </p>
            <a
              href="https://t.me/solana_trojanbot"
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap label-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 ring-faded-100 disabled:pointer-events-none disabled:opacity-50 transition-all duration-200 hover:opacity-90 focus-visible:opacity-90 h-10 px-4 py-2 text-sm leading-5 rounded-lg md:mt-6 mt-5 md:w-auto w-full text-[#8BCCFF] bg-[#121E2A] border border-[#1B3043]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
                className="w-4 h-4 mr-2 text-[#8BCCFF]"
              >
                <path
                  fill="currentColor"
                  d="M1.054 7.12q6.175-2.681 8.233-3.536c3.923-1.625 4.737-1.908 5.269-1.917.117-.002.377.027.547.164.141.115.18.271.2.38.018.11.043.36.023.555-.212 2.225-1.132 7.626-1.6 10.118-.196 1.055-.587 1.409-.964 1.443-.82.075-1.443-.54-2.237-1.059-1.242-.812-1.943-1.317-3.15-2.11-1.395-.915-.49-1.419.304-2.241.208-.215 3.821-3.49 3.89-3.788.008-.037.017-.176-.067-.249-.081-.073-.203-.048-.29-.028-.127.028-2.11 1.336-5.957 3.924q-.844.577-1.532.564c-.503-.011-1.473-.285-2.195-.518-.882-.287-1.586-.438-1.524-.925q.047-.38 1.05-.777"
                ></path>
              </svg>
              Launch Telegram Bot
            </a>
            <video
              autoPlay
              loop
              playsInline
              preload="none"
              className="absolute -z-10 max-w-[1700px] w-[1700px] -top-[70px] -right-[600px] mix-blend-screen md:block hidden"
            >
              <source src="/horse.mp4" type="video/mp4" />
            </video>
            <div className="absolute h-[100px] bottom-0 right-0 left-0 terminal-bg-fade z-10 md:block hidden"></div>
          </div>
        </section>

        <section className="w-full max-w-[936px] mx-auto mt-[64px] pb-10 px-5">
          <p className="uppercase text-xs tracking-[5px] text-white">
            Statistics
          </p>
          <h2 className="mt-3 text-white/80 text-xl font-medium">
            Unparalleled Performance. Unrivalled Results. Experience the Uniswap
            Difference.
          </h2>
          <div className="flex md:gap-6 mt-6 flex-col md:flex-row gap-4">
            {/* Trade Volume */}
            <div className="rounded-t-[10px] rounded-b-[12px] border border-[#272A2F] flex-1 bg-[#1F2127] p-1 z-10">
              <div className="pt-2 pb-[10px] text-center">
                <p className="text-sm text-white/80 font-medium text-center">
                  Trade Volume
                </p>
              </div>
              <div className="pt-6 pb-5 rounded-[10px] bg-[#101319]">
                <p className="font-mono text-white/80 text-center text-xl">
                  <span>$7,688,838,051</span>
                </p>
              </div>
            </div>
            {/* Total Users */}
            <div className="rounded-t-[10px] rounded-b-[12px] border border-[#272A2F] flex-1 bg-[#1F2127] p-1 z-10">
              <div className="pt-2 pb-[10px] text-center">
                <p className="text-sm text-white/80 font-medium text-center">
                  Total Users
                </p>
              </div>
              <div className="pt-6 pb-5 rounded-[10px] bg-[#101319]">
                <p className="font-mono text-white/80 text-center text-xl">
                  <span>391,977</span>
                </p>
              </div>
            </div>
            {/* Total Trades */}
            <div className="rounded-t-[10px] rounded-b-[12px] border border-[#272A2F] flex-1 bg-[#1F2127] p-1 z-10">
              <div className="pt-2 pb-[10px] text-center">
                <p className="text-sm text-white/80 font-medium text-center">
                  Total Trades
                </p>
              </div>
              <div className="pt-6 pb-5 rounded-[10px] bg-[#101319]">
                <p className="font-mono text-white/80 text-center text-xl">
                  <span>60,320,714</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[936px] mx-auto lg:py-[130px] py-[60px] px-5 faded-scroll-text">
          <p className="text-5xl text-white">
            <span>Uniswap is your ultimate tool for trading on-chain.</span>
            <span>
              &nbsp;Trade like a pro and gain your edge over other traders.
            </span>
          </p>
        </section>

        <section className="w-full max-w-[936px] mx-auto mt-[64px] pb-10 px-5">
          <p className="uppercase text-xs tracking-[5px] text-white">
            Products
          </p>
          <h2 className="mt-3 text-xl font-medium">
            Begin trading in under 30 seconds.
          </h2>
          <p className="mt-[10px] text-sm text-white/80 max-w-[550px]">
            Access our Telegram bot and start trading with the most powerful
            tool on Solana. Stay tuned for our game-changing new product
            releases.
          </p>
          <div className="md:mt-8 mt-6 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
            {/* Telegram Bot */}
            <a
              className="bg-[#1A1C20] bg-no-repeat bg-cover rounded-xl flex flex-col overflow-hidden p-[6px] pb-0 md:flex-none flex-1 min-h-[385px] relative"
              href="https://t.me/solana_trojanbot"
              target="_blank"
              style={{ height: "385px" }}
            >
              {/* Content for Telegram Bot card */}
            </a>
            {/* Coming Soon cards */}
            <div className="md:translate-y-[64px]">
              <div className="bg-[#1A1C20] bg-no-repeat bg-cover rounded-xl flex flex-col overflow-hidden p-[6px] flex-none h-[385px]">
                {/* Content for Coming Soon card */}
              </div>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </section>

        {/* FAQ section */}
        <section className="w-full max-w-[936px] mx-auto mt-[64px] pb-10 px-5">
          <div data-orientation="vertical" className="border-t border-white/10">
            {/* FAQ items */}
            {/* Example FAQ item */}
            <div
              data-state="closed"
              data-orientation="vertical"
              className="border-b border-white/10"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                className="flex"
              >
                <button
                  type="button"
                  aria-controls="radix-:r6:"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-:r5:"
                  className="flex flex-1 items-center text-left justify-between py-6 text-white/80 font-medium transition-all [&[data-state=open]>div]:rotate-45 [&[data-state=open]]:text-white"
                  data-radix-collection-item=""
                >
                  Why are there multiple Uniswap Telegram bots?
                  <div className="flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6.75V12M12 12V17.25M12 12H6.75M12 12H17.25"
                        stroke="white"
                        strokeOpacity="0.4"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                  </div>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-:r6:"
                hidden=""
                role="region"
                aria-labelledby="radix-:r5:"
                data-orientation="vertical"
                className="overflow-hidden text-sm text-white/80 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                style={{
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                }}
              ></div>
            </div>
            {/* Add more FAQ items */}
          </div>
        </section>
      </div>

      <footer>
        <div className="max-w-[1256px] w-full mx-auto px-5 lg:py-[80px] py-8 flex gap-6 lg:justify-between lg:flex-row flex-col-reverse">
          <div className="flex flex-col justify-between gap-6 ">
            {/* Footer content */}
          </div>
          <div className="flex gap-6 lg:max-w-[500px] lg:flex-1 lg:justify-between lg:flex-row flex-col items-start">
            {/* Footer links */}
          </div>
          {/* Mobile footer content */}
        </div>
      </footer>
    </main>
  );
}
