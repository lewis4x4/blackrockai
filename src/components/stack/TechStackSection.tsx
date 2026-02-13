import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TechGroup {
  category: string;
  items: string[];
  note: string;
}

const TECH_STACK: TechGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    note: 'Component-driven, type-safe interfaces',
  },
  {
    category: 'Backend',
    items: ['Supabase', 'PostgreSQL', 'Edge Functions', 'REST APIs'],
    note: 'Real-time data with row-level security',
  },
  {
    category: 'AI',
    items: ['Claude API', 'OpenAI', 'Custom Models', 'RAG Pipelines'],
    note: 'Production-grade AI, not toy demos',
  },
  {
    category: 'Infrastructure',
    items: ['Netlify', 'Cloudflare', 'n8n', 'GitHub Actions'],
    note: 'Automated deploys and workflow orchestration',
  },
];

export function TechStackSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="stack" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-3 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          The Architecture
        </h2>

        <p
          className={`text-text-secondary text-lg font-body mb-12 md:mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          Real architecture &mdash; not no-code duct tape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className={`scroll-reveal ${isVisible ? 'visible' : ''}`}
            >
              <div className="glass-card p-6 md:p-8 h-full flex flex-col">
                {/* Category Label */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-amber" />
                  <span className="font-mono text-xs text-amber uppercase tracking-widest">
                    {group.category}
                  </span>
                </div>

                <div className="h-px bg-border-subtle mb-5" />

                {/* Tech Items */}
                <div className="flex flex-wrap gap-2 mb-4 flex-1">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.03)] border border-border-subtle text-sm font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom note */}
                <p className="text-text-secondary/50 text-xs font-body mt-auto">
                  {group.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
