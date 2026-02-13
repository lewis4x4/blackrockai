import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItem {
  end: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { end: 6, suffix: '+', label: 'Active Enterprise Clients' },
  { end: 50, suffix: '+', label: 'AI Implementations Shipped' },
  { end: 3, suffix: 'x', label: 'Average Client ROI' },
];

function StatCounter({
  end,
  suffix,
  label,
  enabled,
}: StatItem & { enabled: boolean }) {
  const count = useCountUp({ end, enabled, duration: 2000 });

  return (
    <div className="text-center">
      <div className="font-display font-extrabold text-4xl md:text-5xl text-text-primary">
        {count}
        <span className="text-amber">{suffix}</span>
      </div>
      <p className="text-text-secondary text-sm font-body mt-2">{label}</p>
    </div>
  );
}

export function ByTheNumbersSection() {
  const { ref: statsRef, isVisible: statsVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: quoteRef, isVisible: quoteVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-12 md:mb-16 scroll-reveal ${statsVisible ? 'visible' : ''}`}
          ref={statsRef}
        >
          By The Numbers
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} enabled={statsVisible} />
          ))}
        </div>

        {/* Testimonial */}
        <div ref={quoteRef}>
          <blockquote
            className={`glass-card p-8 md:p-10 border-l-[3px] border-l-amber scroll-reveal ${quoteVisible ? 'visible' : ''}`}
          >
            <p className="text-text-primary text-lg md:text-xl font-display italic leading-relaxed mb-4">
              &ldquo;BlackRock AI rebuilt our entire field operations platform in 8
              weeks. It would have taken our internal team a year.&rdquo;
            </p>
            <p className="text-text-secondary text-sm font-body">
              &mdash; Operations Director, Security Services Company
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
