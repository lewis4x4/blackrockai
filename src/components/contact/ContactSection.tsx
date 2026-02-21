import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Calendar, MapPin } from 'lucide-react';
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
          {/* Left: CTA + Contact Info */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-[44px] tracking-tight text-text-primary mb-6 leading-tight">
              Let&apos;s Build Something
            </h2>

            <p className="text-text-secondary text-base md:text-lg font-body leading-relaxed mb-4">
              Tell us what&apos;s broken. We&apos;ll tell you how to fix it.
            </p>

            <p className="text-text-secondary/70 text-sm font-body leading-relaxed mb-8">
              We work with 2&ndash;3 clients at a time so every project gets our full
              attention. If we&apos;re not the right fit, we&apos;ll tell you that too.
            </p>

            {/* Direct Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber" />
                <a
                  href="mailto:brian@blackrockai.co"
                  className="text-text-secondary text-sm font-body hover:text-amber transition-colors"
                >
                  brian@blackrockai.co
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-amber" />
                <a
                  href="#"
                  className="text-amber text-sm font-body hover:underline"
                >
                  Book a 30-min call
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber" />
                <span className="text-text-secondary text-sm font-body">
                  Lake City, FL
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
            {submitted ? (
              <div className="glass-card p-8 md:p-10 flex items-center justify-center min-h-[320px]">
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
                className="glass-card p-8 md:p-10 space-y-6"
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
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-amber transition-colors placeholder:text-text-secondary/60"
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
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-amber transition-colors placeholder:text-text-secondary/60"
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
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-amber transition-colors placeholder:text-text-secondary/60"
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
                    className="w-full bg-transparent border-0 border-b border-border-subtle text-text-primary font-body text-sm pb-3 focus:outline-none focus:border-amber transition-colors resize-none placeholder:text-text-secondary/60"
                    placeholder="What's the problem?"
                  />
                </div>

                <button type="submit" className="btn-amber w-full mt-2">
                  Send Message
                </button>

                <p className="text-text-secondary/50 text-xs font-body text-center">
                  We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
