
// src/app/components/UseCasesSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 

  // MessageCircle,
  // Shield,
  // Clock,
  // Target
} from 'lucide-react';

const useCases = [
  {
    title: "Intelligent Customer Support",
    description: "AI Agents that support common customer requests and solve issues 24/7",
    color: "#ffffffff",
    features: ["24/7 availability", "Instant resolution", "Multi-language support"],
    bgImage: "/images/cards.jpg" 
  },
  {
    title: "Employee Knowledge Assist",
    description: "Help employees find answers and assist internal operations teams",
    color: "#ffffffff",
    features: ["Quick knowledge retrieval", "Internal process automation", "Team collaboration"],
    bgImage: "/images/cards.jpg" 
  },
  {
    title: "Sales Enablement",
    description: "Quality leads, answer questions, and automate bookings",
    color: "#ffffffff",
    features: ["Lead qualification", "Automated follow-ups", "Booking automation"],
    bgImage: "/images/cards.jpg" 
  },
  {
    title: "Workflow Automation",
    description: "Trigger processes across your tools to drive measurable results",
    color: "#ffffffff",
    features: ["Cross-tool integration", "Automated workflows", "Performance tracking"],
    bgImage: "/images/cards.jpg" 
  }
];

export function MultipleUseCase() {
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

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              
<div className="relative h-full rounded-2xl p-6 border border-white/10 hover:border-[#0C7075]/50 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden">
  {/* Dark background image without black opacity */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 opacity-90">
      <Image src={useCase.bgImage} alt={useCase.title} fill className="object-cover" />
    </div>
  </div>
  
  {/* Content with white text */}
  <div className="relative z-10">
    {/* Title - white text */}
    <h3 className="text-xl font-semibold text-white mb-3">
      {useCase.title}
    </h3>

    {/* Description - light gray text */}
   <p className="text-white mb-4 flex-grow">
  {useCase.description}
</p>


    {/* Features - light gray text with color accent */}
    <div className="space-y-2 mt-4">
      {useCase.features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: useCase.color }}
          />
          <span className="text-sm text-white">{feature}</span>
        </div>
      ))}
    </div>

    {/* Bottom accent line - use case color */}
    <div 
      className="mt-6 pt-4 border-t border-white/20 group-hover:border-[#0C7075] transition-colors duration-300"
    />
  </div>
</div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: <MessageCircle className="w-5 h-5" />, text: "Omnichannel Support" },
            { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
            { icon: <Clock className="w-5 h-5" />, text: "Real-time Processing" },
            { icon: <Target className="w-5 h-5" />, text: "Scalable Architecture" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-3 bg-gray-900/50 rounded-xl p-4 backdrop-blur-sm border border-white/5">
  <div className="text-white">
    {feature.icon}
  </div>
  <span className="font-medium text-white">{feature.text}</span>
</div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}