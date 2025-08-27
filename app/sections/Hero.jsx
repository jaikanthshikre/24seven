'use client'

import { useState } from 'react';
import {
  Trophy, 
  Smartphone, 
} from 'lucide-react';
import Games from './Games';
import BetMasterFeatures from './Whychooseus';

export default function BettingSiteSection() {
  const [activeTab, setActiveTab] = useState('sports');

  const sportsData = [
    {
      id: 1,
      sport: 'Cricket',
      match: 'India vs Australia',
      league: 'ODI World Cup',
      time: 'Live Now',
      odds: { team1: '1.85', team2: '2.10' },
      isLive: true,
      viewers: '45.2K'
    },
    {
      id: 2,
      sport: 'Football',
      match: 'Manchester United vs Liverpool',
      league: 'Premier League',
      time: '2 hours',
      odds: { team1: '2.25', team2: '1.90' },
      isLive: false,
      viewers: '32.8K'
    },
    {
      id: 3,
      sport: 'Tennis',
      match: 'Djokovic vs Nadal',
      league: 'French Open',
      time: '4 hours',
      odds: { team1: '1.65', team2: '2.45' },
      isLive: false,
      viewers: '28.1K'
    },
    {
      id: 4,
      sport: 'Basketball',
      match: 'Lakers vs Warriors',
      league: 'NBA Finals',
      time: 'Tomorrow',
      odds: { team1: '1.95', team2: '1.95' },
      isLive: false,
      viewers: '51.7K'
    }
  ];

  const casinoGames = [
    { name: 'Lightning Roulette', provider: 'Evolution', players: '1,245', jackpot: '₹2.5M', image: '🎰' },
    { name: 'Blackjack VIP', provider: 'NetEnt', players: '890', jackpot: '₹850K', image: '♠️' },
    { name: 'Mega Fortune', provider: 'NetEnt', players: '2,156', jackpot: '₹12.8M', image: '💎' },
    { name: 'Crazy Time', provider: 'Evolution', players: '1,678', jackpot: '₹3.2M', image: '🎡' },
    { name: 'Book of Dead', provider: 'Play\'n GO', players: '956', jackpot: '₹1.1M', image: '📚' },
    { name: 'Sweet Bonanza', provider: 'Pragmatic', players: '1,445', jackpot: '₹890K', image: '🍭' }
  ];

  const promotions = [
    {
      title: 'Welcome Bonus',
      description: 'Get 100% match bonus up to ₹10,000',
      code: 'WELCOME100',
      validity: '30 days',
      type: 'deposit'
    },
    {
      title: 'Free Bet Friday',
      description: 'Place 5 bets, get 1 free bet worth ₹500',
      code: 'FREEBET',
      validity: 'Every Friday',
      type: 'freebet'
    },
    {
      title: 'Cashback Weekend',
      description: '10% cashback on all casino losses',
      code: 'CASHBACK10',
      validity: 'Weekends',
      type: 'cashback'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      



      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
      
<Games/>
       
      </div>

      {/* Trust Indicators */}
    
<BetMasterFeatures/>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Winning?</h3>
          <p className="text-xl mb-8 text-red-100">Join thousands of players and claim your welcome bonus today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6" />
              Sign Up Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-900 transition-colors duration-300 flex items-center justify-center gap-2">
              <Smartphone className="w-6 h-6" />
              Download App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}