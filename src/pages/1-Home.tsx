import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-600 mb-4 hover:scale-105 transition-all duration-200 hover-effect hover-glow-effect">
          Welcome to FarmSim
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto hover:text-white transition-all duration-200">
          Build and manage your dream farm in this immersive simulation game
        </p>
      </div>

      <div className="text-center flex justify-center">
        <div className="w-[450px] border border-gray-800 p-8 rounded-xl card-style-logic flex justify-center flex-col space-y-6">
          <span className="text-3xl font-bold text-green-600 hover:scale-105 transition-all duration-200 hover-effect hover-glow-effect">
            Join the cult
          </span>
          <div className="relative w-64 h-64 rounded-lg static-glow-effect hover:scale-110 transition-transform duration-300 self-center"></div>
          <button className="cursor-none bg-green-600 text-white h-11 px-8 rounded-md transition-all duration-300 static-glow-effect hover:shadow-none hover:scale-105">
            DOWNLOAD PFP
          </button>
          <p className="text-[14px] text-gray-400 max-w-2xl mx-auto hover:text-white transition-all duration-200">
            Download this sacred image and set it as your X profile picture to join the cult
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Info Box 1 - Farm Management */}
        <div className="card-style-logic p-6 rounded-xl text-center space-y-4 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4">🚜</div>
          <h3 className="text-xl font-semibold text-green-600 mb-2 hover-glow-effect">Farm Management</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Plant crops, tend to animals, and expand your agricultural empire with advanced farming techniques
            and modern equipment.
          </p>
          <div className="pt-2">
            <span className="inline-block bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              Core Feature
            </span>
          </div>
        </div>

        {/* Info Box 2 - Market Trading */}
        <div className="card-style-logic p-6 rounded-xl text-center space-y-4 hover:scale-105 transition-all duration-300">
          <div className="text-4xl mb-4">🏪</div>
          <h3 className="text-xl font-semibold text-green-600 mb-2 hover-glow-effect">Market Trading</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Buy supplies, sell your products, and master the art of agricultural commerce in our dynamic
            marketplace.
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
          <h3 className="text-xl font-semibold text-green-600 mb-2 hover-glow-effect">Community</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connect with fellow farmers, share strategies, and build lasting relationships in our vibrant
            farming community.
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
          <button className="border-gray-800 text-white static-glow-effect h-11 px-8 rounded-md">X</button>
        </a>
      </div>
    </div>
  )
}

export default Home
