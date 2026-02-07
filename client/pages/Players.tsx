import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Star, TrendingUp, Trophy, Search, Filter } from "lucide-react";
import { useState } from "react";

const playersData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    sport: "Cricket",
    rating: 4.95,
    totalRatings: 243,
    matches: 45,
    wins: 38,
    avatar: "🏏",
    badge: "Star Player",
  },
  {
    id: 2,
    name: "Priya Sharma",
    sport: "Volleyball",
    rating: 4.87,
    totalRatings: 189,
    matches: 32,
    wins: 28,
    avatar: "🏐",
    badge: "Champion",
  },
  {
    id: 3,
    name: "Arjun Singh",
    sport: "Kabaddi",
    rating: 4.92,
    totalRatings: 156,
    matches: 28,
    wins: 24,
    avatar: "🤸",
    badge: "Star Player",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    sport: "Chess",
    rating: 4.98,
    totalRatings: 112,
    matches: 42,
    wins: 39,
    avatar: "♟️",
    badge: "Grandmaster",
  },
  {
    id: 5,
    name: "Vikas Patel",
    sport: "Cricket",
    rating: 4.81,
    totalRatings: 198,
    matches: 38,
    wins: 32,
    avatar: "🏏",
    badge: "Expert",
  },
  {
    id: 6,
    name: "Neha Verma",
    sport: "Volleyball",
    rating: 4.76,
    totalRatings: 134,
    matches: 24,
    wins: 20,
    avatar: "🏐",
    badge: "Rising Star",
  },
  {
    id: 7,
    name: "Rohit Desai",
    sport: "Kabaddi",
    rating: 4.88,
    totalRatings: 167,
    matches: 31,
    wins: 27,
    avatar: "🤸",
    badge: "Expert",
  },
  {
    id: 8,
    name: "Deepika Singh",
    sport: "Chess",
    rating: 4.85,
    totalRatings: 145,
    matches: 38,
    wins: 33,
    avatar: "♟️",
    badge: "Master",
  },
];

export default function Players() {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlayers = playersData.filter((player) => {
    const matchesSport = !selectedSport || player.sport === selectedSport;
    const matchesSearch =
      !searchQuery ||
      player.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSport && matchesSearch;
  });

  const sports = ["Cricket", "Kabaddi", "Volleyball", "Chess"];

  return (
    <>
      <Header />
      <main className="w-full bg-gradient-to-br from-primary/5 to-secondary/5 min-h-screen">
        {/* Header Section */}
        <section className="bg-background border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  Player Leaderboard
                </h1>
                <p className="text-lg text-foreground/60">
                  Discover top-rated players and connect with the best athletes
                </p>
              </div>
              <Trophy className="w-16 h-16 text-primary/20 hidden sm:block" />
            </div>

            {/* Search and Filter */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <input
                  type="text"
                  placeholder="Search players..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder-foreground/40"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedSport(null)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                    !selectedSport
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  All Sports
                </button>
                {sports.map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSelectedSport(sport)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 text-sm font-medium ${
                      selectedSport === sport
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-primary/50"
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Players Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPlayers.length > 0 ? (
              <div className="space-y-4">
                {filteredPlayers.map((player, index) => (
                  <div
                    key={player.id}
                    className="bg-background rounded-2xl border border-border p-6 hover:shadow-md transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      {/* Rank Badge */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary">
                          #{index + 1}
                        </span>
                      </div>

                      {/* Avatar and Info */}
                      <div className="flex items-center gap-4 flex-1">
                        <div className="text-4xl flex-shrink-0">{player.avatar}</div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-bold text-foreground">
                              {player.name}
                            </h3>
                            <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                              {player.badge}
                            </span>
                          </div>
                          <p className="text-foreground/60 text-sm">
                            {player.sport} • {player.matches} matches played
                          </p>
                        </div>
                      </div>

                      {/* Stats - Hidden on Mobile */}
                      <div className="hidden sm:flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-center gap-1 justify-end mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-bold text-foreground">
                              {player.rating}
                            </span>
                          </div>
                          <p className="text-foreground/60 text-xs">
                            {player.totalRatings} ratings
                          </p>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-1 justify-end mb-1">
                            <TrendingUp className="w-4 h-4 text-secondary" />
                            <span className="font-bold text-foreground">
                              {player.wins}/{player.matches}
                            </span>
                          </div>
                          <p className="text-foreground/60 text-xs">
                            {Math.round((player.wins / player.matches) * 100)}%
                            win rate
                          </p>
                        </div>
                      </div>

                      {/* Mobile Stats */}
                      <div className="sm:hidden flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="font-bold text-foreground">
                            {player.rating}
                          </span>
                        </div>
                        <p className="text-foreground/60 text-xs">
                          {Math.round((player.wins / player.matches) * 100)}% win
                        </p>
                      </div>

                      {/* View Profile Button */}
                      <div className="hidden md:block">
                        <Button
                          variant="outline"
                          className="whitespace-nowrap"
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>

                    {/* Mobile View Profile Button */}
                    <div className="md:hidden mt-4 pt-4 border-t border-border">
                      <Button variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-foreground/60 mb-4">
                  No players found matching your criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSport(null);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Join Our Community of Athletes
            </h2>
            <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
              Play matches, build your rating, and get discovered by the Vibekhel
              team for sponsorship opportunities
            </p>
            <Link to="/sports">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Your First Match
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
