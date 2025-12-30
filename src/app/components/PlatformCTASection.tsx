// src/app/components/PlatformCTASection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function PlatformCTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-white/95 to-blue-50/95 border-2 border-blue-100/50 p-12 shadow-xl">
            {/* Subtle texture */}
            <div className="absolute inset-0 rounded-3xl opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] -z-10" />

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
            
            <div className="relative z-10">
              <section className="text-4xl md:text-5xl font-bold text-black mb-6">
                Start Building Today
              </section>

              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Join thousands of teams using our platform to transform customer experiences with AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300">
                      <span>Get Started Free</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/demo">
                    <button className="group inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-white transition-all duration-300">
                      <span>Schedule a Demo</span>
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </div>
              
              <p className="text-sm text-gray-600 mt-8">
                No credit card required • Free 14-day trial • Enterprise support available
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}