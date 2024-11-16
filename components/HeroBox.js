import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import companies from '@/app/data/companies.js';
import { Suspense } from 'react';
export default function HeroBox() {
  const [currentCompany, setCurrentCompany] = useState(companies[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentCompany((prevCompany) => {
          const currentIndex = companies.findIndex(c => c.name === prevCompany.name);
          const nextIndex = currentIndex === companies.length - 1 ? 0 : currentIndex + 1;
          return companies[nextIndex];
        });
        setIsTransitioning(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Suspense>

    <div className="flex flex-col items-center pt-20 bg-white">
      {/* Company Logo */}
      <div className="mb-10">
        <div className="relative w-40 h-40 mx-auto">
          <div className={`absolute inset-0 rounded-[2.5rem] bg-white shadow-md transform transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <img
              src={currentCompany.logo}
              alt={currentCompany.name}
              className="w-full h-full object-contain p-6"
            />
          </div>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="max-w-[900px] mx-auto text-[4rem] leading-[1.1] font-medium text-center md:text-[5.5rem] text-black tracking-[-0.02em]">
        Discover real-world
        <br />
        design inspiration.
      </h1>

      {/* Subtitle */}
      <p className="max-w-3xl mx-auto mt-12 text-2xl text-center text-gray-500 leading-relaxed">
        Featuring over 300,000 screens and 1,000 iOS, Android & Web apps —
        New content weekly.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <button className="h-14 px-8 text-lg font-medium text-white bg-black rounded-full hover:bg-gray-900 transition-colors">
          Join for free
        </button>
        <button className="h-14 px-8 text-lg font-medium text-black flex items-center gap-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
          See our plans
          <ArrowRight className="w-5 h-5" />
        </button>
      
      </div>
    </div>
      <br />
      <br />
      </Suspense>

      </>
  );
}