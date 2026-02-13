/**
 * BlackRock AI — Particle Constellation Engine
 * 
 * Canvas-based particle system that creates an interconnected neural network
 * background effect. Particles drift, form proximity-based connections, and
 * respond to mouse movement with gentle gravitational attraction.
 * 
 * Performance targets: 60fps on mid-range devices, graceful degradation on mobile.
 */

export interface ParticleConfig {
  /** Number of particles (auto-scales with viewport on mobile) */
  count: number;
  /** Drift speed in px/frame */
  speed: number;
  /** Particle size range */
  size: { min: number; max: number };
  /** Max distance for drawing connection lines between particles */
  connectionDistance: number;
  /** Base opacity for connection lines */
  connectionOpacity: number;
  /** Radius around cursor that affects particles */
  mouseRadius: number;
  /** Strength of mouse gravitational pull */
  mouseForce: number;
  /** Percentage of particles that are cyan-highlighted (0-1) */
  highlightRatio: number;
  colors: {
    particle: string;
    connection: string;
    highlight: string;
  };
}

const DEFAULT_CONFIG: ParticleConfig = {
  count: 100,
  speed: 0.3,
  size: { min: 1, max: 2.5 },
  connectionDistance: 130,
  connectionOpacity: 0.08,
  mouseRadius: 160,
  mouseForce: 0.025,
  highlightRatio: 0.06,
  colors: {
    particle: 'rgba(255, 255, 255, 0.35)',
    connection: 'rgba(0, 212, 255, 0.06)',
    highlight: 'rgba(0, 212, 255, 0.4)',
  },
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  isHighlight: boolean;
  baseAlpha: number;
}

interface MouseState {
  x: number;
  y: number;
  active: boolean;
}

export class ParticleEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private config: ParticleConfig;
  private particles: Particle[] = [];
  private mouse: MouseState = { x: 0, y: 0, active: false };
  private animationId: number | null = null;
  private width = 0;
  private height = 0;
  private dpr = 1;

  constructor(canvas: HTMLCanvasElement, config?: Partial<ParticleConfig>) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) throw new Error('Canvas 2D context not available');
    this.ctx = ctx;
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
  }

  init(): void {
    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  destroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    window.removeEventListener('resize', this.handleResize);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('mouseleave', this.handleMouseLeave);
  }

  private resize(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  private createParticles(): void {
    // Scale particle count for mobile
    const isMobile = this.width < 768;
    const count = isMobile ? Math.floor(this.config.count * 0.4) : this.config.count;

    this.particles = Array.from({ length: count }, () => {
      const isHighlight = Math.random() < this.config.highlightRatio;
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * this.config.speed * 2,
        vy: (Math.random() - 0.5) * this.config.speed * 2,
        size:
          this.config.size.min +
          Math.random() * (this.config.size.max - this.config.size.min),
        isHighlight,
        baseAlpha: isHighlight ? 0.6 : 0.25 + Math.random() * 0.2,
      };
    });
  }

  private bindEvents(): void {
    window.addEventListener('resize', this.handleResize);
    // Listen on the parent (document) since canvas has pointer-events: none
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseleave', this.handleMouseLeave);
  }

  private handleResize = (): void => {
    this.resize();
    this.createParticles();
  };

  private handleMouseMove = (e: MouseEvent): void => {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
    this.mouse.active = true;
  };

  private handleMouseLeave = (): void => {
    this.mouse.active = false;
  };

  private animate = (): void => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.updateParticles();
    this.drawConnections();
    this.drawParticles();
    this.animationId = requestAnimationFrame(this.animate);
  };

  private updateParticles(): void {
    for (const p of this.particles) {
      // Apply mouse gravity
      if (this.mouse.active) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.config.mouseRadius && dist > 0) {
          const force = (this.config.mouseRadius - dist) / this.config.mouseRadius;
          p.vx += (dx / dist) * force * this.config.mouseForce;
          p.vy += (dy / dist) * force * this.config.mouseForce;
        }
      }

      // Apply velocity with damping
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Ensure minimum drift speed
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed < this.config.speed * 0.3) {
        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy += (Math.random() - 0.5) * 0.05;
      }

      // Wrap around edges (toroidal topology)
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.height + 10;
      if (p.y > this.height + 10) p.y = -10;
    }
  }

  private drawConnections(): void {
    const { connectionDistance, connectionOpacity, colors } = this.config;
    const connectionDistSq = connectionDistance * connectionDistance;

    this.ctx.lineWidth = 0.5;

    for (let i = 0; i < this.particles.length; i++) {
      const a = this.particles[i]!;
      for (let j = i + 1; j < this.particles.length; j++) {
        const b = this.particles[j]!;
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < connectionDistSq) {
          const dist = Math.sqrt(distSq);
          const opacity = connectionOpacity * (1 - dist / connectionDistance);

          // Use cyan for connections involving highlight particles
          if (a.isHighlight || b.isHighlight) {
            this.ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 1.5})`;
          } else {
            this.ctx.strokeStyle = colors.connection.replace(
              /[\d.]+\)$/,
              `${opacity})`
            );
          }

          this.ctx.beginPath();
          this.ctx.moveTo(a.x, a.y);
          this.ctx.lineTo(b.x, b.y);
          this.ctx.stroke();
        }
      }
    }

    // Draw connections to mouse
    if (this.mouse.active) {
      for (const p of this.particles) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDistance * 1.2) {
          const opacity = connectionOpacity * 2 * (1 - dist / (connectionDistance * 1.2));
          this.ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
        }
      }
    }
  }

  private drawParticles(): void {
    for (const p of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      if (p.isHighlight) {
        // Cyan glow for highlight particles
        this.ctx.fillStyle = this.config.colors.highlight;
        this.ctx.shadowColor = 'rgba(0, 212, 255, 0.5)';
        this.ctx.shadowBlur = 6;
      } else {
        this.ctx.fillStyle = this.config.colors.particle.replace(
          /[\d.]+\)$/,
          `${p.baseAlpha})`
        );
        this.ctx.shadowColor = 'transparent';
        this.ctx.shadowBlur = 0;
      }

      this.ctx.fill();
    }

    // Reset shadow
    this.ctx.shadowColor = 'transparent';
    this.ctx.shadowBlur = 0;
  }
}
