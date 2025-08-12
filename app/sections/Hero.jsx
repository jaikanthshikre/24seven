'use client'

import React, { useState, useEffect } from 'react';
import { Play, MessageCircle, TrendingUp, Users, Trophy, Star, Crown, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const heroSlides = [
    { title: 'Win Big Tonight', subtitle: 'Premium slots with massive jackpots', image: '/images/eight.png' },
    { title: 'Live Casino Action', subtitle: 'Real dealers, real excitement', image: '/images/eight.png'},
    { title: 'Sports Betting', subtitle: 'Bet on your favorite teams', image: '/images/eight.png' }
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Mobile Image - Top */}
      <div className="md:hidden w-full p-4">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {heroSlides.map((slide, i) => (
              <img key={i} src={slide.image} alt={slide.title} className="w-full h-48 object-cover flex-shrink-0" />
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {heroSlides.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)} 
                className={`w-2 h-2 rounded-full transition ${currentSlide === i ? 'bg-amber-400' : 'bg-white/60'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              
              {/* Title */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                    Win Big
                  </span>
              
                  <span className="text-gray-900">Tonight</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Experience the ultimate in online gaming with 
                  <span className="font-semibold text-amber-600"> premium slots</span>, 
                  <span className="font-semibold text-yellow-600"> live tables</span>, and 
                  <span className="font-semibold text-amber-600"> sports betting</span>—all in one place.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Crown className="w-5 h-5" />
                  Register Now - Bonus up to 10%
                </button>
                <button className="px-8 py-4 border-2 border-amber-400 text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-amber-600 mb-1">$2.5M+</div>
                  <div className="text-sm text-gray-600">Daily Jackpots</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-amber-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Active Players</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-amber-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Games Available</div>
                </div>
              </div>

            </div>

            {/* Right Content - Desktop Image */}
            <div className="hidden lg:block w-full lg:w-1/2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200">
                  <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {heroSlides.map((slide, i) => (
                      <img key={i} src={slide.image} alt={slide.title} className="w-full h-80 lg:h-96 object-cover flex-shrink-0" />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentSlide(i)} 
                        className={`w-3 h-3 rounded-full transition ${currentSlide === i ? 'bg-amber-500' : 'bg-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className=" border-t border-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-500" />
              <span>Licensed & Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Instant Payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>Award Winning Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500" />
              <span>5-Star Customer Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;