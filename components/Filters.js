import React, { useState } from 'react';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';

// Reusable Button Components
const FilterButton = ({ label, emoji, selected, selectedLabel, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border transition-all
      ${selected 
        ? 'border-blue-200 shadow-sm' 
        : 'border-gray-100 hover:border-gray-200'
      }
    `}
  >
    <span className="text-xl">{emoji}</span>
    <span className="font-medium text-gray-700">
      {selected ? selectedLabel : label}
    </span>
    <ChevronDown size={16} className="text-gray-400" />
  </button>
);

const FilterPopover = ({ title, options, selected, onSelect, onClose }) => (
  <div className="absolute top-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 z-50 w-72">
    <h3 className="font-semibold mb-3 text-gray-700">{title}</h3>
    <div className="grid grid-cols-2 gap-2">
      {options.map(option => (
        <button
          key={option.value}
          onClick={() => {
            onSelect(option.value);
            onClose();
          }}
          className={`flex items-center gap-2 p-3 rounded-xl transition-all
            ${selected.includes(option.value) 
              ? 'bg-blue-50 text-blue-700' 
              : 'hover:bg-gray-50'
            }
          `}
        >
          <span className="text-lg">{option.emoji}</span>
          <span className="text-sm font-medium">{option.label}</span>
        </button>
      ))}
    </div>
  </div>
);

const AllFiltersModal = ({ isOpen, onClose, filters, selectedFilters, onToggleFilter }) => {
  if (!isOpen) return null;

  const categories = [
    { id: 'basic', title: 'Basic Info', filters: ['status', 'company_type', 'country'] },
    { id: 'metrics', title: 'Metrics', filters: ['revenue', 'rating', 'visitors', 'growth'] },
    { id: 'team', title: 'Team & Funding', filters: ['founders', 'funding', 'team_size'] },
    { id: 'market', title: 'Market', filters: ['markets', 'niches', 'market_size', 'features'] }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        <div className="border-b p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">All Filters</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="overflow-y-auto p-6 max-h-[calc(90vh-140px)] space-y-8">
          {categories.map(category => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.filters.map(filterKey => (
                  <div key={filterKey} className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-600 capitalize">
                      {filterKey.replace('_', ' ')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {filters[filterKey]?.map(option => (
                        <button
                          key={option.value}
                          onClick={() => onToggleFilter(filterKey, option.value)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all text-sm
                            ${selectedFilters[filterKey]?.includes(option.value)
                              ? 'border-blue-200 bg-blue-50 text-blue-700'
                              : 'border-gray-100 hover:border-gray-200'
                            }
                          `}
                        >
                          <span className="text-base">{option.emoji}</span>
                          <span>{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-6 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {Object.values(selectedFilters).flat().length} filters applied
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onToggleFilter({}, true)} // Clear all filters
                className="px-6 py-2 border rounded-xl hover:bg-gray-50"
              >
                Clear all
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Show results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rest of the code remains the same...

// Main Component
const CompanyFilter = () => {
  const filterOptions = {
    status: [
      { value: 'active', label: 'Active', emoji: '✅' },
      { value: 'inactive', label: 'Inactive', emoji: '❌' }
    ],
    company_type: [
      { value: 'startup', label: 'Startup', emoji: '🚀' },
      { value: 'smb', label: 'Small Business', emoji: '🏪' },
      { value: 'enterprise', label: 'Enterprise', emoji: '🏢' }
    ],
    country: [
      { value: 'us', label: 'United States', emoji: '🇺🇸' },
      { value: 'eu', label: 'Europe', emoji: '🇪🇺' },
      { value: 'uk', label: 'United Kingdom', emoji: '🇬🇧' },
      { value: 'ca', label: 'Canada', emoji: '🇨🇦' }
    ],
    revenue: [
      { value: 'seed', label: '<$1M', emoji: '🌱' },
      { value: 'growth', label: '$1M-$10M', emoji: '📈' },
      { value: 'scale', label: '$10M-$100M', emoji: '💰' },
      { value: 'enterprise', label: '>$100M', emoji: '🏦' }
    ],
    rating: [
      { value: 'high', label: '4.5+ Rating', emoji: '⭐' },
      { value: 'medium', label: '4.0-4.4 Rating', emoji: '⭐' },
      { value: 'low', label: 'Below 4.0', emoji: '⭐' }
    ],
    visitors: [
      { value: 'high', label: '1M+', emoji: '📈' },
      { value: 'medium', label: '100k-1M', emoji: '📊' },
      { value: 'low', label: '<100k', emoji: '📉' }
    ],
    growth: [
      { value: 'rocket', label: '>100%', emoji: '🚀' },
      { value: 'fast', label: '50-100%', emoji: '⚡' },
      { value: 'steady', label: '20-50%', emoji: '📈' }
    ],
    founders: [
      { value: 'technical', label: 'Technical', emoji: '👨‍💻' },
      { value: 'business', label: 'Business', emoji: '👨‍💼' },
      { value: 'mixed', label: 'Mixed', emoji: '🤝' }
    ],
    funding: [
      { value: 'bootstrap', label: 'Bootstrapped', emoji: '🥾' },
      { value: 'seed', label: 'Seed', emoji: '🌱' },
      { value: 'seriesA', label: 'Series A', emoji: '💰' },
      { value: 'seriesB', label: 'Series B+', emoji: '🏦' }
    ],
    team_size: [
      { value: 'small', label: '1-50', emoji: '👥' },
      { value: 'medium', label: '51-200', emoji: '👥' },
      { value: 'large', label: '201+', emoji: '👥' }
    ],
    markets: [
      { value: 'saas', label: 'SaaS', emoji: '☁️' },
      { value: 'ai', label: 'AI/ML', emoji: '🤖' },
      { value: 'fintech', label: 'Fintech', emoji: '💳' },
      { value: 'ecommerce', label: 'E-commerce', emoji: '🛍️' }
    ],
    niches: [
      { value: 'enterprise', label: 'Enterprise', emoji: '🏢' },
      { value: 'smb', label: 'SMB', emoji: '🏪' },
      { value: 'consumer', label: 'Consumer', emoji: '👥' }
    ],
    market_size: [
      { value: 'huge', label: '$10B+', emoji: '🌍' },
      { value: 'large', label: '$1B-$10B', emoji: '🌎' },
      { value: 'medium', label: '$100M-$1B', emoji: '🌏' }
    ],
    features: [
      { value: 'ai', label: 'AI Features', emoji: '🤖' },
      { value: 'automation', label: 'Automation', emoji: '⚙️' },
      { value: 'analytics', label: 'Analytics', emoji: '📊' },
      { value: 'integration', label: 'Integrations', emoji: '🔌' }
    ]
  };

  // Main visible filters
  const mainFilters = ['country', 'markets', 'revenue', 'funding'];

  const [filters, setFilters] = useState(
    Object.keys(filterOptions).reduce((acc, key) => ({ ...acc, [key]: [] }), {})
  );
  const [activePopover, setActivePopover] = useState(null);
  const [showAllFilters, setShowAllFilters] = useState(false);

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const getSelectedLabel = (category) => {
    const selected = filters[category];
    if (selected.length === 0) return null;
    if (selected.length === 1) {
      const option = filterOptions[category].find(opt => opt.value === selected[0]);
      return `${option.emoji} ${option.label}`;
    }
    return `${selected.length} selected`;
  };

  return (
    <div className="bg-[#FBFAF8]">
      <div className="max-w-6xl mx-auto p-4">
        {/* Main Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {/* All Filters Button */}
          <button
            onClick={() => setShowAllFilters(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-gray-100 hover:border-gray-200"
          >
            <SlidersHorizontal size={20} />
            <span className="font-medium text-gray-700">Filters</span>
          </button>

          {/* Main Filters */}
          {mainFilters.map(category => (
            <div key={category} className="relative">
              <FilterButton
                label={category.replace('_', ' ').charAt(0).toUpperCase() + category.slice(1)}
                emoji={filterOptions[category][0].emoji}
                selected={filters[category].length > 0}
                selectedLabel={getSelectedLabel(category)}
                onClick={() => setActivePopover(activePopover === category ? null : category)}
              />
              {activePopover === category && (
                <FilterPopover
                  title={`Select ${category.replace('_', ' ')}`}
                  options={filterOptions[category]}
                  selected={filters[category]}
                  onSelect={(value) => toggleFilter(category, value)}
                  onClose={() => setActivePopover(null)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Selected Filters */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(filters).flatMap(([category, values]) =>
            values.map(value => {
              const option = filterOptions[category].find(opt => opt.value === value);
              return option ? (
                <span
                  key={`${category}-${value}`}
                  className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-100 text-gray-700 rounded-xl text-sm"
                >
                  <span>{option.emoji}</span>
                  <span>{option.label}</span>
                  <X
                    size={14}
                    className="cursor-pointer ml-1 text-gray-400 hover:text-gray-600"
                    onClick={() => toggleFilter(category, value)}
                  />
                </span>
              ) : null;
            })
          )}
        </div>

        {/* All Filters Modal */}
        <AllFiltersModal
          isOpen={showAllFilters}
          onClose={() => setShowAllFilters(false)}
          filters={filterOptions}
          selectedFilters={filters}
          onToggleFilter={toggleFilter}
        />
      </div>
    </div>
  );
};

export default CompanyFilter;