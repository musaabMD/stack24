"use client"

import React, { useState } from 'react';
import { Search, Pin } from 'lucide-react';

// Market category emojis and colors
const categoryConfig = {
  "T&H": { emoji: "✈️", color: "#EBF5FF" },  // Light blue
  "FIN": { emoji: "💳", color: "#F0F7F7" },  // Light teal
  "PRD": { emoji: "💻", color: "#F3F4F6" },  // Light gray
  "DSG": { emoji: "🎨", color: "#FDF2F8" }   // Light pink
};

const MarketCard = ({ market, isPinned, onTogglePin }) => {
  const category = market.name.match(/\((.*?)\)/)[1];
  const { emoji, color } = categoryConfig[category];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 transition-all hover:shadow-sm relative group">
      <button 
        onClick={() => onTogglePin(market.rank)}
        className={`absolute top-6 right-6 p-2 rounded-full transition-colors 
          ${isPinned ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
      >
        <Pin className={`w-6 h-6 ${isPinned ? 'fill-current' : ''}`} />
      </button>

      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Left: Emoji & Title */}
        <div className="col-span-5">
          <div className="flex gap-4 items-center">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm"
              style={{ backgroundColor: color }}
            >
              {emoji}
            </div>
            <div className="min-w-0">
              <h2 className="text-xl font-semibold text-gray-900 truncate pr-4">
                {market.name}
              </h2>
              <p className="text-gray-500 text-sm line-clamp-1">
                {market.description}
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Metrics */}
        <div className="col-span-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold text-blue-600">
                ${market.marketSize}B
              </div>
              <div className="text-sm text-gray-400 mt-0.5">Market Size</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-green-600">
                {market.cagr}%
              </div>
              <div className="text-sm text-gray-400 mt-0.5">CAGR</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Key Players</div>
              <div className="flex -space-x-2">
                {market.leaders.map(leader => (
                  <div 
                    key={leader.name} 
                    className="w-12 h-12 rounded-xl border-2 border-white relative hover:z-10"
                  >
                    <img 
                      src={`https://img.logo.dev/${leader.domain}?token=pk_f8BWa9CoSCOyj527NcZ2LA`}
                      alt={leader.name}
                      className="w-full h-full object-contain rounded-lg bg-gray-50 p-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketList = () => {
  const initialMarkets = [
    {
      name: "Travel & Hospitality (T&H)",
      description: "Online travel and accommodation booking platforms",
      marketSize: "483.2",
      cagr: "16.3",
      players: "50+",
      leaders: [
        { name: "Airbnb", domain: "airbnb.com" },
        { name: "Booking.com", domain: "booking.com" },
        { name: "Expedia", domain: "expedia.com" },
        { name: "TripAdvisor", domain: "tripadvisor.com" }
      ],
      rank: 1
    },
    {
      name: "Fintech (FIN)",
      description: "Digital payment and financial technology solutions",
      marketSize: "271.7",
      cagr: "21.7",
      players: "30+",
      leaders: [
        { name: "Stripe", domain: "stripe.com" },
        { name: "Square", domain: "square.com" },
        { name: "PayPal", domain: "paypal.com" },
        { name: "Wise", domain: "wise.com" }
      ],
      rank: 2
    },
    {
      name: "Productivity (PRD)",
      description: "Collaboration and workflow management tools",
      marketSize: "102.3",
      cagr: "19.8",
      players: "100+",
      leaders: [
        { name: "Notion", domain: "notion.so" },
        { name: "Asana", domain: "asana.com" },
        { name: "Monday", domain: "monday.com" },
        { name: "ClickUp", domain: "clickup.com" }
      ],
      rank: 3
    },
    {
      name: "Design Tools (DSG)",
      description: "Digital design and creative software platforms",
      marketSize: "45.8",
      cagr: "23.4",
      players: "40+",
      leaders: [
        { name: "Canva", domain: "canva.com" },
        { name: "Figma", domain: "figma.com" },
        { name: "Adobe", domain: "adobe.com" },
        { name: "Sketch", domain: "sketch.com" }
      ],
      rank: 4
    }
  ];

  const [markets, setMarkets] = useState(initialMarkets);
  const [searchTerm, setSearchTerm] = useState("");
  const [pinnedMarkets, setPinnedMarkets] = useState(new Set());

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = initialMarkets.filter(market => 
      market.name.toLowerCase().includes(term) ||
      market.description.toLowerCase().includes(term)
    );
    setMarkets(filtered);
  };

  const handleTogglePin = (rank) => {
    setPinnedMarkets(prev => {
      const newPinned = new Set(prev);
      if (newPinned.has(rank)) {
        newPinned.delete(rank);
      } else {
        newPinned.add(rank);
      }
      return newPinned;
    });
  };

  const sortedMarkets = [...markets].sort((a, b) => {
    const aPinned = pinnedMarkets.has(a.rank);
    const bPinned = pinnedMarkets.has(b.rank);
    if (aPinned && !bPinned) return -1;
    if (!aPinned && bPinned) return 1;
    return a.rank - b.rank;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl text-gray-800 font-semibold">
              Analyzing {markets.length} Major Markets
            </h1>
            {pinnedMarkets.size > 0 && (
              <div className="flex items-center gap-2">
                <Pin className="w-5 h-5 text-blue-600 fill-current" />
                <span className="text-sm text-gray-600">
                  {pinnedMarkets.size} pinned
                </span>
              </div>
            )}
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search markets..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-3 pl-11 rounded-xl bg-white border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                placeholder:text-gray-400 text-gray-600"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="space-y-4">
          {sortedMarkets.map((market) => (
            <MarketCard
              key={market.rank}
              market={market}
              isPinned={pinnedMarkets.has(market.rank)}
              onTogglePin={handleTogglePin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketList;