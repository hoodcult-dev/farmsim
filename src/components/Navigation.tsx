import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/farm', label: 'Farm', icon: '🚜' },
    { path: '/market', label: 'Market', icon: '🏪' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="bg-black bg-opacity-30 backdrop-blur-md py-4 mb-8 shadow-lg sticky top-0 z-50 border-b border-white border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold drop-shadow-lg">
          🌾 FarmSim
        </div>
        <ul className="flex space-x-8 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
