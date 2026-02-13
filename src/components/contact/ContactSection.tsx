import { useState } from 'react';
import type { FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: CTA */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[44px] tracking-tight text-text-primary mb-6 leading-tight">
              Turn chaos into clarity.
            </h2>

            <p className="text-text-secondary text-base md:text-lg font-body leading-relaxed mb-8">
              Manual processes. Disconnected systems. Data that doesn&apos;t
              talk. We find what&apos;s breaking and build platforms that make it
              work together.
            </p>

            <a href="#" className="btn-copper inline-block">
              Book a Call
            </a>
          </div>

          {/* Right: Form */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
            {submitted ? (
              <div className="slate-card p-8 md:p-10 flex items-center justify-center min-h-[320px]">
                <div className="text-center">
                  <p className="font-display font-bold text-xl text-text-primary mb-2">
                    We&apos;ll be in touch.
                  </p>
                  <p className="text-text-secondary text-sm font-body">
                    Thanks for reaching out.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="slate-card p-8 md:p-10 space-y-6"
              >
                <div>
                  <label className="block text-text-secondary text-xs uppercase tracking-widest font-body mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-copper transition-colors placeholder:text-[#555]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-xs uppercase tracking-widest font-body mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-copper transition-colors placeholder:text-[#555]"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-xs uppercase tracking-widest font-body mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-copper transition-colors placeholder:text-[#555]"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-text-secondary text-xs uppercase tracking-widest font-body mb-3">
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-copper transition-colors resize-none placeholder:text-[#555]"
                    placeholder="Tell us what's on your mind"
                  />
                </div>

                <button type="submit" className="btn-copper w-full mt-2">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
