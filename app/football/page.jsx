// app/football-betting/page.jsx
export const metadata = {
  title: "Football Betting | 24Seven Bet Book",
  description:
    "Experience the thrill of football betting with 24Seven Bet Book. Secure platform, instant IDs, great odds, and live markets.",
};

export default function FootballBettingPage() {
  return (
    <main className="min-h-screen bg-red-50 text-red-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-rose-600" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Football Betting with 24Seven Bet Book – Experience the Thrill of the Game
          </h1>
          <p className="mt-5 max-w-3xl text-red-100 text-base sm:text-lg">
            Football, known as the world’s most popular sport, captivates billions across the globe. From the FIFA
            World Cup and UEFA Champions League to Premier League, La Liga, Serie A, and Bundesliga, the action never
            stops. At 24Seven Bet Book, we bring you a secure, fast, and competitive football betting experience with
            instant betting IDs and great odds.
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
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Why Football Betting is So Popular</h2>
          <p className="mt-4 text-base leading-7 text-red-900/90">
            Football offers endless excitement for fans and bettors alike. A single match can have multiple betting
            possibilities: predicting the winner, number of goals, first scorer, and more. With matches played almost
            daily across leagues and tournaments, football betting provides constant opportunities to win.
          </p>
        </section>

        {/* Popular Markets */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Popular Football Betting Markets</h2>
          <p className="mt-4 text-red-900/90">
            At 24Seven Bet Book, we provide a wide range of football betting options to cater to both beginners and professionals:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Match Result (1X2)">
              Bet on the home team, away team, or a draw.
            </Card>
            <Card title="Both Teams to Score (BTTS)">
              Wager on whether both teams will score during the match.
            </Card>
            <Card title="Over/Under Goals">
              Predict if the total goals will be over or under a set number (e.g., Over 2.5).
            </Card>
            <Card title="First Goal Scorer">
              Bet on which player will score the opening goal.
            </Card>
            <Card title="Correct Score">
              Predict the exact final score of the match.
            </Card>
            <Card title="Handicap Betting">
              Give one team a virtual advantage or disadvantage to balance the odds.
            </Card>
            <Card title="Live / In-Play Betting">
              Bet on goals, corners, cards, and results as the match unfolds.
            </Card>
          </div>

          <p className="mt-6 text-red-900/90">
            These betting markets ensure you never run out of options, no matter which match you choose.
          </p>
        </section>

        {/* Live Betting */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-white shadow-sm ring-1 ring-red-100 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Live Football Betting – Real-Time Thrill</h2>
          <p className="mt-4 text-red-900/90">
            Place bets while the match is happening. Predict the next goal, number of corners, or even a penalty
            decision. Real-time betting keeps you engaged and makes the experience more interactive and rewarding.
          </p>
        </section>

        {/* Why Choose */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">
            Why Choose 24Seven Bet Book for Football Betting?
          </h2>
          <p className="mt-4 text-red-900/90">
            Trust and reliability matter. Here’s why we’re the right choice:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem>Safe &amp; Secure Platform – 100% trusted environment for betting.</ListItem>
            <ListItem>Instant Football Betting ID – Quick and hassle-free registration.</ListItem>
            <ListItem>Best Odds &amp; Markets – Maximize your winnings with high-value odds.</ListItem>
            <ListItem>24/7 Customer Support – Always available to assist you.</ListItem>
            <ListItem>Mobile-Friendly Access – Bet anytime, anywhere, with ease.</ListItem>
          </ul>
          <p className="mt-6 text-red-900/90">
            With us, you don’t just bet — you enjoy a smooth, professional, and thrilling experience.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-red-600 text-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Football Betting Tips for Beginners</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Study Team Form – Recent performance, injuries, head-to-head records.</TipItem>
            <TipItem>Understand Markets – Start with match result before complex bets.</TipItem>
            <TipItem>Keep Track of Lineups – Player availability changes outcomes.</TipItem>
            <TipItem>Manage Your Bankroll – Bet responsibly; don’t chase losses.</TipItem>
            <TipItem>Follow Expert Insights – Analysts and tipsters can help.</TipItem>
          </ul>
          <p className="mt-6 text-red-50">
            By following these tips, you can improve your decision-making while enjoying football betting responsibly.
          </p>
        </section>

        {/* Tournaments */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Football Tournaments You Can Bet On</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <ListItem>FIFA World Cup</ListItem>
            <ListItem>UEFA Champions League</ListItem>
            <ListItem>English Premier League</ListItem>
            <ListItem>La Liga (Spain)</ListItem>
            <ListItem>Serie A (Italy)</ListItem>
            <ListItem>Bundesliga (Germany)</ListItem>
            <ListItem>Major League Soccer (USA)</ListItem>
            <ListItem>International Friendlies</ListItem>
          </ul>
          <p className="mt-6 text-red-900/90">
            With so many matches year-round, football betting always offers fresh opportunities.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800">Conclusion</h2>
          <p className="mt-4 text-red-900/90">
            Football betting is more than just predicting a score — it’s about strategy, analysis, and passion for the
            game. With exciting markets, live betting, and nonstop tournaments, it’s a global phenomenon. At 24Seven
            Bet Book, we ensure a safe, reliable, and thrilling betting experience with high odds, instant IDs, and
            round-the-clock support.
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

/* ----- Small presentational helpers (reuse across pages) ----- */

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
