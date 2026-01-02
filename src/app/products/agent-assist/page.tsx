'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AgentAssistPage() {
  const features = [
    {
      icon: Brain,
      title: 'Contextual Guidance',
      description: 'Real-time recommendations and decision support',
      href: '/products/agent-assist/contextual-guidance'
    },
    {
      icon: Sparkles,
      title: 'Response Suggestions',
      description: 'AI-generated responses and conversation cues',
      href: '/products/agent-assist/response-suggestions'
    },
    {
      icon: Shield,
      title: 'Knowledge Assistant',
      description: 'Instant access to company knowledge base',
      href: '/products/agent-assist/knowledge'
    },
    {
      icon: Zap,
      title: 'Automated Summaries',
      description: 'Automatic conversation summaries and notes',
      href: '/products/agent-assist/summaries'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Saple AI Agent Assist
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empower human agents with an intelligent AI co-pilot that works <span className="font-semibold text-gray-900">in real time</span>
            </p>
            
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Saple AI Agent Assist uses advanced generative and agentic AI to <span className="font-medium">guide, accelerate, and elevate</span> every customer interaction. 
              It understands live conversations, automates behind-the-scenes work, and delivers context-aware guidance—so agents can focus on empathy, judgment, and outcomes.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Augment Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Augment human agents with intelligent AI assistance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Provide context-aware guidance, workflow automation, and real-time insights that help agents 
                resolve issues faster—without compromising quality.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/agent-assist-1.png"
                  alt="AI Agent Assist Interface"
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

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Smart AI for Human Agents
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Provide real-time recommendations, coaching cues, and automated summaries that help agents 
              work smarter, reduce AHT, and boost customer satisfaction.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                >
                  <Link href={feature.href} className="block">
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-700">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Deliver Value-Added Service
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Improve Decision-making',
                  description: 'Apply intelligent, policy-driven guidelines aligned with your company standards to help agents make confident, consistent decisions.'
                },
                {
                  title: 'Enhance Customer Experience',
                  description: 'Deliver personalized, next-best actions by analyzing each interaction alongside customer profile—driving higher satisfaction and loyalty.'
                },
                {
                  title: 'Increase Agent Utilization',
                  description: 'Enable agents to handle multiple chat interactions simultaneously without compromising context or quality—boosting productivity.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Unified Inbox */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unified AI-powered Inbox
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Equip agents to manage and resolve omnichannel conversations with ease. A single interface 
                that brings together all customer interactions across every channel.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/unified-inbox.png"
                  alt="Unified AI-powered Inbox"
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
        </div>
      </section>
    </div>
  );
}