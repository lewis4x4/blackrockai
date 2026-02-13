import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* 3D Rock Icon — parallax background element */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <img
          src="/blackrock-ai-icon-transparent.jpg"
          alt=""
          aria-hidden="true"
          className="w-[280px] md:w-[360px] lg:w-[420px] opacity-[0.07]"
        />
      </div>

      {/* Content */}
      <motion.div
        className="text-center max-w-3xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-[80px] tracking-tight text-text-primary leading-[1.05]"
        >
          Better decisions.
          <br />
          <span className="text-copper">Built.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-xl md:text-2xl text-text-secondary mt-6"
        >
          We build systems that think.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="font-body text-base md:text-lg text-text-secondary mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          We don&apos;t sell software&mdash;we embed with organizations to unify
          their operations, automate what slows them down, and surface the
          clarity their leadership needs to act.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <button onClick={scrollToContact} className="btn-copper text-base">
            Let&apos;s talk.
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
        <span className="text-xs text-text-secondary tracking-widest uppercase font-body">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-text-secondary" />
      </div>
    </section>
  );
}
