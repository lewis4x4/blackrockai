import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-amber text-sm font-bold uppercase tracking-[0.25em] mb-6"
        >
          AI Consulting &amp; Development
        </motion.p>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-[72px] tracking-tight text-text-primary leading-[1.05] mb-6"
        >
          We Build Intelligent Systems That Scale
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-text-secondary text-lg md:text-xl font-body leading-relaxed max-w-[600px] mx-auto mb-10"
        >
          From strategy to deployment &mdash; custom AI applications, industry CRMs,
          and automation for companies that can&apos;t afford to get it wrong.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a href="#contact" className="btn-amber">
            Book a Discovery Call
          </a>
          <a href="#services" className="btn-outline">
            See What We Build
          </a>
        </motion.div>

        {/* Urgency line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-text-secondary/60 text-sm font-body"
        >
          Currently accepting 2 new clients for Q1 2026
        </motion.p>
      </div>
    </section>
  );
}
