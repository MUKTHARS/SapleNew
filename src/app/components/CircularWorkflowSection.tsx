// src/app/components/CircularWorkflowSection.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Brain, 
  AlertCircle, 
  TestTube2, 
  ChartNoAxesCombined, 
  Gauge, 
  MessageSquare,
//   Sparkles 
} from 'lucide-react';
// import { useState, useRef } from 'react';

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

interface CircularWorkflowSectionProps {
  onStageClick: (stageIndex: number) => void;
  hoveredStage: number | null;
  setHoveredStage: (stage: number | null) => void;
  activeStage: number | null;
  setActiveStage: (stage: number | null) => void;
  isScrolling: boolean;
  setIsScrolling: (scrolling: boolean) => void;
}

export function CircularWorkflowSection({ 
  onStageClick, 
  hoveredStage, 
  setHoveredStage,
  activeStage,
  setActiveStage,
  isScrolling,
  setIsScrolling 
}: CircularWorkflowSectionProps) {
  const handleFlowCardClick = (stageIndex: number) => {
    setIsScrolling(true);
    setActiveStage(stageIndex);
    setHoveredStage(stageIndex);
    
    setTimeout(() => {
      onStageClick(stageIndex);
    }, 100);
    
    setTimeout(() => {
      setHoveredStage(stageIndex);
      setIsScrolling(false);
    }, 800);
    
    setTimeout(() => {
      setHoveredStage(null);
    }, 1500);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <section className="text-4xl md:text-5xl font-bold text-grey-900 mb-6">
            AI Agent Development & Deployment Lifecycle
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete journey from concept to production with our intuitive circular workflow
          </p>
        </motion.div>

        {/* Circular Flowchart Container */}
        <div className="relative h-[750px] overflow-hidden">
          {/* Center Platform Hub with Glass Effect */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-44 h-44 rounded-full bg-white/85 backdrop-blur-xl border-2 border-white/90 shadow-2xl flex flex-col items-center justify-center p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    AgentC PAG
                  </h3>
                  <div className="h-px w-14 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-3"></div>
                  <p className="text-xs text-gray-600">
                    AI Platform
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Heptagon Structure with Electric Animation - BEHIND CARDS (z-index: 0) */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <svg className="w-full h-full max-w-2xl max-h-2xl" viewBox="0 0 600 600">
              {/* Main Heptagon - Dotted Line */}
              <polygon
                points="300,100 150,150 100,300 150,450 300,500 450,450 500,300 450,150"
                fill="none"
                stroke="url(#heptagonGradient)"
                strokeWidth="3"
                strokeDasharray="12,12"
                className="opacity-60"
              />
              
              {/* Electric Pulse Animation */}
              <polygon
                points="300,100 150,150 100,300 150,450 300,500 450,450 500,300 450,150"
                fill="none"
                stroke="url(#electricPulse)"
                strokeWidth="4"
                strokeDasharray="12,12"
                strokeLinecap="round"
                className="opacity-80"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="24"
                  dur="3s"
                  repeatCount="indefinite"
                  calcMode="linear"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </polygon>
              
              {/* Electric Glow Effect */}
              <polygon
                points="300,100 150,150 100,300 150,450 300,500 450,450 500,300 450,150"
                fill="none"
                stroke="url(#electricGlow)"
                strokeWidth="6"
                strokeDasharray="12,12"
                className="opacity-40"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="24"
                  dur="2.5s"
                  repeatCount="indefinite"
                  calcMode="linear"
                  begin="0.5s"
                />
              </polygon>
              
              {/* Electric Spark Particles */}
              <circle cx="300" cy="100" r="2" fill="#60A5FA">
                <animateMotion
                  path="M300,100 L150,150 L100,300 L150,450 L300,500 L450,450 L500,300 L450,150 L300,100"
                  dur="4s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
                <animate
                  attributeName="r"
                  values="2;4;2"
                  dur="1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;0.2"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle cx="300" cy="100" r="1.5" fill="#8B5CF6">
                <animateMotion
                  path="M300,100 L150,150 L100,300 L150,450 L300,500 L450,450 L500,300 L450,150 L300,100"
                  dur="3.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                  begin="0.3s"
                />
                <animate
                  attributeName="r"
                  values="1.5;3;1.5"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.3;0.9;0.3"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle cx="300" cy="100" r="1" fill="#34D399">
                <animateMotion
                  path="M300,100 L150,150 L100,300 L150,450 L300,500 L450,450 L500,300 L450,150 L300,100"
                  dur="5s"
                  repeatCount="indefinite"
                  rotate="auto"
                  begin="0.7s"
                />
                <animate
                  attributeName="r"
                  values="1;2.5;1"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0.7;0.1"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Center lines to each vertex */}
              {[
                {x: 300, y: 100},
                {x: 150, y: 150},
                {x: 100, y: 300},
                {x: 150, y: 450},
                {x: 300, y: 500},
                {x: 450, y: 450},
                {x: 500, y: 300}
              ].map((point, idx) => (
                <line
                  key={idx}
                  x1="300"
                  y1="300"
                  x2={point.x}
                  y2={point.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                  className="opacity-15" 
                />
              ))}
              
              <defs>
                <linearGradient id="heptagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
                </linearGradient>
                
                <linearGradient id="electricPulse" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="25%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#34D399" />
                  <stop offset="75%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
                
                <linearGradient id="electricGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#34D399" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#8B5CF6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.8" />
                </linearGradient>
                
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Heptagon Nodes - 7 corners - CARDS IN FRONT (z-index: 30) */}
          <div className="absolute inset-0 flex items-center justify-center">
            {circularFlow.map((stage, index) => {
              const radius = 280;
              const baseAngle = -90;
              const angleStep = 360 / 7;
              const angle = baseAngle - (index * angleStep);
              
              let adjustedAngle = angle;
              let adjustedRadius = radius;
              
              switch(index) {
                case 0:
                  adjustedAngle = -90;
                  adjustedRadius = radius;
                  break;
                case 1:
                  adjustedAngle = -90 - 51.43;
                  adjustedRadius = radius + 10;
                  break;
                case 2:
                  adjustedAngle = -90 - (51.43 * 2);
                  adjustedRadius = radius + 15;
                  break;
                case 3:
                  adjustedAngle = -90 - (51.43 * 3);
                  adjustedRadius = radius + 10;
                  break;
                case 4:
                  adjustedAngle = -90 - (51.43 * 4);
                  adjustedRadius = radius;
                  break;
                case 5:
                  adjustedAngle = -90 - (51.43 * 5);
                  adjustedRadius = radius + 10;
                  break;
                case 6:
                  adjustedAngle = -90 - (51.43 * 6);
                  adjustedRadius = radius + 15;
                  break;
              }
              
              const finalAngleRad = (adjustedAngle * Math.PI) / 180;
              const centerX = Math.cos(finalAngleRad) * adjustedRadius;
              const centerY = Math.sin(finalAngleRad) * adjustedRadius;
              
              const cardWidth = 170;
              const cardHeight = 150;
              
              let fineTuneX = 0;
              let fineTuneY = 0;
              
              if (index === 0) {
                fineTuneY = -5;
              } else if (index === 1) {
                fineTuneX = -10;
                fineTuneY = -3;
              } else if (index === 2) {
                fineTuneX = -15;
              } else if (index === 3) {
                fineTuneX = -10;
                fineTuneY = 3;
              } else if (index === 4) {
                fineTuneY = 5;
              } else if (index === 5) {
                fineTuneX = 10;
                fineTuneY = 3;
              } else if (index === 6) {
                fineTuneX = 15;
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: stage.delay }}
                  viewport={{ once: true }}
                  className="absolute z-30 cursor-pointer"
                  style={{
                    left: `calc(50% + ${centerX + fineTuneX}px - ${cardWidth / 2}px)`,
                    top: `calc(50% + ${centerY + fineTuneY}px - ${cardHeight / 2}px)`,
                  }}
                  onMouseLeave={() => {
                    const isCurrentlyActive = activeStage === index;
                    if (!isScrolling && !isCurrentlyActive) {
                      setTimeout(() => {
                        if (!isScrolling && activeStage !== index) {
                          setHoveredStage(null);
                        }
                      }, 50);
                    }
                  }}
                  onClick={() => handleFlowCardClick(index)}
                >
                  <div className="relative group">
                    <div 
                      className={`w-[170px] bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-lg transition-all duration-300 ${
                        hoveredStage === index ? 'scale-110 shadow-xl ring-2 ring-blue-300/50' : 'hover:scale-105 hover:shadow-xl'
                      } ${
                        activeStage === index 
                          ? 'ring-2 ring-blue-400 scale-105' 
                          : ''
                      }`}
                    >
                      <div className={`w-9 h-9 ${stage.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300 shadow-md`}>
                        <div className="text-white">
                          {stage.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-sm font-bold text-gray-900 mb-2 text-center">
                        {stage.stage}
                      </h3>
                      
                      <p className="text-xs text-gray-600 text-center leading-tight min-h-[2.5rem]">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active stage indicator */}
        {hoveredStage !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
              <div className={`w-3 h-3 rounded-full ${circularFlow[hoveredStage].color}`}></div>
              <span className="font-medium text-gray-900">{circularFlow[hoveredStage].stage}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{circularFlow[hoveredStage].description}</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}