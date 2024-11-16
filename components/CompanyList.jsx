"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Suspense } from 'react';
// MetricItem Component
const MetricItem = ({ value, subtext, className = "" }) => (
  <div className="flex flex-col">
    <div className={`font-bold ${className}`}>{value}</div>
    <div className="text-xs text-gray-400">{subtext}</div>
  </div>
);

// MobileDrawer Component
const MobileDrawer = ({ company, onClose }) => {
  if (!company) return null;
  
  return (
    <>

<Suspense>

    
    <div className="fixed inset-0 bg-gray-900/50 z-50 lg:hidden">
      <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-xl p-6 animate-slide-up">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-12 h-12 rounded-lg bg-gray-100"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{company.name}</h2>
                <span className="text-xl">{company.flag}</span>
              </div>
              <p className="text-sm text-gray-500">{company.description}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <MetricItem 
              value={company.visitors}
              subtext="Visitors"
              className="text-blue-600"
            />
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <MetricItem 
              value={company.market}
              subtext="Market"
              className="text-purple-600"
            />
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <MetricItem 
              value={`$${company.revenue}`}
              subtext="Revenue"
              className="text-green-600"
            />
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <MetricItem 
              value={company.funding}
              subtext="Funding"
              className="text-gray-600"
            />
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <MetricItem 
              value={company.growth}
              subtext="Growth"
              className="text-indigo-600"
            />
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <MetricItem 
              value={company.rating}
              subtext="Rating"
              className="text-yellow-600"
            />
          </div>
        </div>
      </div>
    </div>
    </Suspense>

</>
  );
};

const CompanyList = ({ companies: initialCompanies }) => {
  const [companies, setCompanies] = useState(initialCompanies);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

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

  return (
    <>
        <Suspense>


      <style jsx global>{`
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
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
                onClick={() => setSelectedCompany(company)}
                className="bg-white rounded-lg border border-gray-200 cursor-pointer lg:cursor-default"
              >
                {/* Desktop View */}
                <div className="hidden lg:flex items-center gap-4 p-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-lg font-medium text-gray-400 w-6">
                      {company.rank}
                    </div>
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-12 h-12 rounded-lg bg-gray-100 object-contain"
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

                {/* Mobile View */}
                <div className="flex lg:hidden items-center p-4">
                  <div className="flex items-center gap-3 flex-1">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-10 h-10 rounded-lg bg-gray-100 object-contain"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-gray-900">{company.name}</h2>
                        <span>{company.flag}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-blue-600">{company.visitors} visitors</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-green-600">${company.revenue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Details Drawer */}
          <MobileDrawer 
            company={selectedCompany} 
            onClose={() => setSelectedCompany(null)} 
          />
        </div>
      </div>
      </Suspense>

    </>
  );
};

export default CompanyList;