// src/app/components/PlatformFeaturesSection.tsx
'use client';

import { Search, Brain, AlertCircle, TestTube2, ChartNoAxesCombined, Gauge, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const interactiveCards = [
  {
    id: 0,
    title: "Discover Module",
    subtitle: "Data Intelligence & Insights",
    description: "Automatically discover patterns, anomalies, and opportunities in your data with zero setup. Our AI-powered discovery engine analyzes your existing data sources to recommend optimal agent configurations.",
    icon: <Search className="w-8 h-8 text-gray-900" />,
    color: "from-indigo-50 via-purple-50/80 to-fuchsia-50/60",
    borderColor: "border-indigo-200/50",
    features: [
      "Zero Setup Data Ingestion",
      "Pattern Recognition AI",
      "Automated Insights Generation",
      "Multi-source Data Integration"
    ],
    metrics: [
      { label: "Setup Time", value: "0 hours" },
      { label: "Accuracy", value: "98%" },
      { label: "Data Sources", value: "50+" }
    ],
    link: "/platform/discover"
  },
  {
    id: 1,
    title: "Build Studio",
    subtitle: "Visual AI Agent Creation",
    description: "Create sophisticated AI agents without writing a single line of code. Our drag-and-drop interface supports complex workflows, decision trees, and multi-model orchestration.",
    icon: <Brain className="w-8 h-8 text-gray-900" />,
    color: "from-blue-50 via-sky-50/80 to-cyan-50/60",
    borderColor: "border-blue-200/50",
    features: [
      "Drag & Drop Interface",
      "Multi-Model Orchestration",
      "Real-time Collaboration",
      "Version Control"
    ],
    metrics: [
      { label: "Build Speed", value: "10x Faster" },
      { label: "Complexity", value: "No-Code" },
      { label: "Team Size", value: "Unlimited" }
    ],
    link: "/platform/build"
  },
  {
    id: 2,
    title: "Debug Center",
    subtitle: "Real-time Issue Resolution",
    description: "Identify and fix issues in real-time with our comprehensive debugging tools. Monitor agent performance, track conversation flows, and pinpoint problems instantly.",
    icon: <AlertCircle className="w-8 h-8 text-gray-900" />,
    color: "from-teal-50 via-emerald-50/80 to-green-50/60",
    borderColor: "border-emerald-200/50",
    features: [
      "Real-time Error Tracking",
      "Conversation Flow Analysis",
      "Performance Monitoring",
      "Automated Testing"
    ],
    metrics: [
      { label: "Issue Resolution", value: "90% Faster" },
      { label: "Uptime", value: "99.9%" },
      { label: "Test Coverage", value: "100%" }
    ],
    link: "/platform/debug"
  },
  {
    id: 3,
    title: "Testing Suite",
    subtitle: "Comprehensive Quality Assurance",
    description: "Ensure your AI agents perform flawlessly in production with our comprehensive testing suite. Run A/B tests, load tests, and security audits all in one place.",
    icon: <TestTube2 className="w-8 h-8 text-gray-900" />,
    color: "from-amber-50 via-yellow-50/80 to-orange-50/60",
    borderColor: "border-amber-200/50",
    features: [
      "A/B Testing Framework",
      "Load & Stress Testing",
      "Security Audits",
      "Compliance Checks"
    ],
    metrics: [
      { label: "Test Scenarios", value: "1000+" },
      { label: "Accuracy", value: "99.5%" },
      { label: "Compliance", value: "SOC 2" }
    ],
    link: "/platform/test"
  },
  {
    id: 4,
    title: "Analytics Hub",
    subtitle: "Advanced Performance Insights",
    description: "Gain deep insights into your AI agents' performance with advanced analytics. Track KPIs, user satisfaction, and business impact metrics in real-time.",
    icon: <ChartNoAxesCombined className="w-8 h-8 text-gray-900" />,
    color: "from-rose-50 via-pink-50/80 to-red-50/60",
    borderColor: "border-rose-200/50",
    features: [
      "Real-time Dashboards",
      "Custom KPI Tracking",
      "Predictive Analytics",
      "ROI Calculation"
    ],
    metrics: [
      { label: "Data Points", value: "1M+/day" },
      { label: "Report Speed", value: "Real-time" },
      { label: "Insight Accuracy", value: "95%" }
    ],
    link: "/platform/analytics"
  },
  {
    id: 5,
    title: "Measurement Center",
    subtitle: "Precision Metrics & Monitoring",
    description: "Measure every aspect of your AI agents' performance with precision metrics. Monitor response times, accuracy rates, and user satisfaction scores.",
    icon: <Gauge className="w-8 h-8 text-gray-900" />,
    color: "from-violet-50 via-purple-50/80 to-indigo-50/60",
    borderColor: "border-violet-200/50",
    features: [
      "Custom Metric Builder",
      "Real-time Alerts",
      "Performance Benchmarks",
      "Trend Analysis"
    ],
    metrics: [
      { label: "Metrics Tracked", value: "200+" },
      { label: "Alert Speed", value: "< 1s" },
      { label: "Data Retention", value: "2 years" }
    ],
    link: "/platform/measure"
  },
  {
    id: 6,
    title: "Response Engine",
    subtitle: "Intelligent Answer Generation",
    description: "Power your AI agents with our advanced response engine that delivers accurate, context-aware answers using AgentC PAG technology.",
    icon: <MessageSquare className="w-8 h-8 text-gray-900" />,
    color: "from-sky-50 via-blue-50/80 to-indigo-50/60",
    borderColor: "border-sky-200/50",
    features: [
      "Context-Aware Responses",
      "Multi-language Support",
      "Real-time Learning",
      "Feedback Integration"
    ],
    metrics: [
      { label: "Response Accuracy", value: "96%" },
      { label: "Languages", value: "15+" },
      { label: "Response Time", value: "< 1s" }
    ],
    link: "/platform/respond"
  }
];

const circularFlow = [
  { 
    stage: "Discover", 
    description: "From data to deployment with Zero Setup AI agents",
    icon: <Search className="w-5 h-5" />,
    color: "bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400",
    gradient: "from-indigo-100 via-purple-50 to-fuchsia-50",
    angle: 90,
    delay: 0,
    moduleId: 0
  },
  { 
    stage: "Build", 
    description: "Create no-code AI agents in minutes",
    icon: <Brain className="w-5 h-5" />,
    color: "bg-gradient-to-br from-blue-400 via-sky-400 to-cyan-400",
    gradient: "from-blue-50 via-sky-50 to-cyan-50",
    angle: 150,
    delay: 0.1,
    moduleId: 0
  },
  { 
    stage: "Debug", 
    description: "Identify real-time issues as you build",
    icon: <AlertCircle className="w-5 h-5" />,
    color: "bg-gradient-to-br from-teal-400 via-emerald-400 to-green-400",
    gradient: "from-teal-50 via-emerald-50 to-green-50",
    angle: 30,
    delay: 0.2,
    moduleId: 1
  },
  { 
    stage: "Test", 
    description: "Ship reliable AI agents faster",
    icon: <TestTube2 className="w-5 h-5" />,
    color: "bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400",
    gradient: "from-amber-50 via-yellow-50 to-orange-50",
    angle: 210,
    delay: 0.3,
    moduleId: 1
  },
  { 
    stage: "Analyze", 
    description: "Drive continuous improvement of AI agents",
    icon: <ChartNoAxesCombined className="w-5 h-5" />,
    color: "bg-gradient-to-br from-rose-400 via-pink-400 to-red-400",
    gradient: "from-rose-50 via-pink-50 to-red-50",
    angle: -30,
    delay: 0.4,
    moduleId: 2
  },
  { 
    stage: "Measure", 
    description: "Actionable insights from real-time metrics",
    icon: <Gauge className="w-5 h-5" />,
    color: "bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400",
    gradient: "from-violet-50 via-purple-50 to-indigo-50",
    angle: 240,
    delay: 0.5,
    moduleId: 2
  },
  { 
    stage: "Respond", 
    description: "Deliver grounded, precise answers with AgentC PAG",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400",
    gradient: "from-sky-50 via-blue-50 to-indigo-50",
    angle: 300,
    delay: 0.6,
    moduleId: 3
  }
];

interface PlatformFeaturesSectionProps {
  interactiveCardsRef: React.RefObject<HTMLDivElement>;
  activeStage: number | null;
  setActiveStage: (stage: number | null) => void;
  setIsScrolling: (scrolling: boolean) => void;
  handleFlowCardClick: (stageIndex: number) => void;
}

export function PlatformFeaturesSection({ 
  interactiveCardsRef, 
  activeStage, 
  setActiveStage,
  setIsScrolling,
  handleFlowCardClick 
}: PlatformFeaturesSectionProps) {
  const activeCard = activeStage !== null ? interactiveCards[activeStage] : interactiveCards[0];

  return (
    <section ref={interactiveCardsRef} className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm border border-blue-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Platform Modules</span>
          </div>
          <section className="text-4xl md:text-5xl font-bold text-black mb-6">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Platform Features</span>
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Click on any stage in the workflow above to explore its detailed capabilities
          </p>
          
          {/* Stage indicator pills */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-2 py-2 border border-gray-200">
              {circularFlow.map((stage, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsScrolling(true);
                    setActiveStage(index);
                    handleFlowCardClick(index);
                  }}
                  className={`inline-flex items-center px-5 py-2.5 mx-1 rounded-full border transition-all duration-300 ${
                    activeStage === index 
                      ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white border-transparent shadow-md' 
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-sm'
                  }`}
                >
                  <span className="text-sm font-medium">{stage.stage}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Interactive Card - Shows details of active stage */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className={`relative rounded-3xl bg-gradient-to-br ${activeCard.color} border ${activeCard.borderColor} overflow-hidden shadow-lg`}>
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] -z-10" />
            
            {/* Header with icon */}
            <div className="relative p-8 border-b border-gray-200/30">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md border border-gray-200/50">
                    {activeCard.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {activeCard.title}
                    </h3>
                    <p className="text-lg text-gray-700">
                      {activeCard.subtitle}
                    </p>
                  </div>
                </div>
                <Link href={activeCard.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <span>Explore Module</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
              
              <p className="text-lg text-gray-800 leading-relaxed">
                {activeCard.description}
              </p>
            </div>
            
            {/* Content section */}
            <div className="relative p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Features */}
                <div className="lg:col-span-2">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCard.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Metrics */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h4>
                  <div className="space-y-4">
                    {activeCard.metrics.map((metric, index) => (
                      <div key={index} className="p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-700">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

