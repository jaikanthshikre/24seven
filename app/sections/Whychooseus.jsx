import React from 'react';
import { Shield, Zap, Smartphone, Award } from 'lucide-react';
import Link from 'next/link';

const BetMasterFeatures = () => {
  const features = [
    { 
      icon: Shield, 
      title: 'Secure & Licensed', 
      desc: 'SSL encrypted transactions',
      gradient: 'from-red-500 to-red-600'
    },
    { 
      icon: Zap, 
      title: 'Instant Payouts', 
      desc: 'Withdraw winnings in minutes',
      gradient: 'from-red-600 to-red-700'
    },
    { 
      icon: Smartphone, 
      title: 'Mobile Ready', 
      desc: 'Play anywhere, anytime',
      gradient: 'from-red-500 to-red-700'
    },
    { 
      icon: Award, 
      title: '24/7 Support', 
      desc: 'Expert help when you need it',
      gradient: 'from-red-600 to-red-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-400/15 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent leading-tight">
            Why Choose 
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
             24SevenBetBook?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
            Trusted by{' '}
            <span className="text-red-400 font-bold">millions of players</span>{' '}
            worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `slideUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Card */}
                <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 h-full transition-all duration-500 ease-out hover:scale-105 hover:border-red-500/50 hover:bg-gray-900/60 hover:shadow-2xl hover:shadow-red-500/20">
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 via-transparent to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg shadow-red-500/25 group-hover:shadow-red-500/40 transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '1s'}}>
         <Link href="http://wa.link/iwant24sevenid"> <button className="group relative px-12 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 active:scale-95">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button></Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        /* Custom glow animation for icons */
        @keyframes iconGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
        }

        .feature-card:hover .icon-container > div {
          animation: iconGlow 2s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .main-title {
            font-size: 3rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default BetMasterFeatures;