import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItem {
  end: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { end: 6, suffix: '+', label: 'Active Enterprise Clients' },
  { end: 50, suffix: '+', label: 'AI Implementations' },
  { end: 3, suffix: 'x', label: 'Avg Client ROI' },
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
        <span className="text-copper">{suffix}</span>
      </div>
      <p className="text-text-secondary text-sm font-body mt-2">{label}</p>
    </div>
  );
}

export function BuilderSection() {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Founder Section */}
        <div ref={sectionRef} className="max-w-3xl">
          <h2
            className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-8 scroll-reveal ${sectionVisible ? 'visible' : ''}`}
          >
            Led by a CEO, not just a Coder.
          </h2>

          <p
            className={`text-text-secondary text-base md:text-lg leading-relaxed font-body mb-8 scroll-reveal ${sectionVisible ? 'visible' : ''}`}
          >
            Brian Lewis has sat in the seats our clients sit in. As a CEO, COO,
            board chairman, and executive across insurance, education, and
            national security operations, Brian doesn&apos;t just understand
            code. He understands the weight of decisions.
          </p>

          {/* Pull Quote */}
          <blockquote
            className={`border-l-2 border-copper pl-6 py-2 mb-6 scroll-reveal ${sectionVisible ? 'visible' : ''}`}
          >
            <p className="text-text-primary text-xl md:text-2xl font-display font-bold italic">
              &ldquo;I build from that side of the table.&rdquo;
            </p>
          </blockquote>

          <p
            className={`text-text-secondary text-sm font-body scroll-reveal ${sectionVisible ? 'visible' : ''}`}
          >
            Brian Lewis &mdash; CEO &amp; Owner, Lewis Insurance Agency; COO
            &amp; Owner, RedeX; Former Assistant Dean, Liberty University.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border-subtle"
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} enabled={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
