'use client';

import React from 'react';

export default function Games() {
  const games = [
    { image: '/images/cricket.png' },
    { image: '/images/football.png' },
    { image: '/images/tennis.png' },
    { image: '/images/poker.png' },
    { image: '/images/horseracing.png' },
    { image: '/images/lucky7.png' },
    { image: '/images/dragontiger.png' },
    { image: '/images/rummy.png' },
    { image: '/images/hs.png' },
  ];

  return (
    <section className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl md:text-5xl font-extrabold text-white">
            🔥 Trending Games
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Experience the most played games on 247BETBOOK right now.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 justify-center">
          {games.map((game, idx) => (
            <a
              key={idx}
              href="http://wa.link/iwant24sevenid"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden border border-red-800/40 shadow-xl shadow-red-900/40 mx-auto w-full max-w-[500px]"
            >
              {/* Image */}
              <img
                src={game.image}
                alt={`Game ${idx + 1}`}
                className="h-50 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
