import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Activity,
  Star,
  Trophy,
  Users,
  MapPin,
  Zap,
  ArrowRight,
} from "lucide-react";

const sports = [
  {
    name: "Cricket",
    icon: "🏏",
    color: "from-blue-400 to-blue-600",
    description: "Play cricket with players near you",
  },
  {
    name: "Kabaddi",
    icon: "🤸",
    color: "from-orange-400 to-orange-600",
    description: "Experience traditional kabaddi",
  },
  {
    name: "Volleyball",
    icon: "🏐",
    color: "from-yellow-400 to-yellow-600",
    description: "Team up for exciting volleyball",
  },
  {
    name: "Chess",
    icon: "♟️",
    color: "from-purple-400 to-purple-600",
    description: "Challenge your mind in chess",
  },
];

const features = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Find Playgrounds",
    description: "Discover and book playgrounds near you for your favorite sport",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Rate Players",
    description: "Build your reputation by playing well and earning ratings",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Get Discovered",
    description: "Play well and Vibekhel team may support your sporting journey",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Share Playground",
    description: "Own a playground? List it and grow your community",
  },
];

export default function Index() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 py-20 sm:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white rounded-full border border-primary/30">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Play Today, Grow Tomorrow
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Your Sports,{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Your Community
                  </span>
                </h1>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Book free slots for Cricket, Kabaddi, Volleyball, and Chess.
                  Meet talented players, build your rating, and get discovered by
                  Vibekhel for sponsorship and national/international support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/sports">
                    <Button className="w-full sm:w-auto h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium group">
                      Start Playing Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="https://www.youtube.com/@Vibekhelcom" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto h-12 text-base font-medium"
                    >
                      Watch Videos
                    </Button>
                  </a>
                </div>

                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-3xl font-bold text-foreground">10K+</p>
                    <p className="text-sm text-foreground/60">Active Players</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-foreground/60">Playgrounds</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">4</p>
                    <p className="text-sm text-foreground/60">Sports</p>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-96 sm:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="w-32 h-32 text-primary/30 mx-auto mb-4" />
                      <p className="text-foreground/40 font-medium">
                        Sports Awaiting You
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sports Section */}
        <section className="py-20 sm:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Choose Your Sport
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Select from our popular sports and start your journey with
                players across your region
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sports.map((sport) => (
                <Link key={sport.name} to="/sports">
                  <div className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                    <div
                      className={`h-32 bg-gradient-to-br ${sport.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {sport.icon}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {sport.name}
                      </h3>
                      <p className="text-foreground/60 text-sm">
                        {sport.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-br from-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Vibekhel?
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                A complete ecosystem for sports enthusiasts to play, compete, and
                grow
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Sports Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of players, get discovered, and chase your sporting
              dreams with Vibekhel
            </p>
            <Link to="/sports">
              <Button className="h-12 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-medium text-base px-8 group">
                Book Your First Slot
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg" />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F81116c852a0a476cac76e5d4cd666d5e%2Faf2a025afd0645d682299759cadb7a82?format=webp&width=80&height=120"
                      alt="Vibekhel"
                      className="relative w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="font-bold text-foreground">Vibekhel</span>
                </div>
                <p className="text-foreground/60 text-sm">
                  Your sports, your community, your future.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-4">Sports</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Cricket
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Kabaddi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Volleyball
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Chess
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <Link to="/" className="hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/booking" className="hover:text-primary transition-colors">
                      Book Slot
                    </Link>
                  </li>
                  <li>
                    <Link to="/players" className="hover:text-primary transition-colors">
                      Players
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a
                      href="https://www.youtube.com/@Vibekhelcom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center">
              <p className="text-foreground/60 text-sm">
                © 2024 Vibekhel. All rights reserved. Play together, grow
                together.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
