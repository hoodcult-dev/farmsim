import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 hover:scale-105 transition-all duration-200 hover-effect">
          Welcome to FarmSim
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Build and manage your dream farm in this immersive simulation game
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div className="card text-center hover-effect">
          <div className="text-4xl mb-4">🚜</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Manage Farm</h3>
          <p className="text-gray-600">Plant crops, tend to animals, and expand your land</p>
          <button className="btn-primary mt-4">Explore Farm</button>
        </div>
        
        <div className="card text-center hover-effect">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Grow Crops</h3>
          <p className="text-gray-600">Plant and harvest various crops throughout the seasons</p>
          <button className="btn-primary mt-4">Start Growing</button>
        </div>
        
        <div className="card text-center hover-effect">
          <div className="text-4xl mb-4">🐄</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Raise Animals</h3>
          <p className="text-gray-600">Care for livestock and collect valuable resources</p>
          <button className="btn-primary mt-4 cursor-none">Care for Animals</button>
        </div>
        
        <div className="card text-center hover-effect">
          <div className="text-4xl mb-4">🏪</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trade & Sell</h3>
          <p className="text-gray-600">Buy supplies and sell your products at the market</p>
          <button className="btn-primary mt-4">Visit Market</button>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white text-center mt-12 hover-effect">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Farming?</h2>
        <p className="text-xl mb-6">Begin your agricultural journey today!</p>
        <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
      
      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Elements</h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="This input has a text cursor" 
            className="input-field w-full"
          />
          <textarea 
            placeholder="This textarea also has a text cursor"
            className="input-field w-full h-20"
          />
          <div className="flex gap-4">
            <button className="btn-primary">Pointer Cursor</button>
            <button className="btn-secondary">Another Button</button>
            <div 
              className="p-4 bg-purple-100 rounded cursor-grab draggable"
              draggable="true"
            >
              Drag me! (Grab cursor)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
