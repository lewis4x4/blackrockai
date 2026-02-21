import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Step {
  title: string;
  description: string;
  badge: string;
}

const STEPS: Step[] = [
  {
    title: 'Discovery & Audit',
    description:
      'We map your current systems, identify bottlenecks, and document every data flow. You get a clear picture of what\u2019s broken and a prioritized roadmap to fix it.',
    badge: 'Week 1\u20132',
  },
  {
    title: 'Build & Iterate',
    description:
      'Rapid prototyping in 2-week sprints. Working software, not wireframes. You see progress every cycle and can steer the product as we go.',
    badge: 'Weeks 3\u201310',
  },
  {
    title: 'Deploy & Scale',
    description:
      'Production deployment with monitoring, documentation, and team training. We don\u2019t disappear after launch \u2014 we stay until it\u2019s running clean.',
    badge: 'Ongoing',
  },
];

export function HowWeWorkSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="process" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-3 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          How We Work
        </h2>
        <p
          className={`text-text-secondary text-lg font-body mb-12 md:mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          A repeatable process that ships real software.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line — horizontal on desktop, vertical on mobile */}
          <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-border-subtle z-0" />
          <div className="md:hidden absolute top-0 bottom-0 left-[5px] w-px bg-border-subtle z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 stagger-children relative z-10">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`scroll-reveal ${isVisible ? 'visible' : ''} relative pl-10 md:pl-0`}
              >
                {/* Amber dot — mobile: absolute left, desktop: inline */}
                <div className="absolute left-0 top-1 md:static md:mb-5">
                  <div className="w-3 h-3 rounded-full bg-amber shadow-[0_0_12px_rgba(245,158,11,0.4)]" />
                </div>

                {/* Badge */}
                <span className="inline-block text-amber text-sm font-bold uppercase tracking-widest mb-3">
                  {step.badge}
                </span>

                <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
