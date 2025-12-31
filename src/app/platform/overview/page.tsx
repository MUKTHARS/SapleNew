// src/app/platform/overview/page.tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import { KnowledgeFirstSection } from '@/app/components/KnowledgeFirstSection';
import { PlatformHeroSection } from '@/app/components/PlatformHeroSection';
import { CircularWorkflowSection } from '@/app/components/CircularWorkflowSection';
// import { PlatformFeaturesSection } from '@/app/components/PlatformFeaturesSection';
// import { EnterpriseCapabilitiesSection } from '@/app/components/EnterpriseCapabilitiesSection';
// import { PlatformCTASection } from '@/app/components/PlatformCTASection';
import { EnterpriseFeaturesSection } from '@/app/components/EnterpriseFeaturesSection';
import { EnterpriseUseCasesSection } from '@/app/components/EnterpriseUseCasesSection';

export default function PlatformOverviewPage() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState<number | null>(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const interactiveCardsRef = useRef<HTMLDivElement>(null);

  const handleFlowCardClick = (stageIndex: number) => {
    setIsScrolling(true);
    setActiveStage(stageIndex);
    setHoveredStage(stageIndex);
    
    setTimeout(() => {
      if (interactiveCardsRef.current) {
        interactiveCardsRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100);
    
    setTimeout(() => {
      setHoveredStage(stageIndex); 
      setIsScrolling(false);
    }, 800);
    
    setTimeout(() => {
      setHoveredStage(null);
    }, 1500);
  };

  useEffect(() => {
    if (activeStage !== null) {
      const timer = setTimeout(() => {
        setActiveStage(0);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeStage]);

  return (
    <div className="min-h-screen bg-black">
      <PlatformHeroSection />
      <KnowledgeFirstSection />
      <EnterpriseFeaturesSection />
      <CircularWorkflowSection 
        onStageClick={handleFlowCardClick}
        hoveredStage={hoveredStage}
        setHoveredStage={setHoveredStage}
        activeStage={activeStage}
        setActiveStage={setActiveStage}
        isScrolling={isScrolling}
        setIsScrolling={setIsScrolling}
      />
      {/* <PlatformFeaturesSection 
        interactiveCardsRef={interactiveCardsRef}
        activeStage={activeStage}
        setActiveStage={setActiveStage}
        setIsScrolling={setIsScrolling}
        handleFlowCardClick={handleFlowCardClick}
      /> */}
      <EnterpriseUseCasesSection />
      {/* <EnterpriseCapabilitiesSection /> */}
      {/* <PlatformCTASection /> */}
    </div>
  );
}