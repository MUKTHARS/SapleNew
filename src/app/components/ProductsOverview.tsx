'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, BarChart, MessageSquare, Zap, CheckCircle, Eye, Smartphone, Search, Heart, Calendar, Globe } from 'lucide-react';

export function ProductsOverview() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#0C7075]/10 to-transparent rounded-full blur-3xl -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#0C7075]/10 to-transparent rounded-full blur-3xl translate-x-48 translate-y-48" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C7075]/10 backdrop-blur-sm border border-[#0C7075]/20 mb-6">
            <span className="text-sm font-medium text-[#0C7075]">AI Solutions</span>
          </div> */}
          <section className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise AI Platform
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI capabilities for modern customer service operations
          </p>
        </motion.div>

        {/* Product Cards Grid with matching colors */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Agents Card - Teal theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-[#0C7075]/5 via-white/90 to-white rounded-2xl border border-[#0C7075]/20 hover:border-[#0C7075]/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0C7075] to-[#0A5A60] flex items-center justify-center">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-[#0C7075]/10 text-[#0C7075] text-xs font-semibold rounded-full border border-[#0C7075]/20">
                    Autonomous
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  AI Agents
                </h3>
                <p className="text-gray-600 mb-6">
                  Autonomous AI agents that think, act, and resolve customer issues independently.
                </p>
              </div>

              {/* Features List */}
              <div className="border-t border-gray-200/50 p-8 pt-6">
                <h4 className="text-sm font-semibold text-[#0C7075] uppercase tracking-wider mb-4">Key Capabilities</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0C7075]/10 flex items-center justify-center flex-shrink-0 border border-[#0C7075]/20">
                      <CheckCircle className="w-4 h-4 text-[#0C7075]" />
                    </div>
                    <span className="text-gray-700 text-sm">Train Agents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0C7075]/10 flex items-center justify-center flex-shrink-0 border border-[#0C7075]/20">
                      <MessageSquare className="w-4 h-4 text-[#0C7075]" />
                    </div>
                    <span className="text-gray-700 text-sm">Conversational Agents (Chat & Voice)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0C7075]/10 flex items-center justify-center flex-shrink-0 border border-[#0C7075]/20">
                      <Zap className="w-4 h-4 text-[#0C7075]" />
                    </div>
                    <span className="text-gray-700 text-sm">Task & Workflow Agents</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0C7075]/10 flex items-center justify-center flex-shrink-0 border border-[#0C7075]/20">
                      <Calendar className="w-4 h-4 text-[#0C7075]" />
                    </div>
                    <span className="text-gray-700 text-sm">Appointment & Action Agents</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agent Assist Card - Dark teal theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-[#072E33]/5 via-white/90 to-white rounded-2xl border border-[#072E33]/20 hover:border-[#072E33]/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#072E33] to-[#0C7075] flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-[#072E33]/10 text-[#072E33] text-xs font-semibold rounded-full border border-[#072E33]/20">
                    Human Assistance
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Agent Assist
                </h3>
                <p className="text-gray-600 mb-6">
                  Empower humans with real-time AI assistance for superior customer interactions.
                </p>
              </div>

              {/* Features List */}
              <div className="border-t border-gray-200/50 p-8 pt-6">
                <h4 className="text-sm font-semibold text-[#072E33] uppercase tracking-wider mb-4">Key Capabilities</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#072E33]/10 flex items-center justify-center flex-shrink-0 border border-[#072E33]/20">
                      <Eye className="w-4 h-4 text-[#072E33]" />
                    </div>
                    <span className="text-gray-700 text-sm">Knowledge Assist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#072E33]/10 flex items-center justify-center flex-shrink-0 border border-[#072E33]/20">
                      <MessageSquare className="w-4 h-4 text-[#072E33]" />
                    </div>
                    <span className="text-gray-700 text-sm">AI Response Suggestions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#072E33]/10 flex items-center justify-center flex-shrink-0 border border-[#072E33]/20">
                      <Smartphone className="w-4 h-4 text-[#072E33]" />
                    </div>
                    <span className="text-gray-700 text-sm">AI Summaries (Chat, Voice, Email)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#072E33]/10 flex items-center justify-center flex-shrink-0 border border-[#072E33]/20">
                      <CheckCircle className="w-4 h-4 text-[#072E33]" />
                    </div>
                    <span className="text-gray-700 text-sm">Contextual Guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#072E33]/10 flex items-center justify-center flex-shrink-0 border border-[#072E33]/20">
                      <Globe className="w-4 h-4 text-[#072E33]" />
                    </div>
                    <span className="text-gray-700 text-sm">Multilingual & Translation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conversation Intelligence Card - Blue-green theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full bg-gradient-to-br from-[#0A5A60]/5 via-white/90 to-white rounded-2xl border border-[#0A5A60]/20 hover:border-[#0A5A60]/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A5A60] to-[#0C7075] flex items-center justify-center">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-[#0A5A60]/10 text-[#0A5A60] text-xs font-semibold rounded-full border border-[#0A5A60]/20">
                    Analytics
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Conversation Intelligence
                </h3>
                <p className="text-gray-600 mb-6">
                  Turn every conversation into actionable insights for continuous improvement.
                </p>
              </div>

              {/* Features List */}
              <div className="border-t border-gray-200/50 p-8 pt-6">
                <h4 className="text-sm font-semibold text-[#0A5A60] uppercase tracking-wider mb-4">Key Capabilities</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A5A60]/10 flex items-center justify-center flex-shrink-0 border border-[#0A5A60]/20">
                      <BarChart className="w-4 h-4 text-[#0A5A60]" />
                    </div>
                    <span className="text-gray-700 text-sm">Conversation Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A5A60]/10 flex items-center justify-center flex-shrink-0 border border-[#0A5A60]/20">
                      <Search className="w-4 h-4 text-[#0A5A60]" />
                    </div>
                    <span className="text-gray-700 text-sm">Intent & Topic Discovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A5A60]/10 flex items-center justify-center flex-shrink-0 border border-[#0A5A60]/20">
                      <Heart className="w-4 h-4 text-[#0A5A60]" />
                    </div>
                    <span className="text-gray-700 text-sm">Sentiment & CX Insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A5A60]/10 flex items-center justify-center flex-shrink-0 border border-[#0A5A60]/20">
                      <Zap className="w-4 h-4 text-[#0A5A60]" />
                    </div>
                    <span className="text-gray-700 text-sm">Automation Opportunity Discovery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0A5A60]/10 flex items-center justify-center flex-shrink-0 border border-[#0A5A60]/20">
                      <Brain className="w-4 h-4 text-[#0A5A60]" />
                    </div>
                    <span className="text-gray-700 text-sm">AI Analyst</span>
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