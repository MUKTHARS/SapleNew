// src/app/components/EnterpriseFeaturesSection.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Brain, Code, Shield, Database } from 'lucide-react';

export function EnterpriseFeaturesSection() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Multi-Agent Orchestration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">Enterprise AI</span>
              </div>
              
              <section className="text-4xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Multi-Agent Orchestration at <span className="text-slate-900">Enterprise Scale</span>
              </section>
              
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Design, deploy, and operate intelligent agent ecosystems that think, collaborate, and act autonomously.
                </p>
                
                <div className="pl-6 border-l-2 border-slate-300">
                  <p className="text-slate-600 leading-relaxed">
                    The Saple AI Platform enables enterprises to orchestrate multiple AI agents across conversations, workflows, and systems—delivering consistent outcomes across customer experience, employee productivity, and operations.
                  </p>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Intelligent Task Routing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Agent Tools + Memory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Context Management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-50/80 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/images/Multi-Agent Orchestration.png"
                      alt="Multi-Agent Orchestration"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-slate-700">Live Agent Network</span>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Real-time coordination across specialized AI agents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* No-Code Speed. Pro-Code Power. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-50/80 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src="/images/No Code.png"
                      alt="No-Code Pro-Code Interface"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="px-3 py-1 bg-slate-100 rounded-full">
                        <span className="text-sm font-medium text-slate-700">Visual Builder</span>
                      </div>
                      <div className="px-3 py-1 bg-slate-100 rounded-full">
                        <span className="text-sm font-medium text-slate-700">API Access</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Drag-and-drop interface with full developer control
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 order-1 lg:order-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <Code className="w-5 h-5 text-slate-700" />
                  </div>
                  <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">Development</span>
                </div>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all duration-300"
                  >
                    <span>Try for Free</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
              
              <section className="text-4xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                No-Code Speed. Pro-Code Power.<br />
              </section>
              
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                Empower business teams and developers on a single platform.
              </p>
              
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  Saple AI combines visual no-code tools with developer-grade extensibility, allowing teams to rapidly build agentic applications using drag-and-drop flows, reusable templates, and role-based environments—while engineers retain full control through APIs, SDKs, and custom logic.
                </p>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Development Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Self Service Agent Builder</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Guardrails Configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Continuous Evaluation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise-Wide Agentic RAG & Knowledge Intelligence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <Database className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">Knowledge Intelligence</span>
              </div>
              
              <section className="text-4xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Enterprise-Wide <span className="text-slate-900">Agentic RAG</span><br />
                & Knowledge Intelligence
              </section>
              
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                Go beyond basic retrieval. Enable agents to reason with enterprise knowledge.
              </p>
              
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  Saple AI delivers agent-driven Retrieval-Augmented Generation (RAG) that connects securely to structured and unstructured data across documents, databases, CRMs, ERPs, and data warehouses—ensuring responses are accurate, contextual, and policy-aware.
                </p>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Advanced RAG Capabilities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Agentic retrieval-augmented generation (RAG)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Query Rephrasing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Integration Framework</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/5">
              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-50/80 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md">
                   <div className="aspect-[16/10] relative">
                    <Image
                      src="/images/Agentic RAG.png"
                      alt="Enterprise RAG System"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-slate-700">Intelligent Retrieval</span>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Context-aware knowledge retrieval across enterprise systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Built for Governance, Observability & Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-50/80 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md">
                   <div className="aspect-[16/10] relative">
                    <Image
                      src="/images/Observability.png"
                      alt="Governance & Trust Dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="px-3 py-1 bg-slate-100 rounded-full">
                        <span className="text-sm font-medium text-slate-700">Compliance Ready</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Full audit trails and real-time monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-slate-700" />
                </div>
                <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">Security & Compliance</span>
              </div>
              
              <section className="text-4xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Built for <span className="text-slate-900">Governance,</span><br />
                Observability & Trust
              </section>
              
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                Operate AI with confidence across the enterprise.
              </p>
              
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  Saple AI embeds governance, security, and observability into every layer of the platform—providing full visibility into agent behavior, decisions, handoffs, and outcomes.
                </p>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Monitoring & Evaluation Tools:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Model Hub</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Prompt Studio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Evaluation Studio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">Agent Monitoring</span>
                      </li>
                    </ul>
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