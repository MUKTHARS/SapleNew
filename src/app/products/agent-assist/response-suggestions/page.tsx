'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResponseSuggestionsPage() {
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
            Response Suggestions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            AI-generated response options that help agents communicate more effectively, 
            maintain brand voice, and resolve issues faster.
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
              Intelligent Response Generation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI analyzes the conversation context and generates multiple response options that 
              agents can use with a single click—maintaining consistency while saving time.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: MessageSquare,
                  title: 'Multiple Options',
                  description: 'Provides 3-5 suggested responses tailored to the conversation context'
                },
                {
                  icon: Sparkles,
                  title: 'Brand Consistency',
                  description: 'Ensures all responses align with your company tone and voice guidelines'
                },
                {
                  icon: TrendingUp,
                  title: 'Performance Tracking',
                  description: 'Analyzes which suggestions lead to successful resolutions'
                },
                {
                  icon: CheckCircle,
                  title: 'Quality Assurance',
                  description: 'Validates responses against compliance and policy requirements'
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
                src="/images/response-suggestions.png"
                alt="Response Suggestions Interface"
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

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Measurable Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: '45%',
                title: 'Faster Response Time',
                description: 'Agents respond 45% faster with AI suggestions'
              },
              {
                stat: '30%',
                title: 'Reduced Typing',
                description: 'Decrease agent typing effort by 30%'
              },
              {
                stat: '95%',
                title: 'Adoption Rate',
                description: '95% of agents use suggestions regularly'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}