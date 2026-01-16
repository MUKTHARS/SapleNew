// C:\saple.ai\SapleNew\src\app\products\utilities\page.tsx
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
// import { SuccessStorySection } from './SuccessStorySection';
// import { CTASection } from './CTASection';

export default function UtilitiesPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      {/* <SuccessStorySection />
      <CTASection /> */}
    </div>
  );
}