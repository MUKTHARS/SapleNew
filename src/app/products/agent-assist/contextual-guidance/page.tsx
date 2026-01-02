'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Lightbulb, Target, Zap, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContextualGuidancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link 
          href="/products/agent-assist" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Agent Assist</span>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contextual Guidance
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Real-time AI assistance that understands the conversation context and provides intelligent 
            recommendations to help agents make better decisions faster.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Intelligent Decision Support
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI analyzes live conversations in real-time, providing context-aware suggestions, 
              policy reminders, and next-best-action recommendations that align with your business rules.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: Lightbulb,
                  title: 'Smart Recommendations',
                  description: 'AI suggests optimal responses based on conversation context and customer history'
                },
                {
                  icon: Target,
                  title: 'Policy Compliance',
                  description: 'Real-time alerts when conversations deviate from company policies or guidelines'
                },
                {
                  icon: Zap,
                  title: 'Instant Insights',
                  description: 'Customer sentiment analysis and intent detection for better understanding'
                },
                {
                  icon: Clock,
                  title: 'Time Optimization',
                  description: 'Reduces average handling time by providing quick access to relevant information'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/images/contextual-guidance.png"
                alt="Contextual Guidance Interface"
                width={600}
                height={300}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Business Benefits
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Improved Accuracy',
                description: 'Reduce errors by 65% with AI-powered guidance and policy enforcement'
              },
              {
                title: 'Faster Resolution',
                description: 'Decrease average handling time by 40% with real-time suggestions'
              },
              {
                title: 'Higher Satisfaction',
                description: 'Increase CSAT scores by improving agent confidence and response quality'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}