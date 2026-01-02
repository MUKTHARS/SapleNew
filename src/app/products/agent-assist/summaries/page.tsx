'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, FileText, ClipboardCheck, BarChart, Timer } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SummariesPage() {
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
            Automated Summaries
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Save agents hours of manual work with AI-generated conversation summaries, 
            notes, and follow-up tasks—automatically created after every interaction.
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
              Intelligent Note-Taking
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI automatically analyzes complete conversations and generates detailed summaries 
              that capture key points, action items, and outcomes—eliminating manual note-taking.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: FileText,
                  title: 'Conversation Summaries',
                  description: 'Extracts main topics, decisions, and resolutions from each chat'
                },
                {
                  icon: ClipboardCheck,
                  title: 'Action Items',
                  description: 'Identifies and lists follow-up tasks and commitments'
                },
                {
                  icon: BarChart,
                  title: 'Sentiment Analysis',
                  description: 'Includes customer sentiment and satisfaction indicators'
                },
                {
                  icon: Timer,
                  title: 'Time Stamps',
                  description: 'Automatically tracks resolution times and key milestones'
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
                src="/images/automated-summaries.png"
                alt="Automated Summaries Interface"
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

        {/* Impact Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Time Savings Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Before AI Summaries</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>5-10 minutes per conversation for manual notes</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Inconsistent quality and format</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Missed details and action items</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Agent fatigue and burnout</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">With AI Summaries</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Instant summaries after each conversation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Consistent, high-quality formatting</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Complete capture of all details</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Agents focus on customer interaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}