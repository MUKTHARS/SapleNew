// src/app/products/ai-agents/AutomationQualitySection.tsx
'use client';

import { motion } from 'framer-motion';
import { TrendingUp} from 'lucide-react';
import Image from 'next/image';

export function AutomationQualitySection() {
  return (
    <section className="py-26 md:py-30 lg:py-34 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">Automation with Quality</span>
              </div>
              
              <section className="text-3xl md:text-4xl font-bold text-gray-900">
                Automate more, without sacrificing quality
              </section>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Scale automation with confidence using deep conversational intelligence and built-in 
                observability. Saple AI continuously analyzes conversations to identify what should be 
                automated, how agents behave, and where performance can improve.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                With AI-driven testing, quality management, and real-time insights, teams can deploy AI 
                Agents that get better every day—without compromising customer trust or experience.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gray-50"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/Automate.png"
                alt="Automation Quality Dashboard"
                width={600}
                height={300}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}