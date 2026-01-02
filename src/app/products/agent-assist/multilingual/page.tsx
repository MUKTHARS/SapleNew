'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Languages, Flag, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MultilingualPage() {
  const supportedLanguages = [
    { code: 'EN', name: 'English', native: 'English' },
    { code: 'ES', name: 'Spanish', native: 'Español' },
    { code: 'FR', name: 'French', native: 'Français' },
    { code: 'DE', name: 'German', native: 'Deutsch' },
    { code: 'JA', name: 'Japanese', native: '日本語' },
    { code: 'ZH', name: 'Chinese', native: '中文' },
    { code: 'AR', name: 'Arabic', native: 'العربية' },
    { code: 'HI', name: 'Hindi', native: 'हिन्दी' },
    { code: 'PT', name: 'Portuguese', native: 'Português' },
    { code: 'RU', name: 'Russian', native: 'Русский' },
    { code: 'KO', name: 'Korean', native: '한국어' },
    { code: 'IT', name: 'Italian', native: 'Italiano' },
  ];

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
            Multilingual Support
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Break language barriers and serve global customers with AI-powered multilingual 
            assistance that understands cultural nuance and regional context.
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
              Global Communication Made Easy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI provides real-time translation, cultural adaptation, and language-specific 
              guidance to help agents communicate effectively with customers worldwide.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  title: 'Real-Time Translation',
                  description: 'Instant translation between 50+ languages during live conversations'
                },
                {
                  icon: Languages,
                  title: 'Cultural Adaptation',
                  description: 'Context-aware suggestions that respect cultural norms and customs'
                },
                {
                  icon: Flag,
                  title: 'Regional Compliance',
                  description: 'Ensures responses comply with local regulations and standards'
                },
                {
                  icon: CheckCircle,
                  title: 'Quality Assurance',
                  description: 'Validates translations for accuracy and appropriateness'
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
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supported Languages</h3>
              <div className="grid grid-cols-3 gap-4">
                {supportedLanguages.map((lang, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-gray-50">
                    <div className="font-bold text-gray-900 text-lg mb-1">{lang.code}</div>
                    <div className="text-sm text-gray-700">{lang.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{lang.native}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600">
                  And 40+ more languages with ongoing expansion
                </p>
              </div>
            </div>

            <div className="relative h-[300px] w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/multilingual-support.png"
                  alt="Multilingual Support Interface"
                  width={500}
                  height={250}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}