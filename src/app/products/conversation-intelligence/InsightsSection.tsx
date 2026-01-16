// C:\saple.ai\SapleNew\src\app\products\conversation-intelligence\InsightsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, MessageSquare } from 'lucide-react';

export function InsightsSection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-4 py-2">
              <BarChart3 className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">Insights</span>
            </div>
            
            <section className="text-3xl md:text-4xl font-bold text-black-900">
              Turn conversations into confident business decisions
            </section>
            
            <p className="text-gray-700 leading-relaxed">
              Turn customer conversations into better business decisions with AI-powered insights 
              and recommendations that directly impact performance.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Ask questions in natural language and get clear, evidence-backed answers from your conversation data
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Focus on what matters most, with insights automatically prioritized by outcomes like sales conversion, 
                  issue resolution, handle time, and customer satisfaction
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-700 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Move from insight to action instantly with proactive AI-generated recommendations and one-click workflows
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mt-6">
              <p className="text-gray-900 font-medium">
                Saple AI ensures every insight is actionable—so teams spend less time analyzing data and more time improving results.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-100 rounded-full blur-xl" />
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Brain className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">AI Analyst</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ask anything. Understand everything. Act faster.
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Uncover pivotal insights hidden in your conversations using natural language questions and evidence-backed AI answers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Get answers in minutes, not days—no manual call reviews or complex dashboards
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Ask in-context follow-up questions to drill down to the true root cause of what&apos;s happening—and why
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Trust every insight, with cited conversations, supporting data, and clear AI explanations behind each answer
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-900 font-medium">
                  Saple AI Analyst transforms conversation data into clarity—so teams can move from questions to confident action, fast.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}