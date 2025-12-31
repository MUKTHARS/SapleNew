// src/app/components/EnterpriseUseCasesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, Building, TrendingUp, Globe } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export function EnterpriseUseCasesSection() {
  const useCases = [
  {
    title: "Customer Support",
    description: "Automated resolution of customer queries with intelligent escalation to human agents.",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-blue-600",
    stats: ["70% auto-resolution", "90% CSAT"]
  },
  {
    title: "Agent Assist",
    description: "Real-time guidance and information retrieval for support agents during live interactions.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-emerald-600",
    stats: ["50% faster resolution", "40% less training"]
  },
  {
    title: "ITSM Automation",
    description: "Intelligent ticket routing, incident response, and automated troubleshooting.",
    icon: <Building className="w-6 h-6" />,
    color: "bg-indigo-600",
    stats: ["80% auto-routing", "60% MTTR reduction"]
  },
  {
    title: "Finance Operations",
    description: "Automated invoice processing, compliance checks, and financial report generation.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-violet-600",
    stats: ["90% accuracy", "75% time saved"]
  },
  {
    title: "Knowledge Automation",
    description: "Intelligent document processing, knowledge base management, and information retrieval.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-cyan-600",
    stats: ["95% retrieval accuracy", "50k+ documents"]
  }
];

  const [currentSlide, setCurrentSlide] = useState(0);
//   const itemsPerView = 1;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  }, [useCases.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  }, [useCases.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <section className="py-17 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <section className="text-4xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Designed for <span className="text-slate-900">Real-World Enterprise Use Cases</span><br />

          </section>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              From customer support and agent assist to ITSM, finance operations, and knowledge automation, Saple AI enables organizations to deploy production-ready agentic systems.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Scalable across teams, channels, and geographies with enterprise-grade reliability and performance.
            </p>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Use Cases Carousel - Single Large Card */}
          <div className="px-12 md:px-16">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="bg-black rounded-2xl border border-slate-200 p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                  <div className={`w-16 h-16 rounded-xl ${useCases[currentSlide].color} flex items-center justify-center flex-shrink-0`}>
                    <div className="text-white">
                      {useCases[currentSlide].icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {useCases[currentSlide].title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {useCases[currentSlide].stats.map((stat, idx) => (
                        <span key={idx} className="text-sm font-medium px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg text-white leading-relaxed mb-6">
                      {useCases[currentSlide].description}
                    </p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {/* <div className="text-sm text-slate-500">
                            Use case {currentSlide + 1} of {useCases.length}
                        </div> */}
                    </div>
                    <div className="flex items-center gap-2">
                      {useCases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className="focus:outline-none"
                          aria-label={`Go to use case ${index + 1}`}
                        >
                          {/* <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                              ? 'bg-slate-900' 
                              : 'bg-slate-300 hover:bg-slate-400'
                          }`} /> */}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator - Bottom Center */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="focus:outline-none group"
                aria-label={`Go to use case ${index + 1}`}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-slate-900' 
                      : 'bg-slate-300 group-hover:bg-slate-400'
                  }`} />
                  <div className={`text-xs font-medium transition-all duration-300 ${
                    currentSlide === index 
                      ? 'text-slate-900' 
                      : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to transform your enterprise operations?
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Schedule a personalized demo to see how Saple AI can solve your specific business challenges.
                  </p>
                </div>
                
                <button className="group inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 whitespace-nowrap">
                  <span>Request Demo</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}