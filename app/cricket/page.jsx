import Link from "next/link";

// app/cricket-betting/page.jsx
export const metadata = {
  title: "Cricket Betting | 24Seven Bet Book",
  description:
    "Your ultimate guide to cricket betting with 24Seven Bet Book. Safe, secure, and exciting betting on your favorite matches.",
};

export default function CricketBettingPage() {
  return (
    <main className="min-h-screen bg-red-50 text-red-900 py-10">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-rose-600" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Cricket Betting with 24Seven Bet Book – Your Ultimate Guide
          </h1>
          <p className="mt-5 max-w-3xl text-red-100 text-base sm:text-lg">
            Cricket is more than just a sport in countries like India, England, and Australia – it’s an emotion.
            Millions of fans not only enjoy watching the matches but also engage in cricket betting to make
            the game even more thrilling. With the rise of digital platforms, betting on cricket has become
            easier, faster, and more secure. At 24Seven Bet Book, we bring you a safe, reliable, and exciting
            way to place your bets on your favorite cricket matches.
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
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Why Cricket Betting is So Popular</h2>
          <p className="mt-4 text-base leading-7 text-red-900/90">
            Cricket has one of the largest fan bases in the world. From the ICC World Cup and IPL to bilateral
            series and domestic tournaments, there’s always a cricket match happening somewhere. Betting on
            cricket allows fans to turn their passion into profit. Whether it’s predicting the winning team,
            the top batsman, or the number of boundaries, cricket betting offers multiple ways to win.
          </p>
        </section>

        {/* Types of Bets */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Types of Cricket Bets You Can Place</h2>
          <p className="mt-4 text-red-900/90">
            At 24Seven Bet Book, we provide a variety of cricket betting options to suit both beginners and
            experienced bettors:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Match Winner Bet">
              Predict which team will win the match.
            </Card>
            <Card title="Toss Bet">
              Place your bet on which team will win the toss.
            </Card>
            <Card title="Top Batsman / Bowler">
              Guess the highest run scorer or wicket-taker of the match.
            </Card>
            <Card title="Over/Under Runs">
              Bet on whether the total runs in a match will be higher or lower than a set number.
            </Card>
            <Card title="Live Betting">
              Place bets while the match is happening and enjoy instant thrill.
            </Card>
          </div>

          <p className="mt-6 text-red-900/90">
            These options make cricket betting versatile and entertaining.
          </p>
        </section>

        {/* Live Betting */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-white shadow-sm ring-1 ring-red-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Live Cricket Betting – The Real Game Changer</h2>
          <p className="mt-4 text-red-900/90">
            One of the most exciting features of cricket betting at 24Seven Bet Book is live betting. This allows users
            to place bets as the game unfolds. For example, you can bet on the next over’s runs, next wicket, or the
            partnership score while the match is live. It’s fast, dynamic, and keeps the adrenaline rushing throughout
            the match.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Why Choose 24Seven Bet Book?</h2>
          <p className="mt-4 text-red-900/90">
            With so many betting platforms out there, you might be wondering why you should choose us. Here’s why:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem>Trusted &amp; Secure Platform – We ensure 100% safe and secure transactions.</ListItem>
            <ListItem>Instant ID Creation – Get your cricket betting ID within minutes and start betting right away.</ListItem>
            <ListItem>Best Odds &amp; Markets – We provide highly competitive odds to maximize your winnings.</ListItem>
            <ListItem>24/7 Customer Support – Our support team is available round the clock to assist you.</ListItem>
            <ListItem>Mobile-Friendly Access – Bet anytime, anywhere, using your smartphone.</ListItem>
          </ul>
          <p className="mt-6 text-red-900/90">
            At 24Seven Bet Book, we focus on delivering a seamless betting experience so you can enjoy the game without any hassles.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-red-600 text-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Cricket Betting Tips for Beginners</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Start Small – Begin with small bets until you understand the game better.</TipItem>
            <TipItem>Do Your Research – Check team form, player stats, and pitch conditions before betting.</TipItem>
            <TipItem>Manage Your Bankroll – Never bet more than you can afford to lose.</TipItem>
            <TipItem>Follow Expert Predictions – Insights from cricket experts can guide your decisions.</TipItem>
            <TipItem>Stay Disciplined – Don’t chase losses; bet responsibly.</TipItem>
          </ul>
          <p className="mt-6 text-red-50">
            By following these simple strategies, you can enjoy cricket betting while minimizing risks.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Conclusion</h2>
          <p className="mt-4 text-red-900/90">
            Cricket betting has become an exciting way for fans to engage with the sport they love. With tournaments
            like the IPL, World Cup, T20 leagues, and international series, there are endless opportunities to place
            your bets and win big. At 24Seven Bet Book, we combine entertainment with reliability, giving you the ultimate
            betting experience.
          </p>
          <p className="mt-4 text-red-900/90">
            So, if you are ready to take your cricket passion to the next level, join 24Seven Bet Book today and enjoy
            cricket betting like never before.
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

/* ----- Small presentational helpers (no external libs) ----- */

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
