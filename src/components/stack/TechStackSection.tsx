import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TechGroup {
  category: string;
  items: string[];
}

const TECH_STACK: TechGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Supabase', 'PostgreSQL', 'Edge Functions'],
  },
  {
    category: 'AI',
    items: ['Claude API', 'OpenAI'],
  },
];

export function TechStackSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="stack" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-3 scroll-reveal ${isVisible ? 'visible' : ''}`}
          ref={ref}
        >
          The Architecture
        </h2>

        <p
          className={`text-text-secondary text-lg font-body mb-12 md:mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          Real architecture&mdash;not no-code duct tape.
        </p>

        {/* Blueprint / Schematic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {TECH_STACK.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`scroll-reveal ${isVisible ? 'visible' : ''} relative`}
            >
              {/* Connecting line (desktop only) */}
              {groupIndex < TECH_STACK.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px border-t border-dashed border-border-subtle" />
              )}

              <div className="slate-card p-6 md:p-8">
                {/* Category Label */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-copper" />
                  <span className="font-mono text-xs text-copper uppercase tracking-widest">
                    {group.category}
                  </span>
                </div>

                <div className="h-px bg-border-subtle mb-5" />

                {/* Tech Items */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.03)] border border-border-subtle text-sm font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
