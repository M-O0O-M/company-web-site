"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    category: "Cryptocurrency Exchange",
    items: [
      { name: "VOD Exchange", logo: "https://ext.same-assets.com/409122903/3452386776.png", description: "High-volume crypto exchange platform" },
      { name: "Elite Payment Gateway", logo: "https://ext.same-assets.com/409122903/1284515987.png", description: "Secure payment processing solution" },
    ],
  },
  {
    category: "Decentralized Finance (DEFI)",
    items: [
      { name: "DeFi Yield Platform", logo: "https://ext.same-assets.com/409122903/3096100893.png", description: "Automated yield farming protocol" },
      { name: "Staking Solution", logo: "https://ext.same-assets.com/409122903/415097960.png", description: "Multi-chain staking platform" },
    ],
  },
  {
    category: "NFT Marketplace",
    items: [
      { name: "Art NFT Platform", logo: "https://ext.same-assets.com/409122903/3207570307.png", description: "Digital art marketplace" },
      { name: "Gaming NFTs", logo: "https://ext.same-assets.com/409122903/3988647977.png", description: "In-game assets trading" },
    ],
  },
  {
    category: "ICO Platforms",
    items: [
      { name: "CLEPX", logo: "https://ext.same-assets.com/409122903/2135490664.png", description: "Token launch platform" },
      { name: "Moo ICO", logo: "https://ext.same-assets.com/409122903/2118341798.png", description: "Fundraising solution" },
    ],
  },
  {
    category: "MLM Platform",
    items: [
      { name: "AXET MLM", logo: "https://ext.same-assets.com/409122903/519779820.png", description: "Multi-level marketing system" },
      { name: "Network Solution", logo: "https://ext.same-assets.com/409122903/3255897583.png", description: "Decentralized MLM platform" },
    ],
  },
];

export default function PortfolioCarousel() {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div className="relative">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {portfolioItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === idx
                ? "bg-cyan-500 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Carousel Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {portfolioItems[activeTab].items.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                    <button className="mt-4 text-cyan-500 font-semibold hover:text-cyan-600 transition-colors inline-flex items-center gap-2">
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevTab}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center group"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextTab}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-cyan-500 hover:text-white transition-all flex items-center justify-center group"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {portfolioItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeTab === idx ? "bg-cyan-500 w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
