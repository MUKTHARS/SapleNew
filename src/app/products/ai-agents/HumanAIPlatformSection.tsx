// src/app/products/ai-agents/HumanAIPlatformSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, GitMerge, BarChart } from 'lucide-react';
import Image from 'next/image';

export function HumanAIPlatformSection() {
  const features = [
    {
      icon: Users,
      title: 'Seamless Handoffs',
      description: 'Transfer conversations between AI and human agents with complete context'
    },
    {
      icon: GitMerge,
      title: 'Shared Context',
      description: 'Maintain conversation history and context across all interactions'
    },
    {
      icon: BarChart,
      title: 'Unified Analytics',
      description: 'Consistent quality measurement across every interaction'
    }
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <section className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One platform for human & AI Agents
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bring human agents and AI Agents together on a single platform
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-white bg-gray-50">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/Agent Handover.png"
                  alt="Human and AI Platform Integration"
                  width={600}
                  height={300}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50/50 transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mt-6"
              >
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Unified Performance Monitoring
                </div>
                <div className="text-sm text-gray-600">
                  Monitor performance, benchmark outcomes, and capture the true voice of your customer—whether 
                  conversations are handled by humans, AI, or both.
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}