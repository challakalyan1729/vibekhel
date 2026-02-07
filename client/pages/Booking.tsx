import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { MapPin, Clock, Users, Star, ChevronRight } from "lucide-react";
import { useState } from "react";

const playgroundsData = [
  {
    id: 1,
    name: "Central Sports Ground",
    address: "Downtown, City Center",
    rating: 4.8,
    reviews: 342,
    sports: ["cricket", "volleyball"],
    slots: [
      { time: "06:00 AM", available: true },
      { time: "07:00 AM", available: true },
      { time: "08:00 AM", available: false },
      { time: "05:00 PM", available: true },
      { time: "06:00 PM", available: true },
      { time: "07:00 PM", available: true },
    ],
  },
  {
    id: 2,
    name: "Green Valley Sports Complex",
    address: "North District",
    rating: 4.6,
    reviews: 218,
    sports: ["cricket", "kabaddi"],
    slots: [
      { time: "06:00 AM", available: false },
      { time: "07:00 AM", available: true },
      { time: "08:00 AM", available: true },
      { time: "04:00 PM", available: true },
      { time: "05:00 PM", available: true },
      { time: "07:00 PM", available: false },
    ],
  },
  {
    id: 3,
    name: "Beachside Volleyball Arena",
    address: "Coastal Area",
    rating: 4.7,
    reviews: 156,
    sports: ["volleyball", "chess"],
    slots: [
      { time: "07:00 AM", available: true },
      { time: "08:00 AM", available: true },
      { time: "09:00 AM", available: true },
      { time: "04:00 PM", available: true },
      { time: "06:00 PM", available: true },
      { time: "08:00 PM", available: false },
    ],
  },
  {
    id: 4,
    name: "Elite Chess Academy",
    address: "Business District",
    rating: 4.9,
    reviews: 89,
    sports: ["chess"],
    slots: [
      { time: "10:00 AM", available: true },
      { time: "02:00 PM", available: true },
      { time: "03:00 PM", available: true },
      { time: "04:00 PM", available: false },
      { time: "05:00 PM", available: true },
      { time: "07:00 PM", available: true },
    ],
  },
];

export default function Booking() {
  const [searchParams] = useSearchParams();
  const selectedSport = searchParams.get("sport") || "cricket";
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [selectedPlayground, setSelectedPlayground] = useState<number | null>(
    null
  );
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const filteredPlaygrounds = playgroundsData.filter((pg) =>
    pg.sports.includes(selectedSport)
  );

  const sportNames: Record<string, string> = {
    cricket: "Cricket",
    kabaddi: "Kabaddi",
    volleyball: "Volleyball",
    chess: "Chess",
  };

  return (
    <>
      <Header />
      <main className="w-full bg-background min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
              Book a {sportNames[selectedSport]} Slot
            </h1>
            <p className="text-lg text-foreground/60">
              Find and book the perfect playground for your game
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Filters and Booking */}
            <div className="lg:col-span-2">
              {/* Date Selection */}
              <div className="bg-background rounded-2xl border border-border p-6 mb-6">
                <h2 className="text-lg font-bold text-foreground mb-4">
                  Select Date
                </h2>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const dateStr = date.toISOString().split("T")[0];
                    const dayName = date.toLocaleDateString("en-US", {
                      weekday: "short",
                    });
                    const dayNum = date.getDate();

                    return (
                      <button
                        key={dateStr}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`flex-shrink-0 p-4 rounded-lg border transition-all duration-300 ${
                          selectedDate === dateStr
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="text-sm font-medium">{dayName}</div>
                        <div className="text-lg font-bold">{dayNum}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Playgrounds List */}
              <div className="space-y-4">
                {filteredPlaygrounds.map((playground) => (
                  <div
                    key={playground.id}
                    className={`bg-background rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                      selectedPlayground === playground.id
                        ? "border-primary/50 shadow-md"
                        : "border-border hover:border-primary/30"
                    }`}
                    onClick={() => setSelectedPlayground(playground.id)}
                  >
                    <div className="p-6">
                      {/* Playground Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {playground.name}
                          </h3>
                          <div className="flex items-center gap-2 text-foreground/60 text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            {playground.address}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          <span className="font-bold text-foreground">
                            {playground.rating}
                          </span>
                          <span className="text-foreground/60 text-sm">
                            ({playground.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Slots */}
                      {selectedPlayground === playground.id && (
                        <div className="pt-6 border-t border-border">
                          <p className="text-sm font-medium text-foreground/60 mb-4">
                            Available Time Slots
                          </p>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
                            {playground.slots.map((slot, idx) => (
                              <button
                                key={idx}
                                disabled={!slot.available}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (slot.available) {
                                    setSelectedSlot(slot.time);
                                  }
                                }}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all duration-300 ${
                                  !slot.available
                                    ? "bg-muted text-muted-foreground border-border cursor-not-allowed opacity-50"
                                    : selectedSlot === slot.time
                                      ? "bg-primary text-primary-foreground border-primary"
                                      : "bg-card border-border hover:border-primary/50"
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>

                          {selectedSlot && (
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                              Confirm Booking
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl text-primary-foreground p-8 sticky top-20">
                <h3 className="text-xl font-bold mb-6">Booking Summary</h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-primary-foreground/20">
                  <div>
                    <p className="text-primary-foreground/80 text-sm">Sport</p>
                    <p className="text-lg font-bold">
                      {sportNames[selectedSport]}
                    </p>
                  </div>

                  <div>
                    <p className="text-primary-foreground/80 text-sm">Date</p>
                    <p className="text-lg font-bold">
                      {new Date(selectedDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  {selectedPlayground && (
                    <div>
                      <p className="text-primary-foreground/80 text-sm">
                        Playground
                      </p>
                      <p className="text-lg font-bold">
                        {playgroundsData.find((p) => p.id === selectedPlayground)
                          ?.name}
                      </p>
                    </div>
                  )}

                  {selectedSlot && (
                    <div>
                      <p className="text-primary-foreground/80 text-sm">Time</p>
                      <p className="text-lg font-bold">{selectedSlot}</p>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <p className="text-primary-foreground/80 text-sm mb-2">
                    Price
                  </p>
                  <p className="text-3xl font-bold">FREE</p>
                  <p className="text-primary-foreground/80 text-xs mt-1">
                    No booking charges
                  </p>
                </div>

                <Button
                  disabled={!selectedSlot}
                  className={`w-full h-12 font-medium transition-all duration-300 ${
                    selectedSlot
                      ? "bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
                      : "bg-primary-foreground/50 text-primary/50 cursor-not-allowed"
                  }`}
                >
                  Book Slot
                </Button>

                <p className="text-primary-foreground/60 text-xs mt-4 text-center">
                  Select a slot to complete your booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
