'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react';

export function ProductivityMetricsSection() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '50%',
      label: 'Increase in agent productivity',
      description: 'Agents handle more conversations with AI assistance'
    },
    {
      icon: Users,
      value: '2X',
      label: 'Increase in tickets handled',
      description: 'Double the customer support capacity'
    },
    {
      icon: DollarSign,
      value: '60%',
      label: 'Reduction in operational costs',
      description: 'Significant savings on support operations'
    },
    {
      icon: CheckCircle,
      value: '85%',
      label: 'Higher first-contact resolution',
      description: 'Improved customer satisfaction scores'
    }
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <section className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transformative Impact on Support Operations
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprises using Saple AI Agent Assist achieve measurable improvements across all key performance indicators
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <metric.icon className="w-7 h-7 text-gray-700" />
              </div> */}
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {metric.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">40%</div>
              <p className="text-gray-600">Reduction in average handling time</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">90%</div>
              <p className="text-gray-600">Agent satisfaction improvement</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">75%</div>
              <p className="text-gray-600">Faster onboarding for new agents</p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}