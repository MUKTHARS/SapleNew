// C:\saple.ai\SapleNew\src\app\products\healthcare\CTASection.tsx
'use client';

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transform Healthcare Delivery with Intelligent AI
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Discover how Saple.AI can enhance patient care, streamline operations, and improve 
          outcomes across healthcare, payers, and life sciences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
            Request a Demo
          </button>
          <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 border border-gray-700 transition-all duration-300">
            Download Healthcare Whitepaper
          </button>
        </div>
        
        {/* Compliance Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-gray-300 text-sm font-medium">HIPAA Compliant</span>
          </div>
          <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-gray-300 text-sm font-medium">GDPR Ready</span>
          </div>
          <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-gray-300 text-sm font-medium">SOC2 Certified</span>
          </div>
          <div className="px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
            <span className="text-gray-300 text-sm font-medium">ISO 27001</span>
          </div>
        </div>
      </div>
    </section>
  );
}   