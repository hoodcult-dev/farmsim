import React from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect } from 'react'
import pfp from '../assets/bubu.jfif'
const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

const Home: React.FC = () => {
  const color = useMotionValue(COLORS[0])

  useEffect(() => {
    animate(color, COLORS, { ease: 'easeInOut', duration: 10, repeat: Infinity, repeatType: 'mirror' })
  }, [color])

  // Update CSS custom properties with animated color
  useEffect(() => {
    const unsubscribe = color.on('change', (latest) => {
      document.documentElement.style.setProperty('--animated-glow-color', latest)
    })
    return unsubscribe
  }, [color])

  return (
    <div className="space-y-12">
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold mb-4 hover:scale-105 transition-all duration-200 hover-effect hover-glow-effect"
          style={{ color }}
        >
          Welcome to HoodCult
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto hover:text-white transition-all duration-200">
          Stake, trade, and run the blockchain streets with next-level DeFi domination
        </p>
      </div>

      <div className="text-center flex justify-center">
        <div className="w-[450px] border border-gray-800 p-8 rounded-xl card-style-logic flex justify-center flex-col space-y-6">
          <motion.span
            className="text-3xl font-bold hover:scale-105 transition-all duration-200 hover-effect hover-glow-effect"
            style={{ color }}
          >
            Join the collective
          </motion.span>
          <div className="relative w-64 h-64 rounded-lg static-glow-effect hover:scale-110 transition-transform duration-300 self-center flex justify-center">
            <img src={pfp} className="self-center rounded-lg" alt="" />
          </div>
          <motion.button
            className="cursor-none text-white h-11 px-8 rounded-md transition-all duration-300 static-glow-effect hover:shadow-none hover:scale-105"
            style={{ backgroundColor: color }}
          >
            DOWNLOAD PFP
          </motion.button>
          <p className="text-[14px] text-gray-400 max-w-2xl mx-auto hover:text-white transition-all duration-200">
            Download our sleek HoodCult token badge and set it as your X profile to rep the DeFi crew
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Info Box 1 - Farm Management */}
        <div className="card-style-logic p-6 rounded-xl text-center space-y-4 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4">🚜</div>
          <motion.h3 className="text-xl font-semibold mb-2 hover-glow-effect" style={{ color }}>
            Token Stacking
          </motion.h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Stake HoodCult coins, grow fat yields, and run the streets with next-level DeFi strategies.
          </p>
          <div className="pt-2">
            <motion.span
              className="inline-block text-white text-xs px-3 py-1 rounded-full"
              style={{ backgroundColor: color }}
            >
              Core Feature
            </motion.span>
          </div>
        </div>

        {/* Info Box 2 - Market Trading */}
        <div className="card-style-logic p-6 rounded-xl text-center space-y-4 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4">🏪</div>
          <motion.h3 className="text-xl font-semibold mb-2 hover-glow-effect" style={{ color }}>
            Street Market
          </motion.h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Buy low, sell high, and master the art of crypto deals in our high-stakes blockchain exchange.
          </p>
          <div className="pt-2">
            <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              Economy
            </span>
          </div>
        </div>

        {/* Info Box 3 - Community */}
        <div className="card-style-logic p-6 rounded-xl text-center space-y-4 hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
          <div className="text-4xl mb-4">👥</div>
          <motion.h3 className="text-xl font-semibold mb-2 hover-glow-effect" style={{ color }}>
            Cult Collective
          </motion.h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connect with DeFi bosses, swap yield hacks, and build your rep in our tight-knit HoodCult crew.
          </p>
          <div className="pt-2">
            <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              Social
            </span>
          </div>
        </div>
      </div>
      <div className="text-center flex justify-center">
        <a
          href="https://x.com/pfpscult"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex self-center"
        >
          <button className="border-gray-800 text-white static-glow-effect h-11 px-8 rounded-md cursor-none">
            X
          </button>
        </a>
      </div>
    </div>
  )
}

export default Home
