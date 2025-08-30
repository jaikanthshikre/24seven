'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Menu, X,
  Trophy, Zap, Gift, Gamepad2,
  TrendingUp, Smartphone,
} from 'lucide-react';

export default function StunningBettingNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use the actual routes you created
  const navItems = [
    { name: 'Cricket',  href: '/cricket',  icon: Trophy },
    { name: 'Casino',   href: '/casino',   icon: Gamepad2 },
    { name: 'Tennis',   href: '/tennis',   icon: Zap,  badge: 'LIVE' },
    { name: 'Football', href: '/football', icon: Gift, badge: 'NEW'  },
  ];

  const isActive = (href) => pathname === href || pathname?.startsWith(href + '/');

  return (
    <>
      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee { animation: marquee 60s linear infinite; }
      `}</style>

      {/* Top marquee */}
      <div className="fixed top-0 inset-x-0 bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white text-sm font-medium z-50 overflow-hidden shadow-lg shadow-red-900/20">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          <span className="mx-8 flex items-center gap-2">🔥 Welcome Bonus: Get Bonus up to ₹10% on your first deposit!</span>
          <span className="mx-8 flex items-center gap-2">⚡ Live Cricket: IND vs AUS - Place your bets now!</span>
          <span className="mx-8 flex items-center gap-2">🎰 New Slot: Mega Fortune - Play and win huge jackpots!</span>
          <span className="mx-8 flex items-center gap-2">🏆 Weekend Special: Double your winnings on all sports bets!</span>
          <span className="mx-8 flex items-center gap-2">💎 VIP Exclusive: Private poker tables now available!</span>
          <span className="mx-8 flex items-center gap-2">🎁 Daily Rewards: Login streak bonus up to ₹5,000!</span>
          {/* duplicate for seamless loop */}
          <span className="mx-8 flex items-center gap-2">🔥 Welcome Bonus: Get 100% up to ₹10,000 on your first deposit!</span>
          <span className="mx-8 flex items-center gap-2">⚡ Live Cricket: IND vs AUS - Place your bets now!</span>
          <span className="mx-8 flex items-center gap-2">🎰 New Slot: Mega Fortune - Play and win huge jackpots!</span>
          <span className="mx-8 flex items-center gap-2">🏆 Weekend Special: Double your winnings on all sports bets!</span>
          <span className="mx-8 flex items-center gap-2">💎 VIP Exclusive: Private poker tables now available!</span>
          <span className="mx-8 flex items-center gap-2">🎁 Daily Rewards: Login streak bonus up to ₹5,000!</span>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-8 inset-x-0 z-50 transition-all duration-700
        bg-black
        ${isScrolled
          ? 'lg:bg-black/95 border-b border-red-900/30 shadow-lg shadow-red-900/10'
          : 'lg:bg-black/90'}
        lg:backdrop-blur-2xl`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img src="/images/logo.jpeg" alt="24Seven Book" className="h-10" />
              </div>
              <div className="block">
                <span className="text-xl font-bold text-gray-300 tracking-tight">24</span>
                <span className="text-xl font-bold text-red-500">SEVENBOOK</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:block">
              <div className="flex items-center bg-gray-900/60 rounded-full p-1 border border-red-900/30">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-red-500 text-white">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex flex-col md:flex-row gap-3">
                <Link
                  href="http://wa.link/iwant24sevenid"
                  className="px-6 py-2 rounded-md bg-red-500 text-white font-medium shadow-md hover:bg-red-600 hover:shadow-lg transition-all"
                >
                  Login
                </Link>
                <Link
                  href="http://wa.link/iwant24sevenid"
                  className="px-6 py-2 rounded-md border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition-all"
                >
                  Register
                </Link>
              </div>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="lg:hidden w-10 h-10 bg-gray-900/60 border border-red-900/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-80 bg-gray-900 border-l border-red-900/30 transform transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } mt-8`}
        >
          <div className="p-6 border-b border-red-900/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-lg font-light text-gray-300">
                  247<span className="font-bold text-red-500">BETBOOK</span>
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-900/30">
            <Link
              href="/app"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-red-600/25 transition-all duration-300"
            >
              <Smartphone className="w-4 h-4" />
              Get Mobile App
            </Link>
          </div>
        </div>

        {/* Overlays */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        {isUserMenuOpen && (
          <div
            className="hidden lg:block fixed inset-0 z-40"
            onClick={() => setIsUserMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
}
