import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { ChevronRight, Users, MapPin, Clock } from "lucide-react";

const sportsData = [
  {
    id: "cricket",
    name: "Cricket",
    icon: "🏏",
    color: "from-blue-400 to-blue-600",
    players: 3847,
    playgrounds: 156,
    description: "The world's most popular bat-and-ball sport",
    formats: ["T20", "ODI", "Test"],
    stats: {
      totalMatches: 12453,
      activeGroups: 342,
      avgRating: 4.8,
    },
  },
  {
    id: "kabaddi",
    name: "Kabaddi",
    icon: "🤸",
    color: "from-orange-400 to-orange-600",
    players: 2156,
    playgrounds: 89,
    description: "Traditional Indian team sport with ancient roots",
    formats: ["Pro", "Casual", "Training"],
    stats: {
      totalMatches: 5421,
      activeGroups: 178,
      avgRating: 4.7,
    },
  },
  {
    id: "volleyball",
    name: "Volleyball",
    icon: "🏐",
    color: "from-yellow-400 to-yellow-600",
    players: 1834,
    playgrounds: 67,
    description: "Dynamic team sport played on sand and indoor courts",
    formats: ["6v6", "4v4", "2v2"],
    stats: {
      totalMatches: 4123,
      activeGroups: 134,
      avgRating: 4.6,
    },
  },
  {
    id: "chess",
    name: "Chess",
    icon: "♟️",
    color: "from-purple-400 to-purple-600",
    players: 956,
    playgrounds: 45,
    description: "The game of kings - a test of strategy and intellect",
    formats: ["Blitz", "Rapid", "Classical"],
    stats: {
      totalMatches: 2847,
      activeGroups: 89,
      avgRating: 4.9,
    },
  },
];

export default function Sports() {
  return (
    <>
      <Header />
      <main className="w-full bg-background min-h-screen">
        {/* Header Section */}
        <section className="bg-background border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Choose Your Sport
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Select a sport to explore active players, playgrounds, and upcoming
              games in your area
            </p>
          </div>
        </section>

        {/* Sports Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {sportsData.map((sport) => (
                <Link key={sport.id} to={`/booking?sport=${sport.id}`}>
                  <div className="h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    {/* Sport Header */}
                    <div
                      className={`h-40 bg-gradient-to-br ${sport.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full -ml-12 -mb-12" />
                      </div>
                      <div className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                        {sport.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {sport.name}
                          </h3>
                          <p className="text-foreground/60 text-sm mt-1">
                            {sport.description}
                          </p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-y border-border">
                        <div>
                          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                            <Users className="w-4 h-4" />
                            <span>Players</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">
                            {sport.players.toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                            <MapPin className="w-4 h-4" />
                            <span>Playgrounds</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">
                            {sport.playgrounds}
                          </p>
                        </div>
                      </div>

                      {/* Formats */}
                      <div className="mb-6">
                        <p className="text-foreground/60 text-sm font-medium mb-2">
                          Formats
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sport.formats.map((format) => (
                            <span
                              key={format}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {format}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                        Book {sport.name} Slot
                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Don't see your sport?
            </h2>
            <p className="text-foreground/60 mb-8">
              Let us know which sport you'd like to play, and we'll work to bring
              it to Vibekhel soon
            </p>
            <Button variant="outline">Suggest a Sport</Button>
          </div>
        </section>
      </main>
    </>
  );
}
