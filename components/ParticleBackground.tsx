import React, { useEffect, useRef, useState } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Use state to force re-render when theme changes
  const [themeKey, setThemeKey] = useState(0);

  useEffect(() => {
    const handleThemeChange = () => {
      setThemeKey(prev => prev + 1);
    };
    window.addEventListener('themeChanged', handleThemeChange);
    return () => window.removeEventListener('themeChanged', handleThemeChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Helper to get CSS variable
    const getVar = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    // Convert hex to rgba
    const hexToRgba = (hex: string, alpha: number) => {
      if (!hex) return `rgba(255,255,255,${alpha})`;
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Default to Violet if variable missing
    const primary = getVar('--color-primary') || '#8B5CF6';
    const secondary = getVar('--color-secondary') || '#45A29E';
    const glow = getVar('--color-glow') || '#66FCF1';

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; baseColor: string; lightColor: string }[] = [];
    const particleCount = 60;

    // Dynamic colors based on current theme
    const darkColors = [
      hexToRgba(primary, 0.3), 
      hexToRgba(secondary, 0.3), 
      hexToRgba(glow, 0.2)
    ];
    // Light mode: Darker versions
    const lightColors = [
      'rgba(11, 12, 16, 0.15)', 
      hexToRgba(secondary, 0.4), 
      hexToRgba(primary, 0.3)
    ];

    for (let i = 0; i < particleCount; i++) {
      const colorIdx = Math.floor(Math.random() * darkColors.length);
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        baseColor: darkColors[colorIdx],
        lightColor: lightColors[colorIdx],
        color: darkColors[colorIdx],
      });
    }

    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains('dark');

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        p.color = isDark ? p.baseColor : p.lightColor;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            const opacity = 0.1 - dist / 1500;
            
            // Use dynamic secondary color for lines
            const lineColor = isDark ? secondary : secondary; 
            const lineRgb = hexToRgba(lineColor, isDark ? opacity : opacity * 1.5);
            
            ctx.strokeStyle = lineRgb;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeKey]); // Re-run when theme changes

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default ParticleBackground;