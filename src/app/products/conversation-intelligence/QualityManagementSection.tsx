// C:\saple.ai\SapleNew\src\app\products\conversation-intelligence\QualityManagementSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Users } from 'lucide-react';

export function QualityManagementSection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Target className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">Quality Management</span>
            </div>
            <section className="text-3xl md:text-4xl font-bold text-black-900 mb-4">
              See every interaction. Set a higher standard for quality.
            </section>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern contact centers can&apos;t rely on partial reviews to measure quality. Saple AI applies advanced AI to 
              continuously assess conversations at scale—giving teams a complete, accurate view of agent performance and compliance.
            </p>
          </motion.div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Continuous Evaluation',
              description: 'Continuous evaluation across all conversations, eliminating blind spots caused by limited QA sampling',
              icon: TrendingUp
            },
            {
              title: 'Consistent Assessment',
              description: 'Consistent behavior and policy assessment, powered by AI models that understand context, intent, and tone',
              icon: Shield
            },
            {
              title: 'Flexible Workflows',
              description: 'Flexible review workflows that blend automated scoring with targeted human validation where it matters most',
              icon: Users
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 shadow-sm max-w-3xl mx-auto">
            <p className="text-gray-900 text-lg font-medium">
              With Saple AI, quality management shifts from reactive audits to proactive performance enablement—driving higher standards while reducing operational overhead.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}