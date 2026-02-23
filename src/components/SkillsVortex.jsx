import { useRef, useEffect } from 'react';

const PARTICLES = 320;
const STARS = 60;

function spawnParticle(R) {
  const angle = Math.random() * Math.PI * 2;
  const r = R * (0.28 + Math.random() * 0.72);
  const normalizedR = r / R;
  return {
    angle,
    r,
    angSpeed: 0.006 + (1 - normalizedR) * 0.032,
    inSpeed: 0.12 + (1 - normalizedR) * 0.6,
    alpha: 0.3 + Math.random() * 0.7,
    size: 0.4 + Math.random() * 1.8,
    tilt: 0,
  };
}

function getParticleColor(r, R, alpha) {
  const pct = 1 - r / R;
  let red, green, blue;
  if (pct < 0.5) {
    const t = pct / 0.5;
    red = Math.floor(0 + t * 0);
    green = Math.floor(180 + t * 75);
    blue = Math.floor(160 - t * 130);
  } else {
    const t = (pct - 0.5) / 0.5;
    red = Math.floor(0 + t * 180);
    green = Math.floor(255);
    blue = Math.floor(30 + t * 200);
  }
  return `rgba(${red},${green},${blue},${alpha * (0.3 + pct * 0.7)})`;
}

export default function SkillsVortex() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const dataRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      const ctx = canvas.getContext('2d');
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');

    function draw() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.5;

      if (!dataRef.current) {
        dataRef.current = {
          particles: Array.from({ length: PARTICLES }, () => spawnParticle(r)),
          stars: Array.from({ length: STARS }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 0.8,
            a: Math.random() * 0.4 + 0.1,
            twinkle: Math.random() * Math.PI * 2,
          })),
          frame: 0,
        };
      }
      const { particles, stars, frame: frameVal } = dataRef.current;
      dataRef.current.frame = frameVal + 1;

      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();

      stars.forEach((s) => {
        s.twinkle += 0.02;
        const a = s.a * (0.6 + 0.4 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150,255,220,${a})`;
        ctx.fill();
      });

      particles.sort((a, b) => b.r - a.r);

      particles.forEach((p) => {
        p.angle += p.angSpeed;
        p.r -= p.inSpeed * 0.05;

        if (p.r < 5) {
          Object.assign(p, spawnParticle(r));
          return;
        }

        // Circular orbit (vertical/upright like reference)
        const x = cx + Math.cos(p.angle) * p.r;
        const y = cy + Math.sin(p.angle) * p.r;

        const pct = 1 - p.r / r;
        const size = p.size * (1 + pct * 2.5);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = getParticleColor(p.r, r, p.alpha);

        if (pct > 0.65) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = pct > 0.85 ? 'rgba(180,255,220,0.9)' : 'rgba(0,255,140,0.6)';
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const disk = ctx.createRadialGradient(cx, cy, r * 0.08, cx, cy, r * 0.42);
      disk.addColorStop(0, 'rgba(0,255,160,0.18)');
      disk.addColorStop(0.4, 'rgba(0,200,120,0.10)');
      disk.addColorStop(1, 'rgba(0,100,80,0)');
      ctx.fillStyle = disk;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.42, 0, Math.PI * 2);
      ctx.fill();

      const eh = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.14);
      eh.addColorStop(0, 'rgba(0,0,0,1)');
      eh.addColorStop(0.7, 'rgba(0,0,0,0.95)');
      eh.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = eh;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.14, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.155, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,255,180,${0.3 + 0.2 * Math.sin(frameVal * 0.05)})`;
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00ffb4';
      ctx.stroke();
      ctx.shadowBlur = 0;

      const vignette = ctx.createRadialGradient(cx, cy, r * 0.55, cx, cy, r);
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.97)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      ctx.restore();
      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="skills__vortex-inner">
      <canvas ref={canvasRef} />
    </div>
  );
}
