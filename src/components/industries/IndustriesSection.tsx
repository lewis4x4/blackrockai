import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const INDUSTRIES = [
  'Insurance',
  'National Security',
  'Education',
  'Complex Logistics',
];

export function IndustriesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="industries" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-4 scroll-reveal ${isVisible ? 'visible' : ''}`}
          ref={ref}
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
              key={industry}
              className={`scroll-reveal ${isVisible ? 'visible' : ''} inline-flex items-center px-5 py-3 rounded-md bg-black-secondary border border-border-subtle text-sm text-text-secondary font-body transition-all duration-300 hover:border-copper hover:text-text-primary`}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
