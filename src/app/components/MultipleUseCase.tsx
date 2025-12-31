// src/app/components/UseCasesSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const useCases = [
  {
    title: "Intelligent Customer Support",
    description: "AI Agents that support common customer requests and solve issues 24/7",
    color: "#ffffffff",
    features: ["24/7 availability", "Instant resolution", "Multi-language support"],
    bgImage: "/images/Intelligent Customer Support.png" 
  },
  {
    title: "Employee Knowledge Assist",
    description: "Help employees find answers and assist internal operations teams",
    color: "#ffffffff",
    features: ["Quick knowledge retrieval", "Internal process automation", "Team collaboration"],
    bgImage: "/images/Employee Knowledge Assist.png" 
  },
  {
    title: "Sales Enablement",
    description: "Quality leads, answer questions, and automate bookings",
    color: "#ffffffff",
    features: ["Lead qualification", "Automated follow-ups", "Booking automation"],
    bgImage: "/images/Sales Enablement.png" 
  },
  {
    title: "Workflow Automation",
    description: "Trigger processes across your tools to drive measurable results",
    color: "#ffffffff",
    features: ["Cross-tool integration", "Automated workflows", "Performance tracking"],
    bgImage: "/images/Workflow Automation.png" 
  }
];

export function MultipleUseCase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsAutoPlaying] = useState(true);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    // if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0C7075 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <section className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One Conversational AI Platform. Multiple Use Cases.
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deliver exceptional customer and employee experiences across all touchpoints with our comprehensive AI platform.
          </p>
        </motion.div>

       {/* Carousel Container */}
<div className="relative max-w-3xl mx-auto"> {/* Changed to max-w-3xl for normal width */}
  {/* Navigation Buttons */}
  <button
    onClick={goToPrev}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-5 h-5 text-gray-700" />
  </button>

  <button
    onClick={goToNext}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
    aria-label="Next slide"
  >
    <ChevronRight className="w-5 h-5 text-gray-700" />
  </button>

  {/* Carousel Slides */}
  <div className="relative overflow-hidden rounded-2xl">
    <div 
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {useCases.map((useCase, index) => (
        <div key={index} className="w-full flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group h-full"
          >
            <div className="relative h-full rounded-2xl p-8 border border-white/10 hover:border-[#0C7075]/50 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden min-h-[400px]"> {/* Increased padding to p-8 and added min-h-[400px] */}
              {/* Dark background image without black opacity */}
             <div className="absolute inset-0 z-0">
  <div className="absolute inset-0 opacity-90">
    <Image src={useCase.bgImage} alt={useCase.title} fill className="object-cover" />
  </div>
  {/* Add dark overlay here */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90"></div>
</div>
              
              {/* Content with white text */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title - white text */}
                <h3 className="text-2xl font-semibold text-white mb-4"> {/* Increased to text-2xl */}
                  {useCase.title}
                </h3>

                {/* Description - light gray text */}
                <p className="text-white mb-6 text-lg flex-grow"> {/* Increased to text-lg and mb-6 */}
                  {useCase.description}
                </p>

                {/* Features - light gray text with color accent */}
                <div className="space-y-3 mt-auto"> {/* Changed to mt-auto and increased space-y */}
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: useCase.color }}
                      />
                      <span className="text-base text-white">{feature}</span> {/* Increased to text-base */}
                    </div>
                  ))}
                </div>

                {/* Bottom accent line - use case color */}
                <div 
                  className="mt-8 pt-6 border-t border-white/20 group-hover:border-[#0C7075] transition-colors duration-300" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>

  {/* Dots Indicator */}
  <div className="flex justify-center items-center space-x-3 mt-8">
    {useCases.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentSlide === index 
            ? 'bg-[#0C7075] w-8' 
            : 'bg-gray-300 hover:bg-gray-400'
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>

        
      </div>
    </section>
  );
}