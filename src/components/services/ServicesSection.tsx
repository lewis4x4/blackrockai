import { Network, BrainCircuit, Cable, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Network,
    title: 'Unified Operations',
    description:
      'When one part of your operation moves, the rest understands it.',
  },
  {
    icon: BrainCircuit,
    title: 'Automated Decisions',
    description: 'Surface the clarity leadership needs to act.',
  },
  {
    icon: Cable,
    title: 'Legacy Integration',
    description: "Connect data that doesn't talk to each other.",
  },
  {
    icon: Building2,
    title: 'Scalable Architecture',
    description: 'Built to scale, built to last.',
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-12 md:mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
          ref={ref}
        >
          What We Build
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`slate-card p-6 md:p-8 scroll-reveal ${isVisible ? 'visible' : ''}`}
            >
              <service.icon className="w-7 h-7 text-copper mb-4" />
              <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
