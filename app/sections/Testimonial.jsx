"use client";

import React from "react";

const cards = [
  {
    name: "Aarav K.",
    location: "Mumbai, IN",
    review:
      "Clean UI and quick withdrawals on small wins. Live odds refresh fast so placing a bet feels smooth.",
    rating: 5,
  },
  {
    name: "Sara M.",
    location: "Delhi, IN",
    review:
      "In-play stats are helpful. I keep stakes small and use time-outs when I need a break—nice to have built-in tools.",
    rating: 4,
  },
  {
    name: "Vikram S.",
    location: "Bengaluru, IN",
    review:
      "Multiples are fun and the bet slip is easy. KYC was fast and support was responsive.",
    rating: 4,
  },
];

function Stars({ rating }) {
  const safe = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className="text-amber-500" aria-label={`${safe} out of 5`}>
      {"★".repeat(safe)}
      {"☆".repeat(5 - safe)}
      <span className="sr-only">{safe} out of 5 stars</span>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section aria-label="Player testimonials" className="container mx-auto px-5 max-w-5xl py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{c.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{c.location}</p>
              </div>
              <Stars rating={c.rating} />
            </div>
            <p className="mt-3 text-zinc-700 dark:text-zinc-200">“{c.review}”</p>
          </div>
        ))}
      </div>

      {/* Responsible play note */}
      <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200">
        18+ only. Please play responsibly. Set limits and never bet more than you can afford to lose.
      </p>
    </section>
  );
}
