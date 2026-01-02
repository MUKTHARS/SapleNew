// src/app/products/ai-agents/EnterpriseGuardrailsSection.tsx
'use client';

import { motion } from 'framer-motion';
// import { Lock, Shield, AlertCircle, Monitor } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function EnterpriseGuardrailsSection() {
  // const features = [
  //   {
  //     icon: Lock,
  //     title: 'Data Privacy',
  //     description: 'End-to-end encryption and compliance'
  //   },
  //   {
  //     icon: Shield,
  //     title: 'Policy Enforcement',
  //     description: 'Configurable guardrails and rules'
  //   },
  //   {
  //     icon: AlertCircle,
  //     title: 'Risk Detection',
  //     description: 'Real-time anomaly monitoring'
  //   },
  //   {
  //     icon: Monitor,
  //     title: 'Supervisory Models',
  //     description: 'Continuous oversight and control'
  //   }
  // ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/Guardrails_1.png',
    '/images/Guardrails_2.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-26 md:py-30 lg:py-34 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <section className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise guardrails to deploy with confidence
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your business and your customers with system-level safeguards
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              Protect your business and your customers with system-level safeguards designed for 
              enterprise environments. Saple AI provides configurable guardrails, supervisory models, 
              and continuous real-time monitoring to ensure AI Agents operate safely, compliantly, and as intended.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              From data privacy to policy enforcement, Saple&rsquo;s security-first architecture ensures 
              your AI Agents are always production-ready.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
           <div className="relative h-[500px] w-full rounded-xl overflow-hidden  bg-gray-50">
  <div className="relative w-full h-full flex items-center justify-center">
    {images.map((src, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSlide === index ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 flex items-center justify-center ${
          currentSlide === index ? 'z-10' : 'z-0'
        }`}
      >
        <Image
          src={src}
          alt={`Guardrails Image ${index + 1}`}
          width={800}
          height={400}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
        />
      </motion.div>
    ))}
  </div>
  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
</div>
            
            {/* Dots indicator */}
            {/* <div className="flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-gray-700 w-4' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}