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
  const [radius, setRadius] = useState(200);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(180);
      } else if (window.innerWidth < 1024) {
        setRadius(220);
      } else {
        setRadius(280);
      }
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Spectrum animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2; // Double for retina
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create multiple spectrum bars
    const spectrumBars: Array<{
      x: number;
      width: number;
      height: number;
      speed: number;
      frequency: number;
      hue: number;
      offset: number;
    }> = [];

    // Create bars in a radial pattern
    const barCount = 36;
    const centerX = canvas.width / 4;
    const centerY = canvas.height / 4;
    const maxRadius = Math.min(canvas.width, canvas.height) / 4;

    for (let i = 0; i < barCount; i++) {
      const angle = (i * 2 * Math.PI) / barCount;
      const distance = maxRadius * 0.7;
      
      spectrumBars.push({
        x: centerX + Math.cos(angle) * distance,
        width: 4,
        height: 60,
        speed: 0.5 + Math.random() * 1,
        frequency: 0.05 + Math.random() * 0.05,
        hue: 200 + Math.random() * 60,
        offset: Math.random() * Math.PI * 2
      });
    }

    // Create floating particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      waveOffset: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * (canvas.width / 2),
        y: Math.random() * (canvas.height / 2),
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: `rgba(12, 112, 117, ${Math.random() * 0.4 + 0.2})`,
        waveOffset: Math.random() * Math.PI * 2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);
      const time = Date.now() * 0.001;

      // Draw animated radial lines
      ctx.strokeStyle = 'rgba(12, 112, 117, 0.15)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 8; i++) {
        const pulse = Math.sin(time * 0.3 + i) * 20;
        const radius = 100 + i * 40 + pulse;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw spectrum bars with animation
      spectrumBars.forEach(bar => {
        const waveHeight = Math.sin(time * bar.speed + bar.offset) * bar.height * 0.6;
        const barHeight = bar.height + waveHeight;
        
        // Draw bar with gradient - FIXED: Use proper RGBA colors
        const gradient = ctx.createLinearGradient(bar.x, centerY - barHeight/2, bar.x, centerY + barHeight/2);
        gradient.addColorStop(0, `hsla(${bar.hue}, 70%, 60%, 0)`);
        gradient.addColorStop(0.3, `hsla(${bar.hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(0.7, `hsla(${bar.hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(1, `hsla(${bar.hue}, 70%, 60%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(bar.x - bar.width/2, centerY - barHeight/2, bar.width, barHeight);
        
        // Draw bar glow
        ctx.shadowColor = `hsl(${bar.hue}, 70%, 60%)`;
        ctx.shadowBlur = 15;
        ctx.fillStyle = `hsla(${bar.hue}, 70%, 60%, 0.4)`;
        ctx.fillRect(bar.x - bar.width/2, centerY - barHeight/2, bar.width, barHeight);
        ctx.shadowBlur = 0;
      });

      // Draw center orb with pulse
      const pulseSize = Math.sin(time * 0.5) * 10;
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 50 + pulseSize);
      gradient.addColorStop(0, 'rgba(12, 112, 117, 0.8)');
      gradient.addColorStop(1, 'rgba(12, 112, 117, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50 + pulseSize, 0, Math.PI * 2);
      ctx.fill();

      // Draw particle network
      particles.forEach((particle, i) => {
        // Update particle position with wave motion
        particle.x += particle.speedX + Math.sin(time + particle.waveOffset) * 0.2;
        particle.y += particle.speedY + Math.cos(time + particle.waveOffset) * 0.2;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / 2;
        if (particle.x > canvas.width / 2) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / 2;
        if (particle.y > canvas.height / 2) particle.y = 0;
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(12, 112, 117, ${0.2 * (1 - distance/100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      // Draw data flow lines
      ctx.strokeStyle = 'rgba(12, 112, 117, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 12; i++) {
        const startAngle = (i * Math.PI * 2) / 12 + time * 0.1;
        const endAngle = startAngle + Math.PI / 6;
        const radius = 150 + Math.sin(time * 0.2 + i) * 30;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Animated Spectrum Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
        />
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0">
        {/* Triangle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230C7075' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Dotted wave pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(12, 112, 117, 0.3) 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, rgba(12, 112, 117, 0.2) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 40px 40px'
          }}
        />
        
        {/* Hexagon pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z' fill='none' stroke='%230C7075' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A secure, scalable AI platform that powers autonomous agents, agent assist, and conversational intelligence—built for enterprise environments.
          </p>
        </motion.div>

        {/* Main circular layout container */}
        <div className="relative flex items-center justify-center min-h-[700px] md:min-h-[800px] lg:min-h-[900px]">
          {/* Center Platform Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute z-20"
          >
            <div className="relative bg-gradient-to-br from-[#0C7075] to-[#072E33] rounded-full w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
              
              {/* Check icon */}
              <div className="mb-4">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              
              {/* Platform text */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  AI Platform
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Core Platform
                </p>
              </div>
              
              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-[#0C7075]/30 animate-pulse" />
            </div>
          </motion.div>

          {/* Circular arrangement of integration items */}
          <div className="relative w-full h-full">
            {integrations.map((integration, index) => {
              const totalItems = integrations.length;
              const angle = (index * 2 * Math.PI) / totalItems - Math.PI / 2;
              
              const cardRadius = radius + 120;
              const cardX = Math.cos(angle) * cardRadius;
              const cardY = Math.sin(angle) * cardRadius;
              
              const lineRadius = radius;
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
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 w-40 md:w-48 border border-gray-200 hover:border-[#0C7075]/40 hover:shadow-xl transition-all duration-300 group-hover:scale-105 z-20 shadow-lg">
                      {/* Icon */}
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
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
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                          {integration.title}
                        </h3>
                      </div>
                      
                      {/* Dot indicator */}
                      <div 
                        className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white shadow-sm z-30"
                        style={{ 
                          backgroundColor: integration.color,
                          transform: `translate(-100%, -50%)`
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Outer decorative circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full border border-gray-200/30" />
            <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full border border-gray-200/20" />
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-gray-200/10" />
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