import { Shield, ShieldCheck, HardHat, Flame, Factory, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Industry {
  icon: LucideIcon;
  label: string;
}

const INDUSTRIES: Industry[] = [
  { icon: Shield, label: 'Security & Access Control' },
  { icon: ShieldCheck, label: 'Insurance' },
  { icon: HardHat, label: 'Construction' },
  { icon: Flame, label: 'Energy & Mining' },
  { icon: Factory, label: 'Manufacturing & Distribution' },
  { icon: Wrench, label: 'Trades & Contracting' },
];

export function IndustriesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="industries" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-4 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          High-Stakes Environments
        </h2>

        <p
          className={`text-text-secondary text-lg font-body mb-10 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          Specialized expertise where failure isn&apos;t an option.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 stagger-children">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className={`scroll-reveal ${isVisible ? 'visible' : ''} inline-flex items-center gap-2.5 px-5 py-3 rounded-md bg-black-secondary border border-border-subtle text-sm text-text-secondary font-body transition-all duration-300 hover:border-amber hover:text-text-primary`}
            >
              <industry.icon className="w-4 h-4 text-amber" />
              {industry.label}
            </div>
          ))}
        </div>

        <p
          className={`text-text-secondary/60 text-sm font-body mt-8 italic scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          6 active enterprise clients across these verticals.
        </p>
      </div>
    </section>
  );
}
