// C:\saple.ai\SapleNew\src\app\layout.tsx - UPDATED
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Change from Space_Grotesk to Inter
import './globals.css';
import { CyberNavbar } from './components/CyberNavbar';
import { HolographicFooter } from './components/HolographicFooter';
import { ErrorBoundary } from './components/ErrorBoundary';
import Script from 'next/script';

// Use Inter font (regular sans-serif) instead of Space_Grotesk
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SAPLE.AI | ENTERPRISE AI SOLUTIONS',
  description: 'AI-POWERED CUSTOMER SERVICE AUTOMATION FOR ENTERPRISES',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Add these meta tags to ensure proper tracking */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Analytics Script - Load in head for better tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7BSBB3JDJR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7BSBB3JDJR', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Microsoft Clarity Script - Load in head for better tracking */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "si8ook5389");
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black color`}>
        {/* Main layout - navbar and footer always visible */}
        <CyberNavbar />

        <main>
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>

        <HolographicFooter />
        <Script id="page-view-tracking" strategy="afterInteractive">
          {`
            // Track page views on route changes
            if (typeof window !== 'undefined') {
              const handleRouteChange = () => {
                if (window.gtag) {
                  window.gtag('config', 'G-7BSBB3JDJR', {
                    page_path: window.location.pathname,
                  });
                }
              };
              
              // Listen for Next.js route changes
              const originalPushState = history.pushState;
              if (originalPushState) {
                history.pushState = function(...args) {
                  const result = originalPushState.apply(this, args);
                  handleRouteChange();
                  return result;
                };
              }
              
              window.addEventListener('popstate', handleRouteChange);
            }
          `}
        </Script>
      </body>
    </html>
  );
}