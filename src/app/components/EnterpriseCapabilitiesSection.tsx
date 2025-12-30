// src/app/components/EnterpriseCapabilitiesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Cpu, Shield, Globe, Server, ShieldCheck } from 'lucide-react';

const enterpriseFeatures = [
  {
    title: "Multi-LLM Orchestration",
    description: "Intelligently route queries to GPT-4, Claude, Gemini, or custom models based on context and cost.",
    icon: <Cpu className="w-6 h-6" />,
    stats: ["96% accuracy", "70% cost savings"]
  },
  {
    title: "Advanced Security",
    description: "End-to-end encryption, role-based access, audit logs, and compliance with global standards.",
    icon: <Shield className="w-6 h-6" />,
    stats: ["SOC 2 Type II", "GDPR ready"]
  },
  {
    title: "Global Performance",
    description: "Deploy agents globally with local language support and region-specific compliance.",
    icon: <Globe className="w-6 h-6" />,
    stats: ["15 languages", "50+ regions"]
  },
  {
    title: "Scalable Infrastructure",
    description: "Auto-scaling infrastructure that handles millions of conversations with sub-second latency.",
    icon: <Server className="w-6 h-6" />,
    stats: ["99.9% uptime", "Millions TPS"]
  }
];

export function EnterpriseCapabilitiesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Enterprise Demands</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Trusted by global enterprises, our platform delivers the security, reliability, and scalability 
              required for mission-critical deployments.
            </p>

            <div className="space-y-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <div className="text-amber-400">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-3">
                      {feature.description}
                    </p>
                    <div className="flex gap-4">
                      {feature.stats.map((stat, idx) => (
                        <span key={idx} className="text-sm font-medium bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-400 px-3 py-1 rounded-full">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-2">
              <div className="aspect-square bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/10 rounded-2xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg border border-amber-500/30 mb-6">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-white">Enterprise Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Active Agents", value: "2.4K", change: "+12%" },
                      { label: "Avg Response Time", value: "0.8s", change: "-25%" },
                      { label: "Customer Satisfaction", value: "94%", change: "+8%" },
                      { label: "Automation Rate", value: "87%", change: "+15%" },
                    ].map((metric, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700">
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                        <div className="text-xs text-green-400 mt-1">{metric.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}