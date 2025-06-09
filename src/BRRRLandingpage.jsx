import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
          WELCOME{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            BRRR
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-purple-300 mb-8"
        >
          WELCOME TO $BRRR
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Fast. Secure. Borderless. WalletGoesBRR is a blazing-fast, user-friendly digital wallet designed for the modern Web3 world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg shadow-lg"
          >
            DEV
          </motion.button>

          <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4">
            <p className="text-gray-400 text-sm mb-2">CA</p>
            <p className="text-purple-300 font-mono text-sm break-all" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              FwyNd1G55fPfAN3RueT8uDvk8sZPCNjrLp3b9ir1ttFg
            </p>
          </div>
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
            🚀 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            WalletGoesBRR is a next-generation crypto wallet built for speed, simplicity, and scalability. Whether you're a DeFi power user, NFT collector, or just getting started with crypto, WalletGoesBRR gets your transactions from pending to confirmed in record time — with no compromise on security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="⚡"
            title="Instant Transactions"
            description="Enjoy faster-than-average transaction speeds thanks to our optimized signing pipeline."
            delay={0.1}
          />
          <FeatureCard
            icon="🔐"
            title="Secure by Design"
            description="Biometric and multi-sig support built-in for maximum security."
            delay={0.2}
          />
          <FeatureCard
            icon="🌍"
            title="Cross-Chain Ready"
            description="Interact with Ethereum, Solana, and more with ease."
            delay={0.3}
          />
          <FeatureCard
            icon="📱"
            title="Mobile & Desktop"
            description="Available as browser extension and mobile app."
            delay={0.4}
          />
          <FeatureCard
            icon="🧩"
            title="DApp Integrations"
            description="Seamlessly connects to hundreds of dApps."
            delay={0.5}
          />
          <FeatureCard
            icon="🧠"
            title="Smart Suggestions"
            description="Intelligent gas fee and network recommendations."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techItems = [
    { category: "Frontend", tech: "React Native / Next.js" },
    { category: "Backend", tech: "Node.js / Rust (transaction signing)" },
    { category: "Blockchain", tech: "EVM-compatible chains, Solana, Layer 2s" },
    { category: "Security", tech: "Ledger integration, 2FA, encrypted vaults" },
    { category: "Storage", tech: "Encrypted local storage + IPFS for backups" }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-purple-950/20 to-black" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            🧑‍💻 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-purple-400 font-bold text-lg mb-2">{item.category}:</h3>
              <p className="text-gray-300" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-black" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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

          <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">💎</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">TOTAL SUPPLY</h3>
            <p className="text-5xl md:text-6xl font-black text-white" style={{ fontFamily: 'JetBrains Mono, monospace' }}>1,000,000,000</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            🪙 OTHER BRRR CRYPTO PREDICTIONS 👑
          </h3>
          <div className="text-6xl mb-4">📝</div>
          <p className="text-purple-300 font-bold text-xl">License</p>
          <p className="text-gray-300 mt-2">MIT © 2025 WalletGoesBRR Team</p>
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
      description: "Download MetaMask or another Solana-compatible wallet. Make sure it's connected to the Ethereum network"
    },
    {
      number: "2",
      title: "GET SOME SOLANA",
      description: "Buy SOLANA on a centralized exchange (like Coinbase, Bybit or Binance) and transfer it to your wallet"
    },
    {
      number: "3",
      title: "GO TO UNISWAP",
      description: "Head over to Uniswap and connect your wallet. Paste the official $BARN contract address"
    },
    {
      number: "4",
      title: "SWAP SOL FOR $BARN",
      description: "Click and select $BARN token, or paste the token address contract. Enter the amount of SOL and confirm the transaction. Now you're holding $BARN"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-br from-purple-950/20 to-black" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-lg">{step.number}</span>
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
      icon: "𝕏", 
      url: "https://x.com/brrr", 
      gradient: "from-blue-500 to-cyan-500" 
    },
    { 
      name: "Telegram", 
      icon: "✈️", 
      url: "https://t.me/brrr", 
      gradient: "from-blue-400 to-blue-600" 
    },
    { 
      name: "DEXScreener", 
      icon: "📈", 
      url: "https://dexscreener.com/", 
      gradient: "from-green-500 to-emerald-500" 
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
          {/* Logo Section */}
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

          {/* Social Links */}
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
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
              $BRRR - The memecoin that brings together crypto enthusiasts, meme lovers, and digital pioneers in one unstoppable community.
            </p>
            <p className="text-purple-400 font-semibold text-sm">
              🚀 Fast • 🔒 Secure • 🌍 Borderless • 💎 Community-Driven
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"></div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-500 text-sm">
              <p>© 2025 BRRR Token. All rights reserved.</p>
              <span className="hidden md:block">•</span>
              <p>Built for the future of Web3</p>
            </div>
            
            <div className="text-xs text-gray-600">
              <p>
                Disclaimer: Cryptocurrency investments carry risk. Please do your own research before investing.
              </p>
            </div>
          </motion.div>

          {/* Floating Elements */}
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
          <TechStack />
          <Tokenomics />
          <HowToBuy />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default BRRRLandingPage;