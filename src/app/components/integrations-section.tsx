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
  // { icon: FaGithub, name: 'GitHub' },
  // { icon: FaTrello, name: 'Trello' },
  // { icon: FaJira, name: 'Jira' },
  // { icon: FaMicrosoft, name: 'Microsoft' },
  // { icon: FaGoogle, name: 'Google' },
  { icon: FaSalesforce, name: 'Salesforce' },
  { icon: FaShopify, name: 'Shopify' },
  // { icon: FaStripe, name: 'Stripe' },
  { icon: FaHubspot, name: 'HubSpot' },
  { icon: FaAtlassian, name: 'Atlassian' },
  // { icon: FaDiscord, name: 'Discord' },
  // { icon: FaDropbox, name: 'Dropbox' },
  // { icon: FaFigma, name: 'Figma' },
  // { icon: FaNotion, name: 'Notion' },
  // { icon: FaMastodon, name: 'Mastodon' },
  // { icon: SiAsana, name: 'Asana' },
  // { icon: SiZapier, name: 'Zapier' },
  // { icon: SiQuickbooks, name: 'QuickBooks' },
  { icon: SiZendesk, name: 'Zendesk' },
   { icon: FaHtml5, name: 'HTML' },
  { icon: FaReact, name: 'React' },
  { icon: FaVuejs, name: 'Vue.js' },
  { icon: FaWordpress, name: 'WordPress' },
  { icon: FaAngular, name: 'Angular' },
  { icon: FaShopify, name: 'Shopify' }, // Already exists, but confirming
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
  // Calculate positions for gear/lever structure
  const getPosition = (index: number, total: number) => {
    // Create a branching pattern from center
    const centerX = 50; // Center of container
    const centerY = 50;
    
    if (total === 1) return { x: centerX, y: centerY };
    
    // For 2-4 icons: arrange in a cross pattern
    if (total <= 4) {
      const positions = [
        { x: centerX, y: centerY - 20 }, // Top
        { x: centerX + 20, y: centerY }, // Right
        { x: centerX, y: centerY + 20 }, // Bottom
        { x: centerX - 20, y: centerY }, // Left
      ];
      return positions[index];
    }
    
    // For more icons: create a mechanical branching structure
    const angle = 360 / total;
    const distance = 25 + (index % 3) * 5; // Varying distances
    
    const rad = (angle * index * Math.PI) / 180;
    return {
      x: centerX + distance * Math.cos(rad),
      y: centerY + distance * Math.sin(rad),
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
        <div className="relative h-[600px] max-w-6xl mx-auto mb-16">
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
                  className="absolute w-4 h-8  rounded"
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
              
              // Create curved or straight lines based on position
              const isDiagonal = Math.abs(position.x - centerX) > 10 && Math.abs(position.y - centerY) > 10;
              
              return (
                <g key={`connection-${index}`}>
                  {/* Main connection line */}
                  <line
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${position.x}%`}
                    y2={`${position.y}%`}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray={isDiagonal ? "5,3" : "none"}
                    className="opacity-60"
                  />
                  
                  {/* Secondary detail line */}
                  <line
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${position.x * 0.7 + centerX * 0.3}%`}
                    y2={`${position.y * 0.7 + centerY * 0.3}%`}
                    stroke="#60a5fa"
                    strokeWidth="3"
                    strokeOpacity="0.3"
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
            // const total = activeIcons.length;
            
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
                  {/* Lever/arm connecting to hub
                  <div 
                    className="absolute w-16 h-1 bg-gradient-to-r from-blue-400/50 to-transparent -left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? '5deg' : '-5deg'}) translateY(-50%)`,
                    }}
                  /> */}
                  
                  {/* Integration gear/node */}
                  <div className="relative">
                    {/* Small gear behind icon */}
                    <div 
                      className="absolute -inset-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        animation: `spin-slow ${8 + index}s linear infinite`,
                      }}
                    >
                      <div className="absolute w-3 h-6 bg-gray-300 rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateY(-12px)` }}
                      />
                      <div className="absolute w-3 h-6 bg-gray-300 rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `translate(-50%, -50%) rotate(${index * 45 + 90}deg) translateY(-12px)` }}
                      />
                      <div className="absolute w-3 h-6 bg-gray-300 rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `translate(-50%, -50%) rotate(${index * 45 + 180}deg) translateY(-12px)` }}
                      />
                      <div className="absolute w-3 h-6 bg-gray-300 rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `translate(-50%, -50%) rotate(${index * 45 + 270}deg) translateY(-12px)` }}
                      />
                    </div>
                    
                    {/* Main icon container */}
                    <div className="relative p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 group-hover:border-blue-300 group-hover:scale-110 z-10">
                      <Icon className="h-10 w-10 text-gray-800" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                    </div>
                    
                    {/* Connection dot */}
                    {/* <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                  </div>
                  
                  {/* Label */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900 text-white text-sm font-semibold py-2 px-4 rounded-lg whitespace-nowrap shadow-lg">
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
            {/* <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full py-2 px-6 mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-700 font-medium">
                Connected to {activeIcons.length}+ platforms
              </span>
            </div> */}
            <h3 className="text-2xl font-bold text-gray-800">
              Seamless integration with your favorite tools
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {activeIcons.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0c7075] hover:-translate-y-1"
                >
                  <div className="p-2 rounded-lg ">
                    <Icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">{integration.name}</span>
                    {/* <div className="flex items-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs text-gray-500">Connected</span>
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            {/* <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center space-x-2">
                <span>View all 100+ integrations</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button> */}
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