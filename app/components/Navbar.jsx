'use client'

import React, { useState } from 'react';
import { Menu, X, User, Wallet, Trophy, Gamepad2, Search, Bell, Gift } from 'lucide-react';

// Continuous, seamless marquee component
const Marquee = ({ children, speed = 30 }) => (
  <div className="overflow-hidden whitespace-nowrap relative">
    <div
      className="inline-flex animate-marquee"
      style={{ animationDuration: `${speed}s` }}
    >
      <div className="flex-shrink-0 mx-8">{children}</div>
      <div className="flex-shrink-0 mx-8">{children}</div>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: inline-flex;
        animation-name: marquee;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    `}</style>
  </div>
);

const BettingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [balance, setBalance] = useState(1250.5);

  const offers = [
    "🎰 Welcome Bonus: 100% up to $500 + 50 Free Spins!",
    "⚽ Premier League Special: Bet $20, Get $10 Free Bet!",
    "🔥 Weekend Cashback: Get 10% back on all losses!",
    "🎯 Daily Jackpot: Win up to $50,000 every day!",
    "💎 VIP Program: Exclusive bonuses and faster withdrawals!",
    "🏆 Tournament Mode: Compete for $100K prize pool!"
  ];

  return (
    <div className="w-full">
      {/* Top Offer Bar with Rich Golden gradient */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 text-amber-900 font-bold py-2 shadow-lg overflow-hidden border-b border-yellow-300">
        <div className="flex items-center">
          <Gift className="w-5 h-5 mr-2 ml-4 flex-shrink-0 animate-pulse text-amber-800" />
          <Marquee speed={20}>
            <span className="text-sm uppercase tracking-wide">{offers.join(' • ')} •</span>
          </Marquee>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-b from-yellow-50/95 via-amber-50/90 to-yellow-100/95 backdrop-blur-md shadow-xl border-b-2 border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl border border-amber-400">
                M
              </div>
              <span className="ml-3 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent text-2xl font-extrabold tracking-tight">
                MahavirBook
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {['Casino', 'Sports', 'Live', 'Tournaments', 'Promotions'].map((item, idx) => {
                  const Icon = idx === 0 ? Gamepad2 : idx === 3 ? Trophy : null;
                  return (
                    <a
                      key={item}
                      href="#"
                      className="text-amber-800 hover:text-amber-600 px-3 py-2 rounded-lg text-sm font-semibold transition-all transform hover:scale-105 hover:bg-amber-100/50 hover:shadow-md flex items-center border border-transparent hover:border-amber-200"
                    >
                      {Icon && <Icon className="w-4 h-4 mr-1" />}{item}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center space-x-5">
              {/* Balance Display */}
             {/*  <div className="flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1.5 rounded-full border border-amber-200 shadow-inner">
                <Wallet className="w-4 h-4 text-amber-700 mr-1" />
                <span className="text-amber-800 text-sm font-bold">${balance.toFixed(2)}</span>
              </div> */}

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 placeholder-amber-600 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white w-52 shadow-inner border border-amber-200"
                />
                <Search className="w-4 h-4 text-amber-600 absolute left-3 top-2.5" />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-full hover:bg-amber-100 transition-colors border border-transparent hover:border-amber-200">
                <Bell className="w-5 h-5 text-amber-700" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-lg">
                  3
                </span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1.5 rounded-full border border-amber-200 shadow-inner">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-amber-800 text-sm font-semibold">User</span>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-800 hover:text-amber-600 p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition-colors border border-amber-200 hover:border-amber-300 shadow-sm"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-amber-50 to-yellow-50 shadow-lg border-t border-amber-200">
            <div className="px-4 py-3 space-y-2">
              {/* Mobile Balance */}
             {/*  <div className="flex items-center justify-center bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-2 rounded-lg border border-amber-200 shadow-inner mb-3">
                <Wallet className="w-4 h-4 text-amber-700 mr-2" />
                <span className="text-amber-800 font-bold">Balance: ${balance.toFixed(2)}</span>
              </div> */}

              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 placeholder-amber-600 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 w-full border border-amber-200"
                />
                <Search className="w-4 h-4 text-amber-600 absolute left-3 top-2.5" />
              </div>

              {['Casino', 'Sports', 'Live', 'Tournaments', 'Promotions'].map((item, idx) => (
                <a
                  key={item}
                  href="#"
                  className={`flex items-center px-3 py-2 rounded-lg text-base font-semibold transition-colors border ${
                    idx === 0 
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-amber-400 shadow-md' 
                      : 'text-amber-800 hover:bg-amber-100 border-transparent hover:border-amber-200'
                  }`}
                >
                  {idx === 0 && <Gamepad2 className="w-5 h-5 mr-2 text-white" />}
                  {idx === 3 && <Trophy className="w-5 h-5 mr-2 text-amber-700" />}
                  {item}
                </a>
              ))}

              {/* Mobile Profile */}
              <div className="border-t border-amber-200 pt-4 mt-4 flex items-center px-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center mr-3 shadow-md">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-amber-800 font-semibold">Player123</span>
                <div className="ml-auto relative">
                  <Bell className="w-5 h-5 text-amber-700" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  7
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default BettingNavbar;