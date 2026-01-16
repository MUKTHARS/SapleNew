// C:\saple.ai\SapleNew\src\app\products\retail\HeroSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Zap, ShoppingBag, Users, TrendingUp, Clock } from 'lucide-react';

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  return (
    <div className="min-h-screen bg-black">
      {/* 1. Top Video Section - Split Layout */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-10 md:py-0">
            {/* Left Side - Text Content */}
            <div className="relative z-10 mt-4 md:mt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <ShoppingBag className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-white">AI Solutions for Retail</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Reimagine shopping experiences with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  intelligent AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                Accelerate your retail transformation with AI for Retail — a pre-built AI accelerator 
                that personalizes customer interactions, delivers real-time insights, and equips employees 
                with deep product and customer intelligence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 border border-white/20 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Side - Video Container */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-gray-900/50 to-purple-900/30">
                <video
                  key="hero-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoadedData={() => setIsVideoLoaded(true)}
                  onCanPlay={() => setIsVideoLoaded(true)}
                  onError={() => setIsVideoLoaded(false)}
                  style={{
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.1)'
                  }}
                >
                  <source src="/videos/retail-video.mp4" type="video/mp4" />
                  <source src="/videos/retail-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 via-transparent to-purple-900/10" />
              </div>
              
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 border-4 border-gray-700 border-t-pink-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-400 text-center">Loading retail AI demo video...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10" />
              <Image
                src="/images/retail-stats.jpg"
                alt="Retail AI Performance Dashboard"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-white">85%</div>
                    <div className="text-sm text-gray-300">Customer Queries Automated</div>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div>
                    <div className="text-2xl font-bold text-white">40%</div>
                    <div className="text-sm text-gray-300">Sales Conversion Increase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Stats Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Elevate retail service—in store and online—with AI agents
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl">
                Harness AI to modernize retail engagement by automating self-service, personalizing every 
                interaction, and empowering frontline teams with intelligent tools.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '85%', label: 'customer queries automated', icon: <Zap className="w-6 h-6" /> },
                  { value: '40%', label: 'sales conversion increase', icon: <TrendingUp className="w-6 h-6" /> },
                  { value: '55%', label: 'reduction in operational costs', icon: <ShoppingBag className="w-6 h-6" /> },
                  { value: '65%', label: 'boost in agent productivity', icon: <Users className="w-6 h-6" /> },
                ].map((stat, index) => (
                  <div key={index} className="group p-6 rounded-xl bg-gradient-to-b from-gray-900/30 to-gray-900/10 border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                        <div className="text-pink-400">
                          {stat.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Metrics */}
              <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-900/10 border border-gray-800">
                <div className="flex flex-wrap gap-8 justify-between">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">35+</div>
                    <div className="text-gray-400 text-sm">Channels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">135+</div>
                    <div className="text-gray-400 text-sm">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-gray-400 text-sm">Customer Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}