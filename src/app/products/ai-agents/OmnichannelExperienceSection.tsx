// src/app/products/ai-agents/OmnichannelExperienceSection.tsx
'use client';

import { motion } from 'framer-motion';
// import { MessageSquare, Phone, Mail, Globe } from 'lucide-react';
import Image from 'next/image';

export function OmnichannelExperienceSection() {
  // const channels = [
  //   { icon: MessageSquare, label: 'Chat', bg: 'bg-white/5', iconColor: 'text-white' },
  //   { icon: Phone, label: 'Voice', bg: 'bg-white/5', iconColor: 'text-white' },
  //   { icon: Mail, label: 'Email', bg: 'bg-white/5', iconColor: 'text-white' },
  //   { icon: Globe, label: 'Web', bg: 'bg-white/5', iconColor: 'text-white' },
  // ];

  return (
    <section className="py-26 md:py-20 lg:py-34 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <section className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect the customer experience across every channel
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet customers where they are—and help them get where they need to be.
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
      src="/images/Omnichannel.png"
      alt="Omnichannel Customer Experience"
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
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Saple AI Agents operate seamlessly across chat, voice, email, and messaging platforms, 
                  retaining full conversational context as customers move between channels.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Each channel is optimized independently, while the customer experience remains unified—resulting 
                  in faster resolutions and lower customer effort.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mt-6">
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  Unified Customer Context
                </div>
                <div className="text-sm text-gray-600 ">
                  Maintain complete conversation history and context across all touchpoints
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}