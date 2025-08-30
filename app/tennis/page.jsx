import Link from "next/link";

// app/tennis-betting/page.jsx
export const metadata = {
  title: "Tennis Betting | 24Seven Bet Book",
  description:
    "Play, predict, and win with 24Seven Bet Book. Secure tennis betting, live markets, top odds, and smart tips for every level.",
};

export default function TennisBettingPage() {
  return (
    <main className="min-h-screen bg-red-50 text-red-900 py-10">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-rose-600" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Tennis Betting with 24Seven Bet Book – Play, Predict, and Win
          </h1>
          <p className="mt-5 max-w-3xl text-red-100 text-base sm:text-lg">
            Tennis is one of the most dynamic and fast-paced sports in the world. From the Grand Slam tournaments
            like Wimbledon, French Open, US Open, and Australian Open to ATP and WTA events, tennis attracts
            millions of fans globally. With every serve, rally, and tiebreak, the excitement never stops — and betting
            on tennis makes it even more thrilling. At 24Seven Bet Book, we bring you the best platform for tennis
            betting with secure transactions, live markets, and the best odds.
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
        {/* Why Growing */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">
            Why Tennis Betting is Growing Worldwide
          </h2>
          <p className="mt-4 text-base leading-7 text-red-900/90">
            Tennis has a year-round calendar with matches across time zones. Unlike seasonal sports, you can
            bet almost every week of the year. The one-on-one nature of the game makes it easier to analyze
            players, study stats, and predict outcomes. Whether it’s a big final or a first-round clash, tennis
            betting keeps fans engaged with multiple opportunities to win.
          </p>
        </section>

        {/* Popular Markets */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">
            Popular Tennis Betting Markets
          </h2>
          <p className="mt-4 text-red-900/90">
            At 24Seven Bet Book, we provide a wide variety of betting markets so that every bettor finds something exciting:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Match Winner">Predict who will win the match.</Card>
            <Card title="Set Betting">Wager on the exact scoreline, such as 2-0 or 3-1.</Card>
            <Card title="Over/Under Games">
              Bet on whether the total number of games will be above or below a set figure.
            </Card>
            <Card title="Handicap Betting">
              A player starts with an advantage or disadvantage to balance the matchup.
            </Card>
            <Card title="First Set Winner">Guess which player will take the opening set.</Card>
            <Card title="Live / In-Play Betting">
              Bet while the match is live: next game, next set, even the next point.
            </Card>
          </div>

          <p className="mt-6 text-red-900/90">
            These options ensure that both beginners and experienced bettors enjoy tennis betting to the fullest.
          </p>
        </section>

        {/* Live Betting */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-white shadow-sm ring-1 ring-red-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">
            Live Tennis Betting – The Ultimate Thrill
          </h2>
          <p className="mt-4 text-red-900/90">
            Imagine watching a Grand Slam final and placing bets on who will win the next game or whether the set
            will go into a tiebreak. The fast-paced nature of tennis makes live betting intense, rewarding, and
            entertaining.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">
            Why Bet on Tennis with 24Seven Bet Book?
          </h2>
          <p className="mt-4 text-red-900/90">
            We understand that tennis betting requires trust, security, and instant access. Here’s why 24Seven Bet Book is your best choice:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem>Trusted Platform – Safe and secure betting environment.</ListItem>
            <ListItem>Quick ID Creation – Get your betting ID instantly and start playing.</ListItem>
            <ListItem>High Odds &amp; Wide Markets – Competitive odds to maximize your winnings.</ListItem>
            <ListItem>24/7 Customer Support – Always available to help you whenever needed.</ListItem>
            <ListItem>Mobile-Friendly – Bet on tennis matches from anywhere, anytime.</ListItem>
          </ul>
          <p className="mt-6 text-red-900/90">
            With us, you don’t just place bets — you enjoy a smooth and reliable experience.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-red-600 text-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Tennis Betting Tips for Beginners</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Know the Surface – Clay, grass, and hard courts affect play styles.</TipItem>
            <TipItem>Follow Player Form – Recent results, injuries, head-to-head records.</TipItem>
            <TipItem>Consider Tournament Stage – Early rounds vs. quarters and beyond.</TipItem>
            <TipItem>Stay Updated – Weather can affect outdoor matches, especially Slams.</TipItem>
            <TipItem>Manage Your Bankroll – Start small, scale as you gain experience.</TipItem>
          </ul>
          <p className="mt-6 text-red-50">
            These tips will help you make informed decisions while enjoying tennis betting responsibly.
          </p>
        </section>

        {/* Future */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">The Future of Tennis Betting</h2>
          <p className="mt-4 text-red-900/90">
            With technology advancing, tennis betting is becoming more interactive. Features like live streaming,
            instant stats, and AI-driven predictions make betting smarter and more engaging. At 24Seven Bet Book,
            we are constantly upgrading our platform to provide you with the latest betting tools and a world-class
            experience.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Conclusion</h2>
          <p className="mt-4 text-red-900/90">
            Tennis betting is a thrilling way to connect with the sport you love. With exciting markets, live betting,
            and non-stop tournaments, it offers countless opportunities to win. At 24Seven Bet Book, we combine
            reliability, high odds, and unmatched customer support to give you the ultimate tennis betting experience.
          </p>

           <div className="mt-8">
            <Link href="http://wa.link/iwant24sevenid"
              className="inline-flex items-center rounded-xl bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              Create Your Betting ID
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ----- Small presentational helpers (same as cricket page) ----- */

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
