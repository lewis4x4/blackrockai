import { Brain, Code, LayoutDashboard, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

const SERVICES: ServiceItem[] = [
  {
    icon: Brain,
    title: 'AI Strategy & Consulting',
    description:
      'We audit your current systems, map your data flows, and design an AI roadmap that delivers measurable ROI. No slide decks that collect dust \u2014 actionable plans with clear implementation timelines.',
    tags: ['Process Mapping', 'ROI Analysis', 'Tech Assessment'],
  },
  {
    icon: Code,
    title: 'Custom AI Applications',
    description:
      'Purpose-built AI tools that solve your specific problems. We integrate large language models, computer vision, and natural language processing into production-grade applications your team actually uses.',
    tags: ['LLM Integration', 'Computer Vision', 'NLP Pipelines'],
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS & Industry CRMs',
    description:
      'Vertical software with AI baked in, not bolted on. Multi-tenant platforms with role-based access, real-time data sync, and intelligent automation that scales with your operation.',
    tags: ['Multi-Tenant', 'Role-Based Access', 'Real-Time Sync'],
  },
  {
    icon: Workflow,
    title: 'Integration & Automation',
    description:
      'Connect your stack. Automate your workflows. We design APIs, build data pipelines, and deploy n8n workflows that eliminate the manual processes bleeding your margins.',
    tags: ['n8n Workflows', 'API Design', 'Data Pipelines'],
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <h2
          className={`font-display font-extrabold text-3xl md:text-4xl lg:text-[48px] tracking-tight text-text-primary mb-3 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          What We Build
        </h2>
        <p
          className={`text-text-secondary text-lg font-body mb-12 md:mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
          End-to-end AI solutions &mdash; not slide decks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`glass-card p-6 md:p-8 border-l-2 border-l-amber hover:translate-y-[-4px] scroll-reveal ${isVisible ? 'visible' : ''}`}
            >
              <service.icon className="w-7 h-7 text-amber mb-4" />
              <h3 className="font-display font-bold text-lg text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-body mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-[rgba(255,255,255,0.06)] border border-border-subtle text-xs text-text-secondary font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
