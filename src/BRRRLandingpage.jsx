import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Inter font (optional if using CDN or Tailwind font plugin)
import "@fontsource/inter/400.css";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "tokenomics", label: "Tokenomics" },
  { id: "howtobuy", label: "How to Buy" },
];

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-[#C4FF61] text-5xl font-bold z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      BRRR!
    </motion.div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <motion.div
          className="text-2xl font-bold cursor-pointer text-[#C4FF61]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BRRR!
        </motion.div>

        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>

        <div className="hidden md:flex gap-6">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-white hover:text-[#C4FF61] transition"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-black text-white">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-left text-white hover:text-[#C4FF61] transition"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section
    className="h-screen flex flex-col justify-center items-center bg-black text-white px-4 text-center"
    id="hero"
  >
    <motion.h1
      className="text-6xl md:text-7xl font-bold mb-6 text-[#C4FF61]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to $BRRR
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Hold. Earn. BRRRRR in your wallet.
    </motion.p>
    <motion.p
      className="text-md md:text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      CA: 0x0000000000000000000000000000000000000000
    </motion.p>
  </section>
);

const Overview = () => (
  <section id="overview" className="py-20 px-6 bg-[#0c0c0c] text-white">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-[#C4FF61]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Overview
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        $BRRR is a meme token that pays real yield in $SOL. When you hold $BRRR, you earn a share of all swap fees collected from every transaction. It's simple: hold, earn, and watch your SOL stack up.
      </motion.p>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-20 px-6 bg-black text-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#C4FF61]">Features</h2>
      <ul className="space-y-4 text-lg">
        <li>Earn passive $SOL from every transaction</li>
        <li>Auto-distributed rewards to holders</li>
        <li>Community-driven project</li>
      </ul>
    </div>
  </section>
);

const Tokenomics = () => (
  <section id="tokenomics" className="py-20 px-6 bg-[#0c0c0c] text-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#C4FF61]">Tokenomics</h2>
      <ul className="space-y-4 text-lg">
        <li>Total Supply: 1,000,000,000 $BRRR</li>
        <li>50% Airdrop</li>
        <li>25% Liquidity</li>
        <li>15% Rewards Pool</li>
        <li>10% Development</li>
      </ul>
    </div>
  </section>
);

const HowToBuy = () => (
  <section id="howtobuy" className="py-20 px-6 bg-black text-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#C4FF61]">How to Buy</h2>
      <ol className="space-y-4 list-decimal list-inside text-lg">
        <li>Connect your wallet (Phantom, Backpack)</li>
        <li>Go to Jupiter Exchange or Raydium</li>
        <li>Paste the CA: 0x0000… and swap $SOL for $BRRR</li>
        <li>Done. You’re earning yield now</li>
      </ol>
    </div>
  </section>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <NavBar />
          <main>
            <Hero />
            <Overview />
            <Features />
            <Tokenomics />
            <HowToBuy />
          </main>
        </>
      )}
    </>
  );
};

export default App;
