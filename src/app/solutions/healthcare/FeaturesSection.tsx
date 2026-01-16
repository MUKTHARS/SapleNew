// C:\saple.ai\SapleNew\src\app\products\healthcare\FeaturesSection.tsx
'use client';

import { CheckCircle, Zap, Shield, Clock, Users, Heart, Stethoscope, Activity, FileText, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export function FeaturesSection() {
  return (
    <div className="min-h-screen bg-black">
      {/* 3. Features Section - Alternating Layout */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smarter, faster healthcare operations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Intelligent AI solutions transforming healthcare delivery
            </p>
          </div>

          {/* Feature 1: Intelligent Self-service */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
              <Image
                src="/images/health-self-service.jpg"
                alt="Intelligent self-service in healthcare"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Intelligent Self-service</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Deliver personalized, multilingual self-service across channels
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Automate appointments, medication adherence, and natural-language FAQs for patients, 
                caregivers, members, and employees—available anytime, anywhere with 24/7 accessibility.
              </p>
              <ul className="space-y-4">
                {['Multilingual patient support', 'Automated appointment scheduling', 'Medication adherence programs', '24/7 accessibility'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2: AI-augmented Care Teams */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 lg:flex-row-reverse">
            <div className="lg:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              <Image
                src="/images/health-care-teams.jpg"
                alt="AI-augmented healthcare teams"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">AI-augmented Care</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Equip healthcare teams with real-time AI assistance
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Empower contact center agents with AI-driven support to resolve patient issues faster, 
                reduce repetitive requests, and deliver consistent, high-quality support to patients and members.
              </p>
              <ul className="space-y-4">
                {['Real-time clinical guidance', 'Reduced administrative burden', 'Consistent patient support', 'Quality assurance'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3: Unified Information Access */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
              <Image
                src="/images/health-data-access.jpg"
                alt="Unified healthcare data access"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6 border border-purple-500/20">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Unified access to critical information</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Provide secure, unified access to critical information
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Enable secure, AI-driven access to essential data—from clinical content and compliance 
                reporting to third-party systems—improving decision-making and care accessibility while 
                maintaining HIPAA compliance.
              </p>
              <ul className="space-y-4">
                {['HIPAA-compliant access', 'Clinical decision support', 'Compliance reporting', 'Third-party system integration'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Patient Experience Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A patient-first care experience
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reduce administrative overhead while improving patient satisfaction through intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Automated scheduling and reminders",
                description: "Simplify appointment booking and deliver tailored reminders for visits, medications, and services—boosting adherence and minimizing no-shows.",
                color: "from-blue-500/10 to-blue-600/10",
                borderColor: "border-blue-500/20"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Instant access to health information",
                description: "Give patients immediate access to lab results, medical records, and post-care guidance, empowering them to take control of their health.",
                color: "from-green-500/10 to-emerald-600/10",
                borderColor: "border-green-500/20"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Seamless caregiver connectivity",
                description: "Enable real-time communication, coordinated care updates, and follow-up reminders—ensuring patients stay connected to caregivers.",
                color: "from-purple-500/10 to-pink-600/10",
                borderColor: "border-purple-500/20"
              }
            ].map((feature, index) => (
              <div key={index} className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} border ${feature.borderColor} hover:scale-[1.02] transition-all duration-300`}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center mb-6">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Payer Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowered members and efficient payers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI agents help members navigate billing and claims with ease while enabling operational efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Transparent billing and payments",
                description: "Offer real-time visibility into balances, payment history, and billing details with guidance on flexible payment options and recurring plans.",
                stats: "85% reduction in billing inquiries"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Claims support and financial assistance",
                description: "Provide instant claim status updates and personalized recommendations for financial aid, discounts, or assistance programs based on individual needs.",
                stats: "60% faster claims processing"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "End-to-end billing automation",
                description: "Automate billing workflows, payment processing, and claims management with AI—reducing errors, accelerating cycles, and improving efficiency.",
                stats: "45% reduction in manual work"
              }
            ].map((solution, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-900/10 border border-gray-800 hover:border-green-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center mb-6">
                  <div className="text-green-400">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="px-4 py-2 bg-green-500/10 rounded-full inline-block">
                  <span className="text-green-400 text-sm font-medium">{solution.stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Life Sciences Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI support for life sciences
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enhance medical affairs and patient support with AI-driven solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Medical information delivery",
                description: "Instantly retrieve and share up-to-date clinical, safety, and drug information with healthcare professionals and patients.",
                features: ["Real-time updates", "Evidence-based content", "Multi-language support"]
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Automated medical inquiry handling",
                description: "Manage inquiries on dosage, usage, and side effects through AI agents, with seamless escalation to medical experts for complex cases.",
                features: ["Automated triage", "Expert escalation", "Compliance tracking"]
              },
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: "Proactive adverse event detection",
                description: "Use NLP-powered AI to analyze conversations and feedback in real time, identifying potential adverse events early to reduce risk.",
                features: ["Real-time monitoring", "Risk assessment", "Regulatory reporting"]
              }
            ].map((solution, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-teal-500/30 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center mb-6 group-hover:border-teal-500/50 transition-colors">
                  <div className="text-teal-400">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}