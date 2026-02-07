import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  MapPin,
  Star,
  Plus,
  Edit2,
  Share2,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const playgroundsOwned = [
  {
    id: 1,
    name: "Central Sports Ground",
    address: "Downtown, City Center",
    rating: 4.8,
    reviews: 342,
    sports: ["Cricket", "Volleyball"],
    totalBookings: 1240,
    thisMonth: 156,
    avgRating: 4.8,
    status: "Active",
  },
  {
    id: 2,
    name: "Green Valley Sports Complex",
    address: "North District",
    rating: 4.6,
    reviews: 218,
    sports: ["Cricket", "Kabaddi"],
    totalBookings: 892,
    thisMonth: 98,
    avgRating: 4.6,
    status: "Active",
  },
];

export default function Playgrounds() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <>
      <Header />
      <main className="w-full bg-gradient-to-br from-primary/5 to-secondary/5 min-h-screen">
        {/* Header Section */}
        <section className="bg-background border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  My Playgrounds
                </h1>
                <p className="text-lg text-foreground/60">
                  Manage your sports facilities and grow your community
                </p>
              </div>
              <Button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground hidden sm:flex"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Playground
              </Button>
            </div>
          </div>
        </section>

        {/* Mobile Add Button */}
        <div className="sm:hidden bg-background border-b border-border p-4">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Playground
          </Button>
        </div>

        {/* Add Playground Form */}
        {showAddForm && (
          <section className="bg-background border-b border-border p-6 sm:p-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Add New Playground
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Playground Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Central Sports Ground"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-card text-foreground placeholder-foreground/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Downtown, City Center"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-card text-foreground placeholder-foreground/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Sports Available
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Cricket", "Kabaddi", "Volleyball", "Chess"].map(
                      (sport) => (
                        <label key={sport} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-border"
                          />
                          <span className="text-foreground">{sport}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Morning Slots (06 AM - 12 PM)
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-card text-foreground">
                      <option>Available</option>
                      <option>Unavailable</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Evening Slots (4 PM - 10 PM)
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-card text-foreground">
                      <option>Available</option>
                      <option>Unavailable</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Tell players about your playground..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors bg-card text-foreground placeholder-foreground/40"
                    rows={4}
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    List Playground
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Playgrounds List */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {playgroundsOwned.map((playground) => (
                <div
                  key={playground.id}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">
                            {playground.name}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              playground.status === "Active"
                                ? "bg-accent/20 text-accent"
                                : "bg-destructive/20 text-destructive"
                            }`}
                          >
                            {playground.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/60 text-sm mb-3">
                          <MapPin className="w-4 h-4" />
                          {playground.address}
                        </div>

                        {/* Sports */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {playground.sports.map((sport) => (
                            <span
                              key={sport}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {sport}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="text-right flex-shrink-0 hidden sm:block">
                        <div className="flex items-center gap-1 justify-end mb-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="text-2xl font-bold text-foreground">
                            {playground.rating}
                          </span>
                        </div>
                        <p className="text-foreground/60 text-sm">
                          {playground.reviews} reviews
                        </p>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                      <div className="text-center sm:text-left">
                        <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>This Month</span>
                        </div>
                        <p className="text-2xl font-bold text-foreground">
                          {playground.thisMonth}
                        </p>
                      </div>

                      <div className="text-center sm:text-left">
                        <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                          <Users className="w-4 h-4" />
                          <span>Total Bookings</span>
                        </div>
                        <p className="text-2xl font-bold text-foreground">
                          {playground.totalBookings}
                        </p>
                      </div>

                      <div className="text-center sm:text-left">
                        <div className="flex items-center gap-2 text-foreground/60 text-sm mb-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>Avg Rating</span>
                        </div>
                        <p className="text-2xl font-bold text-foreground">
                          {playground.avgRating}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="outline"
                        className="flex items-center justify-center sm:justify-start"
                      >
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit Details
                      </Button>

                      <Button
                        variant="outline"
                        className="flex items-center justify-center sm:justify-start"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Link
                      </Button>

                      <Button
                        variant="outline"
                        className="flex-1 sm:flex-none"
                      >
                        View Analytics
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {playgroundsOwned.length === 0 && (
              <div className="text-center py-16 bg-card rounded-2xl border border-border">
                <MapPin className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
                <p className="text-lg text-foreground/60 mb-4">
                  You haven't added any playgrounds yet
                </p>
                <Button
                  onClick={() => setShowAddForm(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Your First Playground
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-background border-t border-border py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Why List Your Playground?
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                  💰
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Earn Revenue
                  </h3>
                  <p className="text-foreground/60">
                    Get bookings from players and grow your business
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                  👥
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Build Community
                  </h3>
                  <p className="text-foreground/60">
                    Connect with passionate players and organize events
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Track Analytics
                  </h3>
                  <p className="text-foreground/60">
                    Monitor bookings, ratings, and player feedback
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                  🌟
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Get Visibility
                  </h3>
                  <p className="text-foreground/60">
                    Feature on Vibekhel and reach thousands of players
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
