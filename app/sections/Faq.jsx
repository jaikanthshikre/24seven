'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone } from 'lucide-react';

export default function MahavirBookFAQ() {
  const [openItems, setOpenItems] = useState(new Set([0]));
  const toggleItem = (idx) => {
    const newSet = new Set(openItems);
    newSet.has(idx) ? newSet.delete(idx) : newSet.add(idx);
    setOpenItems(newSet);
  };

  const faqData = [
    {
      question: "How do I create an account on Mahavir Book?",
      answer: "Creating an account is simple and takes less than 2 minutes. Click on 'Register', enter your mobile number, email, and basic details, then verify via OTP to start betting with up to 10% welcome bonus.",
    },
    {
      question: "What are the available payment methods?",
      answer: "We support UPI, Net Banking, Debit/Credit Cards, Paytm, PhonePe, Google Pay, and popular e-wallets, all secured with bank-grade encryption.",
    },
    {
      question: "How long do withdrawals take?",
      answer: "Withdrawals are processed within 15 minutes to 2 hours, depending on your bank or payment method, making us one of the fastest payout platforms.",
    },
    {
      question: "What types of games are available?",
      answer: "Enjoy Sports Betting (Cricket, Football, Tennis), Live Casino (Roulette, Blackjack, Baccarat), Slots, Teen Patti, Andar Bahar, and Fantasy Sports—all in one place.",
    },
    {
      question: "How do I verify my account?",
      answer: "Upload valid ID proof (Aadhaar, PAN, Passport) and address proof in your dashboard. Verification completes within 24 hours for seamless withdrawals.",
    },
    {
      question: "How can I contact customer support?",
      answer: "Reach us 24/7 via WhatsApp, Live Chat, Email (support@mahavirbook.com), or Phone. What'sApp inquiries typically get a response within 5 minutes.",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-950 via-yellow-950 to-orange-950">
      <div className="container mx-auto px-4 max-w-3xl text-gray-100">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto mb-4 w-10 h-10 text-amber-400" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Answers to your key questions about Mahavir Book.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openItems.has(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden transition ${
                  isOpen ? 'bg-gray-800' : 'bg-gray-800/50'
                }`}
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left flex justify-between items-center px-6 py-4 hover:bg-gray-700 focus:outline-none"
                >
                  <span className="font-medium text-gray-100">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-300" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 bg-gray-800">
                    <p className="text-gray-200 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg transition">
            <Phone className="w-5 h-5" />
            Contact 24/7 Support
          </button>
        </div>
      </div>
    </section>
  )};
