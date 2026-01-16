// C:\saple.ai\SapleNew\src\app\products\utilities\FeaturesSection.tsx
'use client';

import { CheckCircle, Zap, Users, Calendar, CreditCard, Bell} from 'lucide-react';
import Image from 'next/image';

export function FeaturesSection() {
  return (
    <div className="min-h-screen bg-black">
      {/* 3. Features Section - Alternating Layout */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automate utility journeys with human-like AI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cover up to 90% of utility use cases with conversational AI
            </p>
          </div>

          {/* Feature 1: Human-like AI Conversations */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10" />
              <Image
                src="/images/utilities-ai-conversations.jpg"
                alt="Human-like AI conversations for utilities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-6 border border-orange-500/20">
                <Users className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-400">Human-like AI</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Deliver personalized, natural conversations with advanced AI
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our AI listens actively, switches context effortlessly, and responds with empathy—even 
                when customers interrupt. Deliver truly multilingual, human-like experiences across 
                voice and chat channels.
              </p>
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-4">What customers can do instantly:</h4>
                <ul className="space-y-3">
                  {['Report outages or service issues', 'Book or reschedule appointments', 'Track bills, payments, and service updates'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2: Smarter Service Scheduling */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 lg:flex-row-reverse">
            <div className="lg:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              <Image
                src="/images/utilities-scheduling.jpg"
                alt="Smart service scheduling for utilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Smart Scheduling</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Make booking effortless with real-time availability
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Integrate seamlessly with your CRM/ERP to show real-time availability and track service 
                appointments. Make scheduling simple and efficient for both customers and your operations team.
              </p>
              <ul className="space-y-4">
                {['Waste collection scheduling', 'Tank refills and deliveries', 'Technician dispatches and visits', 'Real-time availability tracking'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3: Seamless Billing and Payments */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
              <Image
                src="/images/utilities-billing.jpg"
                alt="Seamless billing and payments for utilities"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
                <CreditCard className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Billing & Payments</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Increase collections and reduce friction with secure payments
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Connect easily to your existing payment gateways and infrastructure to support omnichannel 
                payments. Reduce payment delays and improve cash flow with automated billing solutions.
              </p>
              <ul className="space-y-4">
                {['Secure bill payments processing', 'Auto-pay enrollment automation', 'Payment confirmations and receipts', 'Multiple payment gateway support'].map((item, idx) => (
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

      {/* 4. Self-Service Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Anytime, anywhere self-service
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enable instant self-serve experiences across channels with proactive, contextual engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Account Onboarding",
                description: "Automate registration, verification, and new account setup with intelligent workflows that streamline customer onboarding.",
                features: ["Automated registration", "Identity verification", "Account setup"]
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Payment Reminders",
                description: "Send out timely reminders on text and voice channels to ensure timely collections and reduce payment delays.",
                features: ["Automated notifications", "Multi-channel delivery", "Personalized timing"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Alerts & Notifications",
                description: "Send proactive notifications on outages, usage status, pickup schedules, and service updates to keep customers informed.",
                features: ["Real-time alerts", "Service notifications", "Usage updates"]
              }
            ].map((feature, index) => (
              <div key={index} className={`p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-orange-500/30 transition-all duration-300`}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center mb-6">
                  <div className="text-orange-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Support Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Turn support conversations into moments that matter
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deliver 24/7 support with AI agents that feel human
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-6">Built-in intelligence for superior service</h3>
                <p className="text-gray-300 mb-8">
                  Resolve queries quickly and escalate seamlessly to human agents with full context when needed. 
                  Every interaction is handled with care and efficiency, ensuring customer satisfaction.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <BarChart className="w-6 h-6" />,
                      title: "Real-time dashboards",
                      description: "Access actionable insights and performance metrics with comprehensive analytics dashboards"
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Location-aware services",
                      description: "Provide personalized support based on customer location for relevant service information"
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6" />,
                      title: "Data-driven improvements",
                      description: "Leverage analytics to understand user feedback and optimize CX and operations"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0">
                        <div className="text-orange-400">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10" />
              <Image
                src="/images/utilities-support.jpg"
                alt="24/7 AI support for utilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* 6. Integrations Section
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Plug & play integrations with 100+ platforms
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Seamlessly connect with your existing CRM, ERP, and payment systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Salesforce", "SAP", "Oracle", "Microsoft Dynamics", "Zendesk", "ServiceNow",
              "Stripe", "PayPal", "QuickBooks", "Workday", "AWS", "Azure",
              "Twilio", "Slack", "Teams", "Google Workspace", "Shopify", "Magento"
            ].map((platform, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/10 border border-gray-800 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {platform}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}