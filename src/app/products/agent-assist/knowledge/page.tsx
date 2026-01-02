'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Search, BookOpen, FileText, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KnowledgePage() {
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
            Knowledge Assistant
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Instant access to your company knowledge base, providing agents with accurate information 
            exactly when they need it—without leaving the conversation.
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
              Intelligent Knowledge Retrieval
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI searches through your entire knowledge base—documents, FAQs, policies, and 
              procedures—to surface relevant information in real-time during customer conversations.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: Search,
                  title: 'Smart Search',
                  description: 'Understands context and intent to find exactly what agents need'
                },
                {
                  icon: BookOpen,
                  title: 'Document Understanding',
                  description: 'Extracts information from PDFs, Word docs, and other formats'
                },
                {
                  icon: FileText,
                  title: 'FAQ Integration',
                  description: 'Connects to existing FAQ databases and knowledge repositories'
                },
                {
                  icon: Database,
                  title: 'Cross-System Access',
                  description: 'Pulls information from CRMs, ticketing systems, and databases'
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
                src="/images/knowledge-assistant.png"
                alt="Knowledge Assistant Interface"
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
            Key Advantages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Always Accurate',
                description: 'Provides up-to-date information from approved sources'
              },
              {
                title: 'Time Savings',
                description: 'Reduces search time from minutes to seconds'
              },
              {
                title: 'Consistency',
                description: 'Ensures all agents give the same accurate information'
              },
              {
                title: 'Training Aid',
                description: 'Helps new agents learn company policies and procedures'
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}