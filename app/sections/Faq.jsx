'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function FAQ247BetBook() {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (idx) => {
    const next = new Set(openItems);
    next.has(idx) ? next.delete(idx) : next.add(idx);
    setOpenItems(next);
  };

  const faqData = [
    {
      question: 'How do I create an account on 247BETBOOK?',
      answer:
        'Tap “Register”, enter your mobile/email, set a secure password, and verify via OTP. You can start playing in under 2 minutes.',
    },
    {
      question: 'Which payment options are supported?',
      answer:
        'UPI, NetBanking, major cards, and popular wallets are supported. Transactions use bank-grade encryption and fraud protection.',
    },
    {
      question: 'How fast are withdrawals?',
      answer:
        'Most withdrawals complete within minutes after KYC is approved. Bank processing times may vary slightly by provider.',
    },
    {
      question: 'What games can I play?',
      answer:
        'Live Sports (Cricket, Football, Tennis), Live Casino (Roulette, Blackjack, Baccarat), Slots, Andar Bahar, Teen Patti, and more.',
    },
    {
      question: 'How do I complete KYC?',
      answer:
        'Upload a valid photo ID (PAN/Aadhaar/Passport) and address proof in your profile. Reviews usually complete within 24 hours.',
    },
    {
      question: 'How can I reach support?',
      answer:
        'We’re available 24/7 via Live Chat and WhatsApp. You can also email support@247betbook.com for account or payment queries.',
    },
  ];

  return (
    <section className="relative py-10">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-950 via-black to-red-900" />

      <div className="relative mx-auto max-w-4xl px-4 text-gray-100">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 ring-1 ring-red-700/40">
            <HelpCircle className="h-6 w-6 text-red-400" />
          </div>
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            247BETBOOK FAQs
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-300 md:text-base">
            Quick answers to the most common questions. Can’t find yours? Our team is here around the clock.
          </p>

        {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-800/50 bg-red-900/20 px-3 py-1">
              <Shield className="h-4 w-4 text-red-400" />
              Secure & Encrypted
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-800/50 bg-red-900/20 px-3 py-1">
              <Zap className="h-4 w-4 text-red-400" />
              Fast Payouts
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-red-800/50 bg-red-900/20 px-3 py-1">
              24/7 Live Support
            </span>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openItems.has(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-red-700/60 bg-black/60'
                    : 'border-red-900/40 bg-black/40 hover:bg-black/50'
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white md:text-base">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-red-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-red-400" />
                  )}
                </button>

                {/* Collapsible answer */}
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="min-h-0">
                    <div className="px-5 pb-5 text-sm leading-relaxed text-gray-200 md:text-[15px]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
         <Link href="http://wa.link/iwant24sevenid"> <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-3 font-semibold text-white shadow-lg shadow-red-900/40 ring-1 ring-red-700 transition hover:from-red-500 hover:to-red-400">
            <Phone className="h-5 w-5" />
            Contact 24/7 Support
          </button></Link>
          <p className="mt-3 text-xs text-gray-400">
            WhatsApp & Live Chat available inside your 247BETBOOK account.
          </p>
        </div>
      </div>
    </section>
  );
}
