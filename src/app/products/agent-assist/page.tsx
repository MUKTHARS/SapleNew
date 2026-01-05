'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Sparkles, Shield, Zap, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Lightbulb } from 'lucide-react';
import { ProductivityMetricsSection } from './ProductivityMetricsSection';
// import { IntegrationCapabilitiesSection } from './IntegrationCapabilitiesSection';
import IntegrationsSection from '../../components/integrations-section';
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl  text-white mb-6 leading-tight">
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
                  src="/images/AI Agent Assist.png"
                  alt="AI Agent Assist Interface"
                  width={600}
                  height={400}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t " />
            </motion.div>
          </div>

          {/* Add Productivity Metrics Section */}
          <ProductivityMetricsSection />

          {/* Features Section with Background Container */}
          <div className="mb-20">
            <div className="relative">
              {/* Background Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-gray-50/20 rounded-2xl -m-6" />
              
              {/* Content Container with Padding */}
              <div className="relative p-8 rounded-2xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Title and Description on Left */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <section className="text-3xl md:text-4xl font-bold text-gray-900">
                      Smart AI for Human Agents
                    </section>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Provide real-time recommendations, coaching cues, and automated summaries that help agents 
                      work smarter, reduce AHT, and boost customer satisfaction.
                    </p>
                  </motion.div>
                  
                  {/* Real-Time AI Assistance Features on Right */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      Real-Time AI Assistance
                    </h3>
                    <div className="space-y-4">
                      {features.map((feature, index) => (
                        <Link 
                          key={index}
                          href={feature.href}
                          className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300 bg-white"
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
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <section className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Enhance Customer Experience
            </section>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {/* Card 1 - ENHANCE CUSTOMER EXPERIENCE */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center">
                        <Users className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                      Enhance Customer Experience
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Next-best action tailors service for each customer by analyzing individual interactions 
                    and their unique profile to increase satisfaction, loyalty, and lifetime value.
                  </p>
                </div>
              </div>

              {/* Card 2 - OFFER VALUE-ADDED SERVICE */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                      Offer Value-Added Service
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Analyze data from thousands of customer interactions to offer valuable insights based on 
                    customer behavior and preferences using generative AI.
                  </p>
                </div>
              </div>

              {/* Card 3 - IMPROVE DECISION MAKING */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center">
                        <Brain className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                      Improve Decision Making
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Set intelligent guidelines based on your company&apos;s standards to help agents make  
                    informed choices to provide great customer experiences.
                  </p>
                </div>
              </div>

              {/* Card 4 - INCREASE AGENT UTILIZATION */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-orange-100 rounded-md flex items-center justify-center">
                        <Zap className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                      Increase Agent Utilization
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    Manage multiple chat inquiries concurrently, while maintaining conversation integrity 
                    and increasing agent performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add Integration Capabilities Section */}
          {/* <IntegrationCapabilitiesSection /> */}
          <IntegrationsSection />
          
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