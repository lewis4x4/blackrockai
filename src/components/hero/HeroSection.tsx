import { useEffect, useRef } from 'react';

const HERO_COPY = {
  h1: 'Better decisions.',
  h1_accent: 'Built.',
  sub: 'We build systems that think.',
  body: "We don\u2019t sell software\u2014we embed with organizations to unify their operations, automate what slows them down, and surface the clarity their leadership needs to act.",
};

export function HeroSection() {
  const rockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rockRef.current) {
        const scrolled = window.scrollY;
        rockRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black-primary">
      {/* --- LAYER 0: BACKGROUND ROCK --- */}
      <div
        ref={rockRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center md:justify-end"
      >
        <div className="relative w-[80%] md:w-[50%] opacity-40 mix-blend-overlay md:mr-[-10%]">
          {/* TODO: Replace with PNG (transparent bg) for cleaner blending */}
          <img
            src="/blackrock-ai-icon-transparent.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain"
          />
          {/* Vignette — fade rock edges into background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black-primary via-transparent to-black-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-black-primary via-transparent to-transparent" />
        </div>
      </div>

      {/* --- LAYER 10: CONTENT --- */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl">
          {/* Subhead with Copper Line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-copper" />
            <span className="text-copper font-mono uppercase tracking-[0.2em] text-sm font-bold">
              {HERO_COPY.sub}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-text-primary leading-[0.9] tracking-[-0.05em] mb-8">
            {HERO_COPY.h1} <br />
            <span className="text-copper">{HERO_COPY.h1_accent}</span>
          </h1>

          {/* Body Copy */}
          <p className="text-xl text-text-muted/80 max-w-xl leading-relaxed mb-12 border-l-2 border-white/10 pl-6">
            {HERO_COPY.body}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="bg-copper text-white px-10 py-4 font-bold text-lg tracking-wide hover:bg-white hover:text-black-primary transition-all duration-200 inline-block"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
