// C:\saple.ai\SapleNew\src\app\products\retail\page.tsx
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
// import { SuccessStorySection } from './SuccessStorySection';
// import { CTASection } from './CTASection';

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      {/* <SuccessStorySection />
      <CTASection /> */}
    </div>
  );
}