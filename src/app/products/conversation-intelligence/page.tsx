// C:\saple.ai\SapleNew\src\app\products\conversation-intelligence\page.tsx
import { HeroSection } from './HeroSection';
import { InsightsSection } from './InsightsSection';
import { QualityManagementSection } from './QualityManagementSection';
import { CoachingSection } from './CoachingSection';
import { CtaSection } from '../ai-agents/CtaSection';

export default function ConversationIntelligencePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <InsightsSection />
      <QualityManagementSection />
      <CoachingSection />
      <CtaSection/>
    </div>
  );
}