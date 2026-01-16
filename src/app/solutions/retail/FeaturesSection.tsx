// C:\saple.ai\SapleNew\src\app\products\retail\FeaturesSection.tsx
'use client';

import { CheckCircle, Zap, Users, ShoppingBag, Search, Package, Handshake, Smartphone, BarChart, Gift } from 'lucide-react';
import Image from 'next/image';

export function FeaturesSection() {
  return (
    <div className="min-h-screen bg-black">
      {/* 3. Customer-centric AI Agents Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer-centric AI agents
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform retail engagement with advanced AI agents that automate interactions and guide shoppers
            </p>
          </div>

          {/* Feature 1: Intuitive Search */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10" />
              <Image
                src="/images/retail-search.jpg"
                alt="Intuitive AI search for retail"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full mb-6 border border-pink-500/20">
                <Search className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-400">Intuitive Search</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI agents understand natural customer queries
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Deliver precise, personalized responses and resolve common issues independently—reducing 
                wait times and operational load while improving customer satisfaction.
              </p>
              <ul className="space-y-4">
                {['Natural language understanding', 'Personalized product recommendations', 'Instant query resolution', 'Reduced customer wait times'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2: Instant Information */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 lg:flex-row-reverse">
            <div className="lg:order-2 relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              <Image
                src="/images/retail-information.jpg"
                alt="Instant customer information access"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
                <Package className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Instant Information</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Customers instantly access what they need
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Provide frictionless access to order status, shipment tracking, delivery updates, 
                return policies, and product availability—enhancing the customer experience across 
                all touchpoints.
              </p>
              <ul className="space-y-4">
                {['Real-time order tracking', 'Inventory availability checks', 'Return policy information', 'Delivery status updates'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3: Seamless Hand-off */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />
              <Image
                src="/images/retail-handoff.jpg"
                alt="Seamless AI to human hand-off"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
                <Handshake className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Seamless Hand-off</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Smooth transition to human agents when needed
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                When issues require empathy or complexity handling, conversations transfer smoothly 
                to live agents with full context for faster, more effective resolution and better 
                customer experiences.
              </p>
              <ul className="space-y-4">
                {['Full conversation context transfer', 'Priority routing to specialists', 'Reduced resolution time', 'Improved customer satisfaction'].map((item, idx) => (
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

      {/* 4. In-store Experience Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Optimize in-store experiences
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empower store associates with instant insights and personalized customer context
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Instant access to knowledge",
                description: "Provide associates with mobile access to product details, comparisons, availability, and operational alerts for better service.",
                features: ["Product details & comparisons", "Real-time inventory checks", "Operational alerts", "Mobile accessibility"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Automated store operations",
                description: "Streamline ordering, inventory tracking, stock replenishment, and sales reporting so associates can spend more time with customers.",
                features: ["Inventory automation", "Order management", "Stock replenishment", "Sales reporting"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personalized customer assistance",
                description: "Leverage customer history and preferences to recommend products, apply loyalty benefits, and simplify returns or exchanges.",
                features: ["Customer history access", "Personalized recommendations", "Loyalty benefits", "Simplified returns"]
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-pink-500/30 transition-all duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center mb-6">
                  <div className="text-pink-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Additional Retail Capabilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Create seamless, intelligent experiences
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Across in-store and digital channels with AI-powered retail solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-6">Advanced retail capabilities</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <ShoppingBag className="w-6 h-6" />,
                      title: "Personalized shopping journeys",
                      description: "Create tailored shopping experiences based on customer preferences, purchase history, and browsing behavior."
                    },
                    {
                      icon: <Gift className="w-6 h-6" />,
                      title: "Loyalty program integration",
                      description: "Seamlessly integrate with loyalty programs to apply rewards, offer exclusive benefits, and increase retention."
                    },
                    {
                      icon: <BarChart className="w-6 h-6" />,
                      title: "Real-time analytics & insights",
                      description: "Gain actionable insights into customer behavior, sales trends, and operational performance for data-driven decisions."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0">
                        <div className="text-pink-400">{item.icon}</div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10" />
              <Image
                src="/images/retail-experience.jpg"
                alt="Omnichannel retail experiences"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}