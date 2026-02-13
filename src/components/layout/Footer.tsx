import { Linkedin, Github, Twitter } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'What We Build', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Architecture', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Copper-tinted top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-copper-dim to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-text-secondary text-sm font-body">
            &copy; 2025 BlackRock AI
          </p>

          {/* Nav Links */}
          <nav className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-text-secondary text-sm hover:text-copper transition-colors font-body"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-text-secondary hover:text-copper transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
