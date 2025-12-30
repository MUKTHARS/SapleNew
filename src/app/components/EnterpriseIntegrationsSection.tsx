// src/app/components/EnterpriseIntegrationsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  MessageSquare, 
  Headphones, 
  Shield, 
  Eye,
  BarChart2,
  Zap,
  CheckCircle
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const integrations = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Multi-model orchestration",
    color: "#0EA5E9"
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "RAG & knowledge grounding",
    color: "#8B5CF6"
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Voice & chat SDKs",
    color: "#10B981"
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "Real-time transcription",
    color: "#F59E0B"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "AI Platform",
    color: "#EC4899"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "LLM evaluation & guardrails",
    color: "#3B82F6"
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Observability & audit logs",
    color: "#6366F1"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security & compliance",
    color: "#14B8A6"
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Real-time data pipelines",
    color: "#F97316"
  }
];

export function EnterpriseIntegrationsSection() {
  const [radius, setRadius] = useState(160); // Reduced from 200
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(120); // Reduced from 180
      } else if (window.innerWidth < 1024) {
        setRadius(160); // Reduced from 220
      } else {
        setRadius(200); // Reduced from 280
      }
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Simple decorative patterns on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw simple geometric patterns
    const drawPatterns = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center point
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw concentric circles with subtle gradient
      for (let i = 1; i <= 6; i++) {
        const radius = 120 + i * 50; // Reduced from 150 + i * 60
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        
        // Create subtle gradient stroke
        const gradient = ctx.createRadialGradient(
          centerX, centerY, radius - 1,
          centerX, centerY, radius + 1
        );
        gradient.addColorStop(0, 'rgba(12, 112, 117, 0.05)');
        gradient.addColorStop(1, 'rgba(12, 112, 117, 0.02)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Draw connection lines pattern
      const lineCount = 24;
      for (let i = 0; i < lineCount; i++) {
        const angle = (i * Math.PI * 2) / lineCount;
        const length = 250; // Reduced from 300
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        const endX = centerX + Math.cos(angle) * length;
        const endY = centerY + Math.sin(angle) * length;
        ctx.lineTo(endX, endY);
        
        // Subtle gradient for lines
        const lineGradient = ctx.createLinearGradient(centerX, centerY, endX, endY);
        lineGradient.addColorStop(0, 'rgba(12, 112, 117, 0.04)');
        lineGradient.addColorStop(1, 'rgba(12, 112, 117, 0.01)');
        
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw floating dots
      const dotCount = 50;
      for (let i = 0; i < dotCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 280; // Reduced from 100 + Math.random() * 350
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.3 + 0.1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(12, 112, 117, ${opacity})`;
        ctx.fill();
      }
    };

    drawPatterns();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background with decorative canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 via-white to-cyan-50/10">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30"
        />
      </div>

      {/* Additional decorative patterns */}
      <div className="absolute inset-0">
        {/* Geometric dot pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(12, 112, 117, 0.15) 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Diagonal line pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(12, 112, 117, 0.1) 50%, transparent 52%)`,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Wave pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 Q50,80 100,100 T200,100' fill='none' stroke='%230C7075' stroke-width='1' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-200/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <section className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise integrations
          </section>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A secure, scalable AI platform that powers autonomous agents, agent assist, and conversational intelligence—built for enterprise environments.
          </p>
        </motion.div>

        {/* Main circular layout container */}
        <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"> {/* Reduced min-height */}
          {/* Center Platform Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute z-20"
          >
           <div className="relative bg-gradient-to-br from-[#0C7075] to-[#072E33] rounded-full w-32 h-32 md:w-48 md:h-48 flex flex-col items-center justify-center p-6 shadow-2xl border border-white/20 backdrop-blur-sm">
  
  {/* Check icon - reduced */}
  <div className="mb-2">
    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
  </div>
  
  {/* Platform text - reduced */}
  <div className="text-center">
    <h3 className="text-base md:text-lg font-bold text-white mb-1">
      AI Platform
    </h3>
    <p className="text-white/80 text-xs">
      Core Platform
    </p>
  </div>
  
  {/* Outer ring - reduced inset */}
  <div className="absolute -inset-2 rounded-full border-2 border-[#0C7075]/30 animate-pulse" />
</div>
          </motion.div>

          {/* Circular arrangement of integration items */}
          <div className="relative w-full h-full">
            {integrations.map((integration, index) => {
              const totalItems = integrations.length;
              const angle = (index * 2 * Math.PI) / totalItems - Math.PI / 2;
              
              const cardRadius = radius + 80; // Reduced from radius + 120
              const cardX = Math.cos(angle) * cardRadius;
              const cardY = Math.sin(angle) * cardRadius;
              
              const lineRadius = radius * 0.7; // Reduced from radius
              const lineX = Math.cos(angle) * lineRadius;
              const lineY = Math.sin(angle) * lineRadius;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: cardX, 
                    y: cardY 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 50
                  }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    transform: `translate(calc(-50% + ${cardX}px), calc(-50% + ${cardY}px))`
                  }}
                >
                  <div className="group relative">
                    {/* Connection line */}
                    <div 
                      className="absolute left-0 top-0 w-px h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-[#0C7075] transition-all duration-300 overflow-visible"
                      style={{
                        width: `${lineRadius * 0.8}px`,
                        height: '1px',
                        transform: `translate(${lineX - cardX}px, ${lineY - cardY}px) rotate(${angle}rad)`,
                        transformOrigin: '0 0',
                        zIndex: -1
                      }}
                    />
                    
                    {/* Integration item */}
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 w-36 md:w-44 border border-gray-200 hover:border-[#0C7075]/40 hover:shadow-xl transition-all duration-300 group-hover:scale-105 z-20 shadow-lg"> {/* Reduced card size */}
                      {/* Icon */}
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2"> {/* Reduced gap */}
                        <div 
                          className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0" // Reduced icon container
                          style={{
                            background: `linear-gradient(135deg, ${integration.color}15, ${integration.color}05)`,
                            border: `1px solid ${integration.color}30`
                          }}
                        >
                          <div style={{ color: integration.color }}>
                            {integration.icon}
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xs md:text-sm font-semibold text-gray-900 leading-tight"> {/* Reduced text size */}
                          {integration.title}
                        </h3>
                      </div>
                      
                      {/* Dot indicator */}
                      {/* <div 
                        className="absolute -left-2 md:-left-3 top-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-white shadow-sm z-30" // Reduced dot size
                        style={{ 
                          backgroundColor: integration.color,
                          transform: `translate(-100%, -50%)`
                        }}
                      /> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Outer decorative circles - reduced sizes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[400px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] rounded-full border border-gray-200/30" />
            <div className="w-[320px] h-[320px] md:w-[470px] md:h-[470px] lg:w-[570px] lg:h-[570px] rounded-full border border-gray-200/20" />
            <div className="w-[240px] h-[240px] md:w-[390px] md:h-[390px] lg:w-[490px] lg:h-[490px] rounded-full border border-gray-200/10" />
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0C7075] to-[#072E33] text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 hover:shadow-xl transition-all duration-300 shadow-lg backdrop-blur-sm">
            <span>Explore the platform</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}