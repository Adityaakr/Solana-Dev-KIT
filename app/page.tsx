import Card from "./component/Card";

export default function Home() {
  return (
    <>
      <div className="mt-18 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent 
      text-5xl font-blackflex flex-col items-center justify-between font-sans text-center p-16">
        Start Building Your Next Dapp on Solana

        <p className="font-bold text-center mt-5 italic">Today!!!</p>
      </div>
      <div className=" bg-white rounded-lg flex flex-col items-center justify-center md:flex-row">
        <Card
          first="Explore Solana Docs"
          second="Solana is a blockchain built for mass adoption. It's a high performance network that is utilized for a range of use cases, including finance, NFTs, payments, and gaming. Solana operates as a single global state machine, and is open, interoperable and decentralized. With lightning-fast transaction speeds and low fees."
          third="Learn more"
          data="https://solana.com/docs"
        />
        <Card
          first="Getting Started with Solana Development"
          second="Welcome to the Solana developer docs! This page has everything you need to know to get started with Solana development, 
          including basic requirements, how Solana development works, and the tools you'll need to get started."
          third="Learn More"
          data="https://solana.com/docs/intro/dev"
        />
        <Card
          first="Solana Ecosystem"
          second="
          The Solana ecosystem is a dynamic and rapidly growing platform, home to some of the hottest projects in the blockchain space. Known for its high performance, Solana offers developers powerful tools and infrastructure to build scalable and efficient decentralized applications (dApps)."
          third="Learn More"
          data="https://solana.com/ecosystem"
        />
      </div>
    </>
  );
}
