import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-black border-t border-red-500/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & About */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-red-500">247BetBook</div>
              <p className="text-gray-400">
                Your trusted platform for exciting games, live betting, and nonstop entertainment.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500/30 transition-colors">
                  <span className="text-red-500">f</span>
                </div>
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500/30 transition-colors">
                  <span className="text-red-500">t</span>
                </div>
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500/30 transition-colors">
                  <span className="text-red-500">i</span>
                </div>
              </div>
            </div>

            {/* Games */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Games</h3>
              <div className="space-y-2 text-gray-400">
                <div className="cursor-pointer hover:text-red-500 transition-colors">Live Casino</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Slots</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Teen Patti</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Poker</div>
              </div>
            </div>

            {/* Sports */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Sports</h3>
              <div className="space-y-2 text-gray-400">
                <div className="cursor-pointer hover:text-red-500 transition-colors">Cricket</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Football</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Tennis</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Esports</div>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div className="cursor-pointer hover:text-red-500 transition-colors">Help Center</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Contact Us</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Responsible Gaming</div>
                <div className="cursor-pointer hover:text-red-500 transition-colors">Terms & Conditions</div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-red-500/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div>© 2024 247BetBook. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-red-500 transition-colors">Privacy Policy</span>
              <span className="cursor-pointer hover:text-red-500 transition-colors">Terms of Service</span>
              <span className="cursor-pointer hover:text-red-500 transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
