'use client';

import React from 'react';
import { Star, User } from 'lucide-react';

export default function Testimonials247BetBook() {
  const testimonials = [
    {
      name: 'Rohit Sharma',
      role: 'Pro Bettor',
      text: '247BETBOOK gives the fastest withdrawals I’ve ever seen. I cashed out my winnings in under 10 minutes!',
      rating: 5,
    },
    {
      name: 'Ananya Verma',
      role: 'Casino Player',
      text: 'Love the live casino tables here. The design, bonuses, and 24/7 support make the experience world-class.',
      rating: 5,
    },
    {
      name: 'Karan Mehta',
      role: 'Fantasy Sports Fan',
      text: 'Finally a platform that combines sports betting, fantasy, and casino—all smooth and secure!',
      rating: 4,
    },
  ];

  return (
    <section className="relative py-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black" />

      <div className="relative mx-auto max-w-6xl px-4 text-gray-100">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-white md:text-4xl">
            What Players Say
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Real stories from real bettors who trust 247BETBOOK.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-red-800/40 bg-black/40 p-6 shadow-lg shadow-red-900/30 transition hover:bg-black/60"
            >
              {/* Icon instead of Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-600/20 ring-2 ring-red-600">
                  <User className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-red-500 text-red-500"
                  />
                ))}
                {[...Array(5 - t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-gray-600"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-300 leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
