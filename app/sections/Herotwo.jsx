'use client'
import React, { useState } from 'react';
import { 
  Trophy, 

  Zap, 
  Star, 
  Clock, 

  Globe,
  Play,
  ArrowRight,
  ChevronRight,
  Activity
} from 'lucide-react';

const SportsBetting = () => {
  const [activeSport, setActiveSport] = useState('cricket');
  const [hoveredCard, setHoveredCard] = useState(null);

  const sports = [
    {
      id: 'cricket',
      name: 'Cricket',
      emoji: '🏏',
      title: 'Cricket',
      description: 'Cricket is the heart of sports betting in India, and we bring you the best markets on IPL, T20, ODIs, and Test matches. Bet on your favorite teams and players in real time and experience the thrill of betting and sports on India\'s biggest passion!',
      highlight: 'India\'s biggest passion',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/10',
      markets: ['IPL', 'T20 World Cup', 'ODIs', 'Test Matches'],
      features: ['Live Betting', 'Player Props', 'Match Predictions', 'Real-time Odds']
    },
    {
      id: 'football',
      name: 'Football',
      emoji: '⚽',
      title: 'Football',
      description: 'From the EPL and La Liga to the World Cup and Champions League, our platform offers unbeatable odds on all major football events. Feel the excitement of world sports betting as you back your favorite clubs and players in the beautiful game!',
      highlight: 'The beautiful game',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10',
      markets: ['Premier League', 'La Liga', 'Champions League', 'World Cup'],
      features: ['Live Scores', 'Goal Betting', 'Corner Kicks', 'Player Cards']
    },
    {
      id: 'tennis',
      name: 'Tennis',
      emoji: '🎾',
      title: 'Tennis',
      description: 'Enjoy every ace, break, and set with live betting on Grand Slams, ATP, and WTA tournaments. Tennis fans can experience the fast-paced action of betting and sports, predicting winners and enjoying competitive odds on all the top matches worldwide.',
      highlight: 'Every ace, break, and set',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-600/10',
      markets: ['Grand Slams', 'ATP Tours', 'WTA Tours', 'Davis Cup'],
      features: ['Set Betting', 'Game Handicaps', 'Total Games', 'Live Streaming']
    },
    {
      id: 'Dragontiger',
      name: 'Dragon Tiger',
      emoji: '🐉',
      title: 'DragonTiger',
      description: 'Bet on NBA showdowns, EuroLeague clashes, and international tournaments with our sports betting exchange. Whether it\'s playoff drama or regular-season rivalries, basketball offers high-paced thrills and endless opportunities to win.',
      highlight: 'High-paced thrills',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-500/10 to-indigo-600/10',
      markets: ['NBA', 'EuroLeague', 'FIBA World Cup', 'NCAA'],
      features: ['Point Spreads', 'Over/Under', 'Player Props', 'Quarter Betting']
    },
    {
      id: 'lucky7',
      name: 'Lucky7',
      emoji: '7️⃣',
      title: 'Lucky7',
      description: 'Step into the ring with real-money betting on UFC, boxing championships, and all the big fight nights. Back your favorite fighter or predict the upset on our trusted sports betting exchange in India — where every punch counts!',
      highlight: 'Every punch counts',
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-500/10 to-pink-600/10',
      markets: ['UFC', 'Boxing Championships', 'Bellator', 'ONE Championship'],
      features: ['Method of Victory', 'Round Betting', 'Fight Props', 'Live Rounds']
    }
  ];

  const activeSportData = sports.find(sport => sport.id === activeSport);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-green-500/5 to-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8">
            <Globe className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-semibold">World-Class Sports Betting</span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            Bet on Your Favorite Sports
          </h1>
          
          <p className="text-lg md:text-xl text-start text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At our platform, you can dive into the world of betting and sports with access to the most exciting events and leagues from around the globe. Whether you're a cricket fanatic, a football enthusiast, or a tennis follower, we bring the 
            <span className="text-yellow-400 font-semibold"> thrill of world sports betting</span> right to your screen.
          </p>
        </div>

        {/* Sports Navigation */}
        <div className="overflow-x-auto w-full md:overflow-visible">
  <div className="flex md:flex-wrap md:justify-center gap-4 mb-12 px-2 md:px-0 min-w-max">
    {sports.map((sport) => (
      <button
        key={sport.id}
        onClick={() => setActiveSport(sport.id)}
        className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 shrink-0 hover:scale-105 ${
          activeSport === sport.id
            ? `bg-gradient-to-r ${sport.color} border-transparent text-white shadow-lg shadow-${sport.color}/25`
            : 'border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white bg-slate-800/50 backdrop-blur-sm'
        }`}
      >
        <span className="text-sm md:text-2xl">{sport.emoji}</span>
        <span className=" font-semibold">{sport.name}</span>
      </button>
    ))}
  </div>
</div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Active Sport Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-black via-red-950 to-black rounded-3xl md:p-8 p-2 shadow-2xl border border-slate-700/50 backdrop-blur-sm h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeSportData.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {activeSportData.emoji}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{activeSportData.title}</h2>
                  <p className={`text-md md:text-lg font-semibold bg-gradient-to-r ${activeSportData.color} bg-clip-text text-transparent`}>
                    {activeSportData.highlight}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg text-start leading-relaxed mb-8">
                {activeSportData.description}
              </p>

              {/* Markets Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Trophy size={20} className="text-yellow-400" />
                    Popular Markets
                  </h3>
                  <div className="space-y-2">
                    {activeSportData.markets.map((market, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <Star size={14} className="text-yellow-400" />
                        <span className="text-sm">{market}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Activity size={20} className="text-green-400" />
                    Key Features
                  </h3>
                  <div className="space-y-2">
                    {activeSportData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <Zap size={14} className="text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className={`flex-1 px-3 py-3 rounded-xl bg-gradient-to-r ${activeSportData.color} text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2`}>
                  <Play size={20} />
                  Start Betting
                </button>
                <button className="px-3 py-3 border border-slate-600 text-gray-300 rounded-xl hover:bg-slate-700 transition-all duration-300 flex items-center gap-2">
                  <Clock size={20} />
                  Live Events
                </button>
              </div>
               <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-red-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Experience World-Class Sports Betting?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join millions of sports fans who trust our platform for the ultimate betting experience. 
              Start your winning streak today!
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
              <div className="flex items-center gap-2">
                <Trophy size={20} />
                Place Your First Bet
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
            </div>
          </div>
          

          {/* Right Column - Sports Cards */}
          <div className="space-y-4">
            {sports.map((sport) => (
              <div
                key={sport.id}
                onMouseEnter={() => setHoveredCard(sport.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveSport(sport.id)}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  activeSport === sport.id ? 'ring-2 ring-yellow-400/50' : ''
                } ${hoveredCard === sport.id ? 'transform -translate-y-1' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${sport.color} flex items-center justify-center text-xl shadow-lg`}>
                      {sport.emoji}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{sport.name}</h3>
                      <p className="text-gray-400 text-sm">Live Markets</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
                
                <div className="space-y-2">
                  {sport.markets.slice(0, 2).map((market, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{market}</span>
                      <span className="text-green-400 font-semibold">Live</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      

        {/* Bottom CTA */}
       
      </div>
    </div>
  );
};

export default SportsBetting;