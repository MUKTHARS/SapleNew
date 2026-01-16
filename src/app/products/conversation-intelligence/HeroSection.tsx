// C:\saple.ai\SapleNew\src\app\products\conversation-intelligence\HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-48 lg:pb-45 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turn every conversation into performance
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Saple AI Conversation Intelligence turns every customer conversation into action. Get AI-powered insights, 
              automated quality at scale, and outcome-driven coaching that reveal what&apos;s working, what&apos;s not, 
              and exactly how to improve across sales, service, and support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button> */}
              
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}