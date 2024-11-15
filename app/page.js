"use client"
import React, { useState } from 'react';
import { Search, Users, Activity, DollarSign, TrendingUp, Star, Building2, BarChart3, Globe } from 'lucide-react';
import { Suspense } from 'react';
const CompanyList = () => {
  const initialCompanies = [
    {
      rank: 1,
      name: "Airbnb",
      flag: "🇺🇸",
      description: "Book accommodations around the world.",
      logo: "/api/placeholder/48/48",
      visitors: "900M",
      status: "active",
      market: "T&H", // Travel & Hospitality
      revenue: "8.4B",
      funding: "Public",
      growth: "24%",
      rating: 4.2,
    },
    {
      rank: 2,
      name: "Stripe",
      flag: "🇺🇸",
      description: "Payment processing platform for internet businesses.",
      logo: "/api/placeholder/48/48",
      visitors: "50M",
      status: "active",
      market: "FIN", // Fintech
      revenue: "14B",
      funding: "2.2B",
      growth: "32%",
      rating: 4.7,
    },
    {
      rank: 3,
      name: "Notion",
      flag: "🇺🇸",
      description: "All-in-one workspace for notes, docs, and collaboration.",
      logo: "/api/placeholder/48/48",
      visitors: "30M",
      status: "active",
      market: "PRD", // Productivity
      revenue: "500M",
      funding: "275M",
      growth: "45%",
      rating: 4.6,
    },
    {
      rank: 4,
      name: "Discord",
      flag: "🇺🇸",
      description: "Chat, voice, and video platform for communities.",
      logo: "/api/placeholder/48/48",
      visitors: "150M",
      status: "active",
      market: "COM", // Communication
      revenue: "830M",
      funding: "982M",
      growth: "28%",
      rating: 4.4,
    },
    {
      rank: 5,
      name: "Vercel",
      flag: "🇺🇸",
      description: "Frontend cloud platform for fast web deployments.",
      logo: "/api/placeholder/48/48",
      visitors: "15M",
      status: "active",
      market: "DEV", // Developer Tools
      revenue: "150M",
      funding: "449M",
      growth: "52%",
      rating: 4.5,
    },
    {
      rank: 6,
      name: "Canva",
      flag: "🇦🇺",
      description: "Online design and publishing tool.",
      logo: "/api/placeholder/48/48",
      visitors: "100M",
      status: "active",
      market: "DSG", // Design
      revenue: "1.7B",
      funding: "571M",
      growth: "36%",
      rating: 4.8,
    },
    {
      rank: 7,
      name: "Figma",
      flag: "🇺🇸",
      description: "Collaborative interface design tool.",
      logo: "/api/placeholder/48/48",
      visitors: "20M",
      status: "acquired",
      market: "DSG", // Design
      revenue: "400M",
      funding: "333M",
      growth: "42%",
      rating: 4.7,
    }
  ];

  const [companies, setCompanies] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = initialCompanies.filter(company => 
      company.name.toLowerCase().includes(term) ||
      company.description.toLowerCase().includes(term) ||
      company.market.toLowerCase().includes(term)
    );
    setCompanies(filtered);
  };

  const MetricItem = ({ value, subtext, className = "" }) => (
    <div className="flex flex-col">
      <div className={`font-bold ${className}`}>{value}</div>
      <div className="text-xs text-gray-400">{subtext}</div>
    </div>
  );

  return (
    <>
    <Suspense>

  
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-xl text-gray-800 mb-4 font-semibold">
            Showing {companies.length} of 1,000+ companies
          </h1>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="space-y-3">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white rounded-lg border border-gray-200"
            >
              <div className="flex items-center gap-4 p-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-lg font-medium text-gray-400 w-6">
                    {company.rank}
                  </div>
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-12 h-12 rounded-lg bg-gray-100"
                  />
                  <div className="min-w-[240px]">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold text-gray-900">{company.name}</h2>
                      <span className="text-lg">{company.flag}</span>
                    </div>
                    <p className="text-sm text-gray-500">{company.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <MetricItem 
                    value={company.visitors}
                    subtext="Visitors"
                    className="text-blue-600"
                  />
                  <MetricItem 
                    value={company.market}
                    subtext="Market"
                    className="text-purple-600"
                  />
                  <MetricItem 
                    value={`$${company.revenue}`}
                    subtext="Revenue"
                    className="text-green-600"
                  />
                  <MetricItem 
                    value={company.funding}
                    subtext="Funding"
                    className="text-gray-600"
                  />
                  <MetricItem 
                    value={company.growth}
                    subtext="Growth"
                    className="text-indigo-600"
                  />
                  <MetricItem 
                    value={company.rating}
                    subtext="Rating"
                    className="text-yellow-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Suspense>
    </>
  );
};

export default CompanyList;