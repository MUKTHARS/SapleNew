'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from './saple-logo.png';
import { Globe, Linkedin, Twitter, Youtube } from 'lucide-react';

export function HolographicFooter() {
  const footerLinks = {
    Product: [
      { label: 'AI Agents', href: '/products/ai-agents' },
      { label: 'Agent Assist', href: '/products/agent-assist' },
      { label: 'Conversation Intelligence', href: '/products/conversation-intelligence' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'What\'s New', href: '/whats-new' },
    ],
    Solutions: [
      { label: 'Customer Service', href: '/solutions/customer-service' },
      { label: 'Sales & Marketing', href: '/solutions/sales-marketing' },
      { label: 'IT Support', href: '/solutions/it-support' },
      { label: 'Industry Solutions', href: '/solutions/industries' },
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Help Center', href: '/help' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/saple-ai', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/saple_ai', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@saple_ai', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={Logo}
                  alt="Saple.AI Logo"
                  width={120}
                  height={24}
                  className="h-6 w-auto"
                  priority
                />
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Enterprise-ready Customer Service Automation. Deploy empathetic multimodal AI agents that scale relationships that matter for your business.
              </p>
            </div>
            
            {/* Global Presence */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Globe className="w-4 h-4" />
              <span>Global presence across 50+ countries</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Saple AI Technologies. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            {/* <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>All systems operational</span>
            </div> */}
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-xs text-gray-400">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">99.9%</div>
            <div className="text-xs text-gray-400">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">ISO 27001</div>
            <div className="text-xs text-gray-400">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">GDPR</div>
            <div className="text-xs text-gray-400">Compliant</div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}