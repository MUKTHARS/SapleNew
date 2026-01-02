'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function IntegrationCapabilitiesSection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden "
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/100plusintegrations.png"
              alt="100+ API Integrations"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}