import { useEffect, useRef } from 'react';
import { ParticleEngine } from '@/lib/particles';
import type { ParticleConfig } from '@/lib/particles';

interface ParticleBackgroundProps {
  config?: Partial<ParticleConfig>;
  className?: string;
}

export function ParticleBackground({ config, className }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<ParticleEngine | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new ParticleEngine(canvas, config);
    engineRef.current = engine;
    engine.init();

    return () => {
      engine.destroy();
      engineRef.current = null;
    };
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-canvas ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}
