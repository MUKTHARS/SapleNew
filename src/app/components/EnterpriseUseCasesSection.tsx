// src/app/components/EnterpriseUseCasesSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, Building, TrendingUp, Globe } from 'lucide-react';

export function EnterpriseUseCasesSection() {
  const useCases = [
    {
      title: "Customer Support",
      description: "Automated resolution of customer queries with intelligent escalation to human agents.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-slate-900",
      stats: ["70% auto-resolution", "90% CSAT"]
    },
    {
      title: "Agent Assist",
      description: "Real-time guidance and information retrieval for support agents during live interactions.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-slate-900",
      stats: ["50% faster resolution", "40% less training"]
    },
    {
      title: "ITSM Automation",
      description: "Intelligent ticket routing, incident response, and automated troubleshooting.",
      icon: <Building className="w-6 h-6" />,
      color: "bg-slate-900",
      stats: ["80% auto-routing", "60% MTTR reduction"]
    },
    {
      title: "Finance Operations",
      description: "Automated invoice processing, compliance checks, and financial report generation.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-slate-900",
      stats: ["90% accuracy", "75% time saved"]
    },
    {
      title: "Knowledge Automation",
      description: "Intelligent document processing, knowledge base management, and information retrieval.",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-slate-900",
      stats: ["95% retrieval accuracy", "50k+ documents"]
    }
  ];

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          
          <section className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Designed for <span className="text-slate-900">Real-World</span><br />
            Enterprise Use Cases
          </section>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-700 leading-relaxed mb-6">
              From customer support and agent assist to ITSM, finance operations, and knowledge automation, Saple AI enables organizations to deploy production-ready agentic systems.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Scalable across teams, channels, and geographies with enterprise-grade reliability and performance.
            </p>
          </div>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white">
                        {useCase.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {useCase.title}
                      </h3>
                      <div className="flex gap-2">
                        {useCase.stats.map((stat, idx) => (
                          <span key={idx} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-700 rounded">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {useCase.description}
                  </p>
                  
                  {/* <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Learn more</span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                        <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
            
            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3"
            >
              <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-2/3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Ready to transform your enterprise operations?
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        Schedule a personalized demo to see how Saple AI can solve your specific business challenges.
                      </p>
                    </div>
                    
                    <button className="group inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 whitespace-nowrap">
                      <span>Request Demo</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}