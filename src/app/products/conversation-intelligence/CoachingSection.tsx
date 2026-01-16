// C:\saple.ai\SapleNew\src\app\products\conversation-intelligence\CoachingSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Users, Zap } from 'lucide-react';

export function CoachingSection() {
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
              <Users className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">Coaching</span>
            </div>
            
            <section className="text-3xl md:text-4xl font-bold text-black-900">
              Turn insight into impact—one agent at a time.
            </section>
            
            <p className="text-gray-700 leading-relaxed">
              Great coaching starts with knowing which behaviors truly influence outcomes. Saple AI connects 
              conversation intelligence directly to agent development—so coaching is targeted, measurable, and effective.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 font-medium mb-1">Define what excellence looks like</div>
                    <div className="text-sm text-gray-600">
                      Using AI to link specific agent behaviors to business results like conversion, resolution, and customer satisfaction
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 font-medium mb-1">Deliver focused coaching at scale</div>
                    <div className="text-sm text-gray-600">
                      AI-recommended actions tailored to each agent and backed by real conversation moments
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 font-medium mb-1">Measure coaching impact over time</div>
                    <div className="text-sm text-gray-600">
                      Identifying what&apos;s working, where agents improve, and where additional coaching support is needed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Coaching Impact Dashboard</h3>
                <p className="text-gray-600 mt-2">Real-time performance improvement tracking</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { metric: 'Average Resolution Time', improvement: '-24%', trend: 'positive' },
                  { metric: 'Customer Satisfaction', improvement: '+18%', trend: 'positive' },
                  { metric: 'First Contact Resolution', improvement: '+32%', trend: 'positive' },
                  { metric: 'Agent Confidence Score', improvement: '+41%', trend: 'positive' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="text-gray-900">{item.metric}</span>
                    <span className={`font-bold ${item.trend === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.improvement}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-900 font-medium text-center">
                  Saple AI transforms coaching from subjective feedback into a continuous performance engine—built to improve agents, coaches, and results together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}