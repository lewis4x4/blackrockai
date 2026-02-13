import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'What We Build', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Architecture', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const scrollTo = useCallback((href: string) => {
    setIsMobileOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(28,28,28,0.92)] backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo — Icon + Wordmark */}
          <button
            onClick={() => scrollTo('#top')}
            className="flex items-center gap-0 hover:opacity-90 transition-opacity"
          >
            <img
              src="/blackrock-ai-logo-dark-bg.jpg"
              alt="BlackRock AI"
              className="h-8 md:h-9 w-auto"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors font-body"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-copper text-sm !py-2.5 !px-5"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden text-text-primary"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-[60] bg-[rgba(28,28,28,0.97)] backdrop-blur-lg flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="text-text-primary"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.4,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  onClick={() => scrollTo(item.href)}
                  className="text-2xl font-display font-bold text-text-primary hover:text-copper transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + NAV_ITEMS.length * 0.08,
                  duration: 0.4,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                onClick={() => scrollTo('#contact')}
                className="btn-copper mt-4"
              >
                Get Started
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
