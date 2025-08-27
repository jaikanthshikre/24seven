// app/casino-betting/page.jsx
export const metadata = {
  title: "Casino Betting | 24Seven Bet Book",
  description:
    "Play, bet, and win big with 24Seven Bet Book. Secure casino betting, live dealers, top games, and smart tips.",
};

export default function CasinoBettingPage() {
  return (
    <main className="min-h-screen bg-red-50 text-red-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-rose-600" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Casino Betting with 24Seven Bet Book – Play, Bet, and Win Big
          </h1>
          <p className="mt-5 max-w-3xl text-red-100 text-base sm:text-lg">
            Casino games have always been a source of thrill and entertainment. From the glamour of Las Vegas to the
            digital world of online gaming, casino betting continues to attract millions of players worldwide. With
            24Seven Bet Book, you can experience world-class casino betting right from your home or mobile device.
          </p>

          <div className="mt-8">
            <a
              href="#get-started"
              className="inline-flex items-center rounded-xl bg-white/95 px-5 py-3 text-sm font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-white/50 hover:bg-white"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Why Popular */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Why Casino Betting is So Popular</h2>
          <p className="mt-4 text-base leading-7 text-red-900/90">
            Casino betting combines fun, strategy, and the chance to win real money. From traditional card games like
            Poker and Blackjack to luck-based games like Roulette and Slots, the variety keeps the excitement alive.
            Platforms like 24Seven Bet Book make casino betting convenient, secure, and accessible to everyone.
          </p>
        </section>

        {/* Popular Games */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Popular Casino Games You Can Bet On</h2>
          <p className="mt-4 text-red-900/90">
            Explore a wide selection of games that let you test your luck and skills:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Roulette">
              Place bets on numbers, colors, or sections as the wheel spins.
            </Card>
            <Card title="Blackjack">
              A strategy-based card game where you aim to beat the dealer with 21.
            </Card>
            <Card title="Poker">
              A global favorite where skill, bluff, and strategy decide your winnings.
            </Card>
            <Card title="Baccarat">
              Simple and exciting — choose between Player, Banker, or Tie.
            </Card>
            <Card title="Slot Machines">
              Spin the reels and enjoy instant fun with big jackpots.
            </Card>
            <Card title="Live Dealer Games">
              Real-time casino experience with professional dealers streamed directly.
            </Card>
          </div>

          <p className="mt-6 text-red-900/90">
            This variety ensures every player, beginner or experienced, finds something exciting.
          </p>
        </section>

        {/* Live Casino */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-white shadow-sm ring-1 ring-red-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">The Thrill of Live Casino Betting</h2>
          <p className="mt-4 text-red-900/90">
            Join live dealer tables where professional dealers interact with you in real time. Whether it’s spinning the
            roulette wheel or dealing poker hands, live casino betting brings the atmosphere of a real casino straight
            to your screen.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">
            Why Choose 24Seven Bet Book for Casino Betting?
          </h2>
          <p className="mt-4 text-red-900/90">
            With so many online casinos available, trust and security are key. Here’s why we stand out:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem>Safe &amp; Secure Transactions – 100% secure payments and withdrawals.</ListItem>
            <ListItem>Instant Casino Betting ID – Quick registration and immediate access.</ListItem>
            <ListItem>Wide Variety of Games – From classic tables to modern slots.</ListItem>
            <ListItem>Best Odds &amp; Jackpots – Maximize your chances of winning.</ListItem>
            <ListItem>24/7 Customer Support – Help whenever you need it.</ListItem>
            <ListItem>Mobile-Friendly Casino – Play anytime, anywhere on your phone.</ListItem>
          </ul>
          <p className="mt-6 text-red-900/90">
            We focus on making your gaming experience smooth, exciting, and rewarding.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-red-600 text-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Casino Betting Tips for Beginners</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Start Small – Use low stakes while you learn.</TipItem>
            <TipItem>Know the Rules – Learn basics of Blackjack, Roulette, or Poker first.</TipItem>
            <TipItem>Set a Budget – Decide your spend and stick to it.</TipItem>
            <TipItem>Play Responsibly – It’s entertainment first; don’t chase losses.</TipItem>
            <TipItem>Try Free Games – Use demos to practice before real bets.</TipItem>
          </ul>
          <p className="mt-6 text-red-50">
            These tips help you enjoy casino betting while staying in control.
          </p>
        </section>

        {/* Future */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">The Future of Online Casino Betting</h2>
          <p className="mt-4 text-red-900/90">
            The industry is evolving fast with VR casinos, live-streamed games, and AI-driven predictions. At 24Seven
            Bet Book, we keep upgrading our platform to deliver the latest tools and world-class experiences.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Conclusion</h2>
          <p className="mt-4 text-red-900/90">
            Casino betting is about excitement, risk, and big rewards. Whether you love spinning the roulette wheel,
            testing your poker skills, or enjoying live dealer games, 24Seven Bet Book brings it all together in one
            secure, seamless platform.
          </p>

          <div className="mt-8">
            <a
              href="/signup"
              className="inline-flex items-center rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Create Your Betting ID
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ----- Reusable presentational helpers (same theme) ----- */

function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-red-100">
      <h3 className="text-lg font-semibold text-red-800">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-red-900/90">{children}</p>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-red-100">
      <span className="text-red-900/90">{children}</span>
    </li>
  );
}

function TipItem({ children }) {
  return (
    <li className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
      <span className="text-white">{children}</span>
    </li>
  );
}
