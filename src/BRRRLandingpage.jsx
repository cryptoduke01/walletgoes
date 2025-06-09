import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {
  Twitter,
  Send,
  LineChart,
  BarChartBig, // used as Descreener icon
} from "lucide-react";

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          BRRR!
        </motion.h1>
        <motion.div
          className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Overview', 'Features', 'Tokenomics', 'How to Buy'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-purple-900/20"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
              whileHover={{ scale: 1.05 }}
            >
              BRRR!
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-30 md:hidden bg-black/95 backdrop-blur-md border-b border-purple-900/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-300 hover:text-purple-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: <Twitter size={20} />,
      url: "https://x.com/walletgoesbrrr",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Telegram",
      icon: <Send size={20} />,
      url: "https://t.me/BRRR_P0RTAL",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Chart",
      icon: <LineChart size={20} />,
      url: "https://gmgn.ai/sol/token/FwyNd1G55fPfAN3RueT8uDvk8sZPCNjrLp3b9ir1ttFg",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white mb-6"
        >
          BRRR{' '}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          WELCOME TO $BRRR
        </motion.h2>
        <br />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          No staking. No price limits. Just hold and earn. 
          Every trade makes your wallet go BRRRRR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">CA</p>
            <p className="text-purple-300 font-mono text-sm break-all" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              FwyNd1G55fPfAN3RueT8uDvk8sZPCNjrLp3b9ir1ttFg
            </p>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-6 mt-10"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-3 transition-transform transform hover:scale-110 bg-gradient-to-br ${social.gradient}`}
            >
              <span className="text-white">{social.icon}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 text-center">{title}</h3>
      <p className="text-gray-300 text-center leading-relaxed">{description}</p>
    </motion.div>
  );
};

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-black" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            $BRRR is a revolutionary token that rewards its holders in $SOL by collecting all the swap fees from the liquidity pool and distributing 75% of them to the holders. With low trading fees, high volatility, and a hold-to-earn mechanism, BRRR is built for degens, stakers, and liquidity providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="💸"
            title="Holders First"
            description="Hold $BRRR and earn rewards in $SOL — 75% of the swap fees from the liquidity pool go directly to holders."
            delay={0.1}
          />
          <FeatureCard
            icon="🔒"
            title="No Lockups Needed"
            description="Earn without staking or locking funds. Just hold $BRRR and receive your share of revenue."
            delay={0.2}
          />
          <FeatureCard
            icon="⚡"
            title="Based on Solana"
            description="The Solana blockchain allows for the most efficient distribution given the low gas fees and high transaction speed."
            delay={0.3}
          />
          <FeatureCard
            icon="⚙️"
            title="Auto Fee Distribution"
            description="The technology ensures seamless and transparent SOL rewards every 10 minutes when the volume is sufficient"
            delay={0.4}
          />
          <FeatureCard
            icon="🔥"
            title="No Transfer Tax"
            description="$BRRR rewards the holders purely based on trading fees collected by the liquidity pool and no tax."
            delay={0.5}
          />
          <FeatureCard
            icon="🫂"
            title="Community Backed"
            description="In the core of every project lays the community. That's why through our rewards structure we are building one of the most supportive diamond handed communities in crypto."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-purple-950/20 to-black" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">TOKENOMICS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Total Supply */}
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">TOTAL SUPPLY</h3>
              <p className="text-5xl md:text-6xl font-black text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>1BN</p>
            </div>

            {/* Bonding Curve */}
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
              <div className="text-6xl mb-6">📐</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">BONDING CURVE</h3>
              <p className="text-5xl md:text-6xl font-black text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>75 SOL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const HowToBuy = () => {
  const steps = [
    {
      number: "1",
      title: "CREATE A WALLET",
      description: "Download Phantom or another Solana-compatible wallet and create your account."
    },
    {
      number: "2",
      title: "DEPOSIT SOL",
      description: "Buy SOL from exchange or deposit some SOL into walet."
    },
    {
      number: "3",
      title: "GO TO JUPITER",
      description: "Head over to jup.ag and connect your wallet then go to the spot swap section."
    },
    {
      number: "4",
      title: "SWAP SOL FOR $BRRR",
      description: "Paste the contract address of $BRRR, enter the amount of SOL you would like to buy with, press swap and confirm the transaction."
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-black" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">HOW TO BUY</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-2xl">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: <Twitter size={20} />,
      url: "https://x.com/walletgoesbrrr",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Telegram",
      icon: <Send size={20} />,
      url: "https://t.me/BRRR_P0RTAL",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Chart",
      icon: <LineChart size={20} />,
      url: "https://gmgn.ai/sol/token/FwyNd1G55fPfAN3RueT8uDvk8sZPCNjrLp3b9ir1ttFg",
      gradient: "from-green-500 to-emerald-500",
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-purple-950/30 border-t border-purple-900/30 py-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-2">
              BRRR!
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-20 h-20 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center border-2 border-dashed border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-3xl relative z-10 filter drop-shadow-lg">{social.icon}</span>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
              With low trading fees, high volatility, and a hold-to-earn mechanism, BRRR is built for degens, stakers, and liquidity providers - everyone is welcome in our versatile community
            </p>
          </motion.div>

          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-500 text-sm">
              <p>© 2025 BRRR Token. All rights reserved.</p>
            </div>

            <div className="text-xs text-gray-600">
              <p>
                Disclaimer: Cryptocurrency investments carry risk. Please do your own research before investing.
              </p>
            </div>
          </motion.div>

          <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-1 h-1 bg-pink-500/30 rounded-full animate-pulse delay-1000"></div>
        </motion.div>
      </div>
    </footer>
  );
};

const BRRRLandingPage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NavBar />
          <Hero />
          <Overview />
          <Tokenomics />
          <HowToBuy />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default BRRRLandingPage;
