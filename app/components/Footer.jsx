import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 border-t border-yellow-400/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-yellow-400">GoldBet</div>
              <p className="text-gray-300">
                The ultimate destination for premium online gaming and sports betting.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400/30 transition-colors">
                  <span className="text-yellow-400">f</span>
                </div>
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400/30 transition-colors">
                  <span className="text-yellow-400">t</span>
                </div>
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400/30 transition-colors">
                  <span className="text-yellow-400">i</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Games</h3>
              <div className="space-y-2 text-gray-300">
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Slots</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Table Games</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Live Casino</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Poker</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Sports</h3>
              <div className="space-y-2 text-gray-300">
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Football</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Basketball</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Tennis</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Esports</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <div className="space-y-2 text-gray-300">
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Help Center</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Contact Us</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Responsible Gaming</div>
                <div className="cursor-pointer hover:text-yellow-400 transition-colors">Terms & Conditions</div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-400/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">
            <div>© 2024 GoldBet. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-yellow-400 transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-yellow-400 transition-colors">Terms of Service</span>
              <span className="cursor-pointer hover:text-yellow-400 transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer