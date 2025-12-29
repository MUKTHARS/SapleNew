
// src/app/components/UseCasesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Headphones, 
  Users, 
  TrendingUp, 
  Workflow,
  MessageCircle,
  Shield,
  Clock,
  Target
} from 'lucide-react';

const useCases = [
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Intelligent Customer Support",
    description: "AI Agents that support common customer requests and solve issues 24/7",
    color: "#0EA5E9",
    features: ["24/7 availability", "Instant resolution", "Multi-language support"]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Employee Knowledge Assist",
    description: "Help employees find answers and assist internal operations teams",
    color: "#8B5CF6",
    features: ["Quick knowledge retrieval", "Internal process automation", "Team collaboration"]
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Sales Enablement",
    description: "Quality leads, answer questions, and automate bookings",
    color: "#10B981",
    features: ["Lead qualification", "Automated follow-ups", "Booking automation"]
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Automation",
    description: "Trigger processes across your tools to drive measurable results",
    color: "#F59E0B",
    features: ["Cross-tool integration", "Automated workflows", "Performance tracking"]
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One Conversational AI Platform. Multiple Use Cases.
          </h2>
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
              <div className="relative h-full bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#0C7075]/30 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Icon with gradient */}
                <div 
                  className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${useCase.color}20, ${useCase.color}10)`,
                    border: `1px solid ${useCase.color}30`
                  }}
                >
                  <div style={{ color: useCase.color }}>
                    {useCase.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mt-4">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: useCase.color }}
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div 
                  className="mt-6 pt-4 border-t border-gray-100 group-hover:border-[#0C7075]/30 transition-colors duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
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
            <div key={index} className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl p-4">
              <div className="text-[#0C7075]">
                {feature.icon}
              </div>
              <span className="font-medium text-gray-700">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}