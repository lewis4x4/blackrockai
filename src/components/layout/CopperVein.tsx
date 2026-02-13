import { useEffect, useState } from 'react';

export function CopperVein() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[100] transition-[width] duration-100"
      style={{
        width: `${progress * 100}%`,
        background:
          'linear-gradient(90deg, rgba(184,115,51,0.6), #B87333)',
        boxShadow:
          progress > 0
            ? '0 0 8px rgba(184, 115, 51, 0.4), 0 0 20px rgba(184, 115, 51, 0.15)'
            : 'none',
      }}
    />
  );
}
