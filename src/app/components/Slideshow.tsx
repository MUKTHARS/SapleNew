'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { MessageSquare, Smartphone, BarChart3, Cpu, Zap } from 'lucide-react';
import Lottie from 'lottie-react';

// Define interface for Lottie data
interface LottieAnimationData {
  [key: string]: unknown;
}

// Define slide data with CORRECTED Lottie file paths
const slides = [
  {
    id: 1,
    title: "AI-Powered Conversations",
    description: "Natural, human-like interactions that understand context and intent",
    lottieFile: "/lotti/ai-chat.json", // Matches your public folder structure
    fallbackIcon: <MessageSquare className="w-16 h-16" />,
    color: "from-blue-50 to-cyan-50",
    textColor: "text-blue-900",
    accentColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Multi-Channel Support",
    description: "Seamlessly handle voice, chat, email, and social media interactions",
    lottieFile: "/lotti/multi-channel.json", // Matches your public folder structure
    fallbackIcon: <Smartphone className="w-16 h-16" />,
    color: "from-purple-50 to-pink-50",
    textColor: "text-blue-900",
    accentColor: "text-purple-600"
  },
  {
    id: 3,
    title: "Real-Time Analytics",
    description: "Monitor performance and gain insights with live dashboards",
    lottieFile: "/lotti/analytics.json", // Matches your public folder structure
    fallbackIcon: <BarChart3 className="w-16 h-16" />,
    color: "from-green-50 to-emerald-50",
    textColor: "text-blue-900",
    accentColor: "text-green-600"
  },
  {
    id: 4,
    title: "Enterprise Integration",
    description: "Connect with your existing CRM, ERP, and business systems",
    lottieFile: "/lotti/integration.json", // Matches your public folder structure
    fallbackIcon: <Cpu className="w-16 h-16" />,
    color: "from-amber-50 to-orange-50",
    textColor: "text-blue-900",
    accentColor: "text-amber-600"
  }
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const [lottieData, setLottieData] = useState<(LottieAnimationData | null)[]>(Array(slides.length).fill(null));
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  // Load Lottie animations with better error handling
  useEffect(() => {
    const loadLottieAnimations = async () => {
      setLoading(true);
      const loadedAnimations = [...lottieData];
      
      const loadPromises = slides.map(async (slide, i) => {
        try {
          // Using direct fetch from public directory
          const response = await fetch(slide.lottieFile);
          if (response.ok) {
            const data = await response.json();
            loadedAnimations[i] = data;
          } else {
            console.warn(`Failed to load ${slide.lottieFile}: ${response.status}`);
            loadedAnimations[i] = null;
          }
        } catch (error) {
          console.error(`Error loading ${slide.lottieFile}:`, error);
          loadedAnimations[i] = null;
        }
      });
      
      await Promise.all(loadPromises);
      setLottieData(loadedAnimations);
      setLoading(false);
    };

    loadLottieAnimations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full h-full"> {/* Changed to w-full h-full */}
      {/* Slides container - made to fill parent */}
      <div className="relative h-full rounded-2xl overflow-hidden"> {/* Removed shadow-lg, added h-full */}
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 0.95,
              zIndex: currentSlide === index ? 10 : 0
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className={`absolute inset-0 ${slide.color} rounded-2xl`}
          >
            {/* Slide content with better responsive spacing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
            {/* <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4 md:p-6 lg:p-8"> */}
              {/* Animation/Icon Container */}
              <motion.div
  initial={{ y: 30, opacity: 0 }}
  animate={{ 
    y: currentSlide === index ? 0 : 30, 
    opacity: currentSlide === index ? 1 : 0 
  }}
  transition={{ delay: 0.2, duration: 0.5 }}
  className="w-full flex justify-center items-center mb-8"
>
                
                <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative flex items-center justify-center">  {/* Loading state */}
                  {loading && currentSlide === index && (
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-lg animate-pulse">
                      <Zap className="w-10 h-10 text-gray-400" />
                    </div>
                  )}
                  
                  {/* Lottie Animation with size constraints */}
                  {!loading && lottieData[index] && (
                    <Lottie
                      animationData={lottieData[index]}
                      loop={true}
                      autoplay={true}
                      className="w-full h-full"
                      style={{ 
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }}
                    />
                  )}
                  
                  {/* Fallback Icon if Lottie fails to load */}
                  {!loading && !lottieData[index] && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-40 h-40 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg border border-white/80">
                        <div className={slide.accentColor}>
                          {slide.fallbackIcon}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
              
              {/* Text content */}
             <motion.div
  initial={{ x: 0, y: 20, opacity: 0 }}
  animate={{ 
    x: 0, 
    y: currentSlide === index ? 0 : 20,
    opacity: currentSlide === index ? 1 : 0 
  }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="w-full text-center px-4"
>

                {/* Title */}
                <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${slide.textColor} mb-4`}>
  {slide.title}
</h3>
                
                {/* Description */}
                <p className={`${slide.textColor}/80 text-base md:text-lg lg:text-xl leading-relaxed`}>
                  {slide.description}
                </p>
              </motion.div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation controls - adjusted position */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20"> {/* Changed bottom-6 to bottom-4 */}
        {/* Dots indicator */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative w-2 h-2 rounded-full bg-gray-400/50 hover:bg-gray-600 transition-colors"
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentSlide === index && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full bg-gray-800"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}