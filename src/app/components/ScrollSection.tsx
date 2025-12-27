// src/app/components/ScrollSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { MessageSquare, Brain, BarChart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const scrollSections = [
  {
    id: 'ai-agent',
    title: 'AI Agent',
    subtitle: 'Human-centric AI agents for exceptional, trustworthy CX',
    ctaText: 'Explore AI Agent',
    icon: <Brain className="w-5 h-5" />,
    color: '#0EA5E9',
    src: '/images/Homepage_AI Agent_v3.png',
    features: [
      'Context-aware conversations',
      'Emotional intelligence',
      'Seamless human handoff',
      '24/7 availability'
    ]
  },
  {
    id: 'agent-assist',
    title: 'Agent Assist',
    subtitle: 'Real-time guidance. Trusted knowledge. Automated workflows.',
    ctaText: 'Explore Agent Assist',
    icon: <MessageSquare className="w-5 h-5" />,
    color: '#8B5CF6',
    src: '/images/bf3.avif',
    features: [
      'Real-time agent coaching',
      'Automated note taking',
      'Instant knowledge access',
      'Performance insights'
    ]
  },
  {
    id: 'conversation-intelligence',
    title: 'Conversation Intelligence',
    subtitle: 'Capture the voice of your customer at scale by uncovering hidden signals in every conversation',
    ctaText: 'Explore Conversation Intelligence',
    icon: <BarChart className="w-5 h-5" />,
    color: '#10B981',
    src: '/images/bf4.avif',
    features: [
      'Sentiment analysis',
      'Trend identification',
      'Compliance monitoring',
      'Quality scoring'
    ]
  }
];

export function ScrollSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean[]>([]);

  const handleSectionClick = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    
    setIsScrolling(true);
    const sectionHeight = scrollContainerRef.current.clientHeight;
    const targetScroll = index * sectionHeight;
    
    scrollContainerRef.current.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    setTimeout(() => setIsScrolling(false), 500);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    const scrollTop = scrollContainerRef.current.scrollTop;
    const containerHeight = scrollContainerRef.current.clientHeight;
    
    const currentSection = Math.floor(scrollTop / containerHeight);
    const newActiveSection = Math.min(currentSection, scrollSections.length - 1);
    
    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [isScrolling, activeSection]);

  const handleImageLoaded = useCallback((index: number) => {
    setIsImageLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  }, []);

  // Initialize image loaded state
  useEffect(() => {
    setIsImageLoaded(new Array(scrollSections.length).fill(false));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!scrollContainerRef.current) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const newIndex = e.key === 'ArrowDown' 
          ? Math.min(activeSection + 1, scrollSections.length - 1)
          : Math.max(activeSection - 1, 0);
        handleSectionClick(newIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, handleSectionClick]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.1) 0px, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Intelligent Customer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Service Platform
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Main content container with internal scroll */}
        <div className="relative h-[85vh]">
          {/* Left column - Static topics with features and CTA */}
          <div className="absolute left-0 top-0 h-full w-full lg:w-2/5 z-10">
            <div className="sticky top-24 h-[calc(100%-6rem)] flex flex-col justify-center">
              <div className="space-y-2">
                {scrollSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div
                      className={`relative pl-8 py-6 cursor-pointer transition-all duration-300 ${
                        activeSection === index 
                          ? 'opacity-100' 
                          : 'opacity-50 hover:opacity-70'
                      }`}
                      onClick={() => handleSectionClick(index)}
                    >
                      {/* Active indicator line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-300 ${
                        activeSection === index 
                          ? 'bg-gradient-to-b from-cyan-500 to-blue-500' 
                          : 'bg-gray-700'
                      }`} />

                      <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg transition-all duration-300 ${
                            activeSection === index 
                              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 scale-110' 
                              : 'bg-gray-900/50 border border-gray-800'
                          }`}>
                            <div style={{ color: activeSection === index ? section.color : '#9CA3AF' }}>
                              {section.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 ${
                              activeSection === index ? 'text-white' : 'text-gray-400'
                            }`}>
                              {section.title}
                            </h3>
                            <p className={`text-sm transition-colors duration-300 line-clamp-2 ${
                              activeSection === index ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {section.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Features list - only show for active section */}
                        {activeSection === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="ml-12"
                          >
                            <div className="grid grid-cols-2 gap-1.5 mb-4">
  {section.features.map((feature, idx) => (
    <div 
      key={idx}
      className="px-2 py-1.5 bg-gray-900/70 backdrop-blur-sm rounded-md border border-gray-700/50"
    >
      <span className="text-xs text-gray-300 leading-tight">{feature}</span>
    </div>
  ))}
</div>
                            
                            {/* CTA Button */}
                            <button className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 border border-gray-700 hover:border-cyan-500/30">
                              <span>{section.ctaText}</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </motion.div>
                        )}
                        
                        {/* Image loading indicator */}
                        {activeSection === index && !isImageLoaded[index] && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-3 flex items-center gap-2"
                          >
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-xs text-gray-400">
                              Loading image...
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Full height image only */}
         <div className="absolute right-0 top-0 h-full w-full lg:w-3/5">
  <div 
    ref={scrollContainerRef}
    className="h-full overflow-y-auto scroll-smooth snap-y snap-mandatory hide-scrollbar"
  >
    {/* Each section takes full viewport height */}
    {scrollSections.map((section, index) => (
      <div
        key={section.id}
        className="h-full snap-start relative flex items-center justify-center p-4"
      >
        {/* Image element - clean view only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <div className="relative">
            <Image
              src={section.src}
              alt={`${section.title} Interface`}
              width={600}
              height={450}
              className="w-full h-auto rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              onLoad={() => handleImageLoaded(index)}
            />
          </div>
        </motion.div>
      </div>
    ))}
  </div>
</div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {scrollSections.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSectionClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeSection === index 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 w-8 h-2' 
                    : 'bg-gray-700 w-2 h-2 hover:bg-gray-600'
                }`}
                aria-label={`Go to ${scrollSections[index].title} demo`}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="hidden lg:inline">Scroll or use arrow keys to navigate</span>
            <span className="lg:hidden">Swipe up/down to navigate</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1 h-1 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: '100ms' }}></div>
              <div className="w-1 h-1 rounded-full bg-gray-600 animate-bounce" style={{ animationDelay: '200ms' }}></div>
            </div>
          </div>
        </div>

        {/* Mobile view - Stacked layout */}
        <div className="lg:hidden mt-12">
          <div className="space-y-12">
            {scrollSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800 overflow-hidden"
              >
                {/* Mobile image */}
                <div className="aspect-video w-full relative bg-black">
                  <Image
                    src={section.src}
                    alt={`${section.title} Interface`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700`}>
                      <div style={{ color: section.color }}>
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {section.subtitle}
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: section.color }} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-cyan-400 font-medium">
                    {section.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .snap-y {
          scroll-snap-type: y mandatory;
        }
        .snap-start {
          scroll-snap-align: start;
        }
      `}</style>
    </section>
  );
}