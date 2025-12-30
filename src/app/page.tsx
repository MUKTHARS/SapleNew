// Update src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ScrollSection } from './components/ScrollSection';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { EnterpriseSection } from './components/EnterpriseSection';
import { StatsSection } from './components/StatsSection';
import { CtaSection } from './components/CtaSection';
import { ErrorBoundary } from './components/ErrorBoundary';
// import { KnowledgeFirstSection } from '@/app/components/KnowledgeFirstSection';
import { EnterpriseIntegrationsSection } from '@/app/components/EnterpriseIntegrationsSection';
import { MultipleUseCase } from '@/app/components/MultipleUseCase';

export default function Home() {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = sessionStorage.getItem('access_token');
      if (token) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/workspace/current/`,
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          );

          if (response.ok) {
            router.push('/dashboard');
          } else if (response.status === 404) {
            setIsChecking(false);
          } else {
            setIsChecking(false);
          }
        } catch (error) {
          console.error('Failed to check workspace:', error);
          setIsChecking(false);
        }
      } else {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    if (!isChecking) {
      const injectChatbotScript = () => {
        if (document.getElementById('saple-ai-chatbot-script')) {
          return;
        }

        const script = document.createElement('script');
        script.id = 'saple-ai-chatbot-script';
        script.innerHTML = `
          (function() {
            console.log('SAPLE.AI Chatbot script loading...');
            var w = window.innerWidth;
            var i = document.createElement("iframe");
            i.src = "https://bot.saple.ai/aeb57465-c9e0-4ce8-8d22-f1d45f85cec6/dbb329eb-b483-4285-a9ea-c033b8bd2fd1";
            i.style.position = "fixed";
            i.style.bottom = "0px";
            i.style.right = "0px";
            i.style.zIndex = "999999";
            i.style.border = "none";
            i.style.boxShadow = "0 0 20px rgba(14, 165, 233, 0.5)";
            
            i.width = w >= 600 ? "400" : "350";
            i.height = "600";
            
            function appendIframe() {
              if (document.body) {
                document.body.appendChild(i);
                console.log('SAPLE.AI Chatbot iframe added to page');
                
                window.addEventListener("message", function(e) {
                  if (e.data && e.data.width && e.data.height) {
                    i.width = w >= 600 ? e.data.width : '400px';
                    i.height = e.data.height;
                    console.log('Chatbot resized to:', i.width, 'x', i.height);
                  }
                });
                
                return true;
              }
              return false;
            }
            
            if (!appendIframe()) {
              const interval = setInterval(() => {
                if (appendIframe()) {
                  clearInterval(interval);
                }
              }, 100);
              
              setTimeout(() => clearInterval(interval), 5000);
            }
          })();
        `;
        
        document.body.appendChild(script);
        
        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
          const iframe = document.querySelector('iframe[src*="bot.saple.ai"]');
          if (iframe && document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        };
      };

      const cleanup = injectChatbotScript();
      return cleanup;
    }
  }, [isChecking]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ErrorBoundary>
        <HeroSection />
        <FeaturesSection />
        <ScrollSection /> 
        <EnterpriseSection />
       
        <EnterpriseIntegrationsSection />
        <MultipleUseCase />
        {/* <KnowledgeFirstSection /> */}
        <StatsSection />
        <CtaSection />
      </ErrorBoundary>
      
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              setTimeout(function() {
                if (!document.querySelector('iframe[src*="bot.saple.ai"]')) {
                  console.log('Fallback: Injecting SAPLE.AI chatbot');
                  var iframe = document.createElement('iframe');
                  iframe.src = 'https://bot.saple.ai/aeb57465-c9e0-4ce8-8d22-f1d45f85cec6/dbb329eb-b483-4285-a9ea-c033b8bd2fd1';
                  iframe.style.cssText = 'position:fixed;bottom:0;right:0;z-index:999999;border:none;width:400px;height:600px;box-shadow:0 0 20px rgba(14,165,233,0.5);';
                  document.body.appendChild(iframe);
                }
              }, 2000);
            }
          `,
        }}
      />
    </div>
  );
}