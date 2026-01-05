import { FaSlack, FaSalesforce, FaShopify, FaHubspot, FaAtlassian } from 'react-icons/fa';
import { SiZendesk } from 'react-icons/si';
import Image from 'next/image';
// import { FaNotion } from 'react-icons/fa6';
import { FaReact, FaVuejs, FaAngular, FaWordpress, FaHtml5 } from 'react-icons/fa';
import { SiWix } from 'react-icons/si';
// Add these import
import { SiSquarespace  } from 'react-icons/si'; 
import { SiWebflow } from 'react-icons/si';
// import { SiServicenow } from 'react-icons/si';
const integrationIcons = [
  { icon: FaSlack, name: 'Slack' },
  { icon: FaSalesforce, name: 'Salesforce' },
  { icon: FaShopify, name: 'Shopify' },
  { icon: FaHubspot, name: 'HubSpot' },
  { icon: FaAtlassian, name: 'Atlassian' },
  { icon: SiZendesk, name: 'Zendesk' },
  { icon: FaHtml5, name: 'HTML' },
  // { icon: FaReact, name: 'React' },
  { icon: FaVuejs, name: 'Vue.js' },
  { icon: FaWordpress, name: 'WordPress' },
  { icon: FaAngular, name: 'Angular' },
  { icon: SiWix, name: 'Wix' },
  { icon: SiSquarespace, name: 'Squarespace' },
  { icon: SiWebflow, name: 'Webflow' },
  { 
    name: 'ServiceNow', 
    icon: () => (
      <div className="h-10 w-10 flex items-center justify-center">
        <Image
          src="/images/servicenow-icon.svg" 
          alt="ServiceNow" 
          width={32} 
          height={32} 
          className="h-8 w-8"
          style={{ filter: 'invert(0%) brightness(0%)' }}
        />
      </div>
    ) 
  },
];

// Filter active icons (remove commented ones)
const activeIcons = integrationIcons.filter(item => item.name);

export default function IntegrationsSection() {
  // Calculate positions with staggered layout to avoid collisions
  const getPosition = (index: number, total: number) => {
    const centerX = 50;
    const centerY = 50;
    
    if (total === 1) return { x: centerX, y: centerY };
    
    // Create a hexagonal/staggered grid pattern
    const ring1Count = Math.min(6, total); // Inner ring: 6 icons
    const ring2Count = Math.min(8, Math.max(0, total - ring1Count)); // Middle ring: up to 8 icons
    const ring3Count = Math.max(0, total - ring1Count - ring2Count); // Outer ring: remaining icons
    
    // Determine which ring this icon belongs to
    let ring, positionInRing, ringRadius;
    
    if (index < ring1Count) {
      ring = 1;
      positionInRing = index;
      ringRadius = 20;
    } else if (index < ring1Count + ring2Count) {
      ring = 2;
      positionInRing = index - ring1Count;
      ringRadius = 35;
    } else {
      ring = 3;
      positionInRing = index - ring1Count - ring2Count;
      ringRadius = 50;
    }
    
    // Calculate positions for each ring with staggered angles
    let angle;
    let iconsInCurrentRing;
    
    if (ring === 1) {
      // Inner ring: hexagonal pattern
      iconsInCurrentRing = ring1Count;
      angle = (360 / iconsInCurrentRing) * positionInRing;
    } else if (ring === 2) {
      // Middle ring: staggered between inner ring positions
      iconsInCurrentRing = ring2Count;
      const baseAngle = 360 / ring1Count;
      const offset = baseAngle / 2; // Stagger between inner ring icons
      angle = (360 / iconsInCurrentRing) * positionInRing + offset;
    } else {
      // Outer ring: staggered differently
      iconsInCurrentRing = ring3Count;
      const baseAngle = 360 / ring2Count;
      const offset = baseAngle / 2; // Stagger between middle ring icons
      angle = (360 / iconsInCurrentRing) * positionInRing + offset;
    }
    
    const rad = (angle * Math.PI) / 180;
    
    // Add small random variation to avoid perfect alignment
    const randomOffset = 1;
    const randomX = (Math.random() - 0.5) * randomOffset;
    const randomY = (Math.random() - 0.5) * randomOffset;
    
    return {
      x: centerX + (ringRadius * Math.cos(rad)) + randomX,
      y: centerY + (ringRadius * Math.sin(rad)) + randomY,
    };
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <section className="text-5xl font-bold text-gray-900 mb-4">
            API integrations
          </section>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A fully integrated SaaS product that plugs into your complete tech stack, seamlessly.
          </p>
        </div>
        
        {/* Gear/Lever Structure Container */}
        <div className="relative h-[700px] max-w-7xl mx-auto mb-16">
          {/* Central Hub - Your Platform */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              {/* Main Gear */}
              <div className="w-32 h-32 bg-gradient-to-br from-[#0c7075] to-black rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 relative">
                  <Image 
                    src="/images/saple-logol.png" 
                    alt="Saple AI Logo" 
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              
              {/* Gear teeth */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={`tooth-${i}`}
                  className="absolute w-4 h-8 rounded"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(64px)`,
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Connecting lines SVG */}
          <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 10 }}>
            {activeIcons.map((_, index) => {
              const position = getPosition(index, activeIcons.length);
              const centerX = 50;
              const centerY = 50;
              
              // Create curved lines to avoid collisions
              const midX = (centerX + position.x) / 2;
              const midY = (centerY + position.y) / 2;
              
              // Add slight curve to lines
              const curveOffset = 5;
              const angle = Math.atan2(position.y - centerY, position.x - centerX);
              const curveX = midX + curveOffset * Math.cos(angle + Math.PI / 2);
              const curveY = midY + curveOffset * Math.sin(angle + Math.PI / 2);
              
              return (
                <g key={`connection-${index}`}>
                  {/* Curved connection line to avoid collisions */}
                  <path
                    d={`M ${centerX}% ${centerY}% Q ${curveX}% ${curveY}% ${position.x}% ${position.y}%`}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    strokeDasharray="3,2"
                    className="opacity-50"
                  />
                </g>
              );
            })}
            
            {/* Pattern lines in background */}
            {[...Array(8)].map((_, i) => (
              <line
                key={`pattern-${i}`}
                x1="50%"
                y1="50%"
                x2={`${50 + 40 * Math.cos((i * 45 * Math.PI) / 180)}%`}
                y2={`${50 + 40 * Math.sin((i * 45 * Math.PI) / 180)}%`}
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray="8,8"
              />
            ))}
          </svg>
          
          {/* Integration Nodes - Gear/Lever style */}
          {activeIcons.map((integration, index) => {
            const Icon = integration.icon;
            const position = getPosition(index, activeIcons.length);
            
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                }}
              >
                <div className="relative group">
                  {/* Integration gear/node */}
                  <div className="relative">
                    {/* Main icon container */}
                    <div className="relative p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 group-hover:border-blue-300 group-hover:scale-110 z-10">
                      <Icon className="h-10 w-10 text-gray-800" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    <div className="bg-gray-900 text-white text-sm font-semibold py-2 px-4 rounded-lg whitespace-nowrap shadow-lg z-50">
                      {integration.name}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-gray-50/20" />
            {[...Array(20)].map((_, i) => (
              <div
                key={`bg-line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-100/30 to-transparent"
                style={{
                  top: `${(i * 10)}%`,
                  left: '10%',
                  right: '10%',
                  transform: `rotate(${i % 2 === 0 ? '1deg' : '-1deg'})`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Integration list */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800">
              Seamless integration with your favorite tools
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {activeIcons.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0c7075] hover:-translate-y-1"
                >
                  <div className="p-2 rounded-lg">
                    <Icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">{integration.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Add CSS animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}