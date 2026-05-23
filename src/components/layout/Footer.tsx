import { Linkedin, Github, Mail } from 'lucide-react';
import { githubUrl, linkedInUrl, mailtoContact } from '@/lib/env';

const NAV_ITEMS = [
  { label: 'What We Build', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Architecture', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: linkedInUrl || '#', label: 'LinkedIn' },
  { icon: Github, href: githubUrl || '#', label: 'GitHub' },
  { icon: Mail, href: mailtoContact(), label: 'Email' },
] as const;

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Amber-tinted top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-dim to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left: Branding */}
          <div>
            <p className="font-display font-bold text-lg text-text-primary mb-1">
              BlackRock AI
            </p>
            <p className="text-text-secondary text-sm font-body mb-4">
              AI Consulting &amp; Development
            </p>
            <p className="text-text-secondary/50 text-xs font-body">
              &copy; {new Date().getFullYear()} BlackRock AI. All rights reserved.
            </p>
          </div>

          {/* Center: Navigation */}
          <div>
            <p className="text-text-secondary/50 text-xs font-body uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-text-secondary text-sm hover:text-amber transition-colors font-body text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Connect */}
          <div>
            <p className="text-text-secondary/50 text-xs font-body uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center gap-2.5 text-text-secondary hover:text-amber transition-colors text-sm font-body"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
