
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [spotlightColor, setSpotlightColor] = useState('rgba(69, 162, 158, 0.15)');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Typewriter State
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const updateColor = () => {
        const style = getComputedStyle(document.documentElement);
        const color = style.getPropertyValue('--color-secondary').trim();
        
        if (color.startsWith('#')) {
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            setSpotlightColor(`rgba(${r}, ${g}, ${b}, 0.15)`);
        } else {
            setSpotlightColor(color || 'rgba(69, 162, 158, 0.15)');
        }
    };

    updateColor();
    window.addEventListener('themeChanged', updateColor);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScrollIndicator(false);
        } else {
            setShowScrollIndicator(true);
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('themeChanged', updateColor);
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Typewriter Effect
  useEffect(() => {
    const roles = PERSONAL_INFO.tagline.split('|').map((r) => r.trim());
    const currentRole = roles[roleIndex % roles.length];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && text === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setText(prev => 
        isDeleting 
          ? currentRole.slice(0, prev.length - 1) 
          : currentRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    ${spotlightColor},
    transparent 80%
  )`;

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-pharaoh-dark transition-colors duration-300 py-20 md:py-0"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background }}
      />

      <ParticleBackground />
      
      {/* Stylized Egyptian Geometric Decor Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1 mt-12 md:mt-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              whileHover={{ scale: 1.05, x: 10, color: "var(--color-primary)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-tech-cyan font-display font-medium text-sm md:text-xl tracking-widest mb-2 md:mb-4 origin-center md:origin-left cursor-default"
            >
              HELLO WORLD, I AM
            </motion.h2>
            
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-gray-900 dark:text-white mb-3 md:mb-4 leading-tight cursor-default origin-center md:origin-left"
            >
              MOHAMED <motion.span 
                whileHover={{ color: "var(--color-secondary)", textShadow: "0 0 20px var(--color-secondary)" }}
                className="text-pharaoh-gold gold-glow inline-block transition-colors"
              >ARSINEK</motion.span>
            </motion.h1>
            
            <motion.h3 
              whileHover={{ scale: 1.05, x: 5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-sans font-light mb-6 md:mb-8 min-h-[3rem] md:h-auto cursor-default origin-center md:origin-left flex flex-wrap items-center justify-center md:justify-start gap-1"
            >
              <span className="text-tech-cyan dark:text-tech-glow font-bold">
                {text}
              </span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-0.5 md:w-1 h-5 md:h-6 bg-pharaoh-gold inline-block ml-1"
              />
            </motion.h3>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed px-2 md:px-0 text-sm md:text-base">
               Transforming ideas into digital reality using the power of Code, Design, and Artificial Intelligence.
            </p>

            {/* Buttons Grid */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start px-4 md:px-0">
              
              {/* View Projects */}
              <a href="#projects" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-display font-bold rounded hover:border-tech-cyan hover:text-tech-cyan transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </a>

              {/* Contact Me */}
              <a href="#contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 bg-pharaoh-gold text-pharaoh-dark font-display font-bold rounded shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </motion.button>
              </a>

              {/* Work With Me */}
              <a href="#contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--color-secondary)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-3 bg-tech-cyan text-white font-display font-bold rounded shadow-[0_0_15px_rgba(69,162,158,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  Work With Me
                </motion.button>
              </a>

            </div>
          </motion.div>
        </div>

        {/* Visual/Avatar */}
        <div className="flex-1 order-1 md:order-2 flex justify-center relative w-full mb-8 md:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96"
          >
             {/* Animated glowing rings simulating a shield or portal */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
               className="absolute inset-0 border-2 border-dashed border-pharaoh-gold/30 rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
               className="absolute inset-4 border border-tech-cyan/40 rounded-full"
             />
             
             {/* Central Avatar/Logo Container */}
             <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-200 dark:border-pharaoh-dark shadow-[0_0_30px_rgba(69,162,158,0.3)] bg-white dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
               {/* Realistic stylized King Cobra */}
               <motion.svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full p-2"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               >
                  <defs>
                    <linearGradient id="cobraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Cobra Body & Hood */}
                  <path 
                    d="M100,180 C100,180 80,160 60,140 C40,120 40,80 60,50 C75,27.5 125,27.5 140,50 C160,80 160,120 140,140 C120,160 100,180 100,180 Z" 
                    fill="url(#cobraGradient)" 
                    opacity="0.9"
                  />
                  
                  {/* Inner Details / Scales effect */}
                  <path 
                    d="M100,40 C110,40 120,60 120,90 C120,120 110,140 100,150 C90,140 80,120 80,90 C80,60 90,40 100,40 Z" 
                    fill="#0B0C10" 
                    opacity="0.3"
                  />

                  {/* Head Shape */}
                  <ellipse cx="100" cy="55" rx="15" ry="18" fill="#0B0C10" />
                  
                  {/* Eyes */}
                  <motion.circle 
                    cx="94" cy="52" r="2" fill="var(--color-glow)" 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.circle 
                    cx="106" cy="52" r="2" fill="var(--color-glow)"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                  />
                  
                  {/* Tongue */}
                  <path d="M100,73 L100,85 L95,92 M100,85 L105,92" stroke="#ef4444" strokeWidth="1.5" fill="none" />
                </motion.svg>
             </div>
             
             {/* Floating Tech Particles around avatar */}
             <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 right-10 bg-white dark:bg-pharaoh-dark border border-tech-cyan px-3 py-1 rounded-full text-xs text-tech-cyan shadow-sm"
             >
                Python
             </motion.div>
             <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute bottom-10 -left-4 bg-white dark:bg-pharaoh-dark border border-pharaoh-gold px-3 py-1 rounded-full text-xs text-pharaoh-gold shadow-sm"
             >
                React
             </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                exit={{ opacity: 0 }}
                transition={{ 
                    y: { repeat: Infinity, duration: 2 },
                    opacity: { duration: 0.3 }
                }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-tech-cyan rounded-full" />
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
