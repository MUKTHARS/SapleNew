'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, Shield, Zap, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductivityMetricsSection } from './ProductivityMetricsSection';
import { IntegrationCapabilitiesSection } from './IntegrationCapabilitiesSection';

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
      {/* Hero Section - Dark Theme */}
      <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-58 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Saple AI Agent Assist
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Empower human agents with an intelligent AI co-pilot that works <span className="font-semibold text-white">in real time</span>
              </p>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Saple AI Agent Assist uses advanced generative and agentic AI to <span className="font-medium text-white">guide, accelerate, and elevate</span> every customer interaction. 
                It understands live conversations, automates behind-the-scenes work, and delivers context-aware guidance—so agents can focus on empathy, judgment, and outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the page remains the same */}
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
              <section className="text-3xl md:text-4xl font-bold text-gray-900">
                Augment human agents with intelligent AI assistance
              </section>
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
                  src="/images/bf2.avif"
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

          {/* Add Productivity Metrics Section */}
          <ProductivityMetricsSection />

          {/* Features Section - Updated Layout */}
          <div className="mb-20">
            <section className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Smart AI for Human Agents
            </section>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Provide real-time recommendations, coaching cues, and automated summaries that help agents 
              work smarter, reduce AHT, and boost customer satisfaction.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image on Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-[400px] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/bf1.avif"
                    alt="Smart AI for Human Agents"
                    width={600}
                    height={300}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </motion.div>
              
              {/* Content on Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <section className="text-3xl font-bold text-gray-900">
                  Real-Time AI Assistance
                </section>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Provide real-time recommendations, coaching cues, and automated summaries that help agents 
                  work smarter, reduce AHT, and boost customer satisfaction.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <Link 
                      key={index}
                      href={feature.href}
                      className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 mb-20">
            <section className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Enhance Customer Experience
            </section>
            
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
                },
                {
                  title: 'Deliver Value-Added Service',
                  description: 'Apply intelligent, policy-driven guidelines aligned with your company’s standards to deliver exceptional service.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add Integration Capabilities Section */}
          <IntegrationCapabilitiesSection />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <section className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unified AI-powered Inbox
              </section>
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
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 border border-gray-200 text-center max-w-md w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Experience the Power
                </h3>
                <p className="text-gray-600 mb-8">
                  See how Saple AI Agent Assist can transform your customer support operations
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg w-full justify-center"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}