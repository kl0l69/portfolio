
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background style logic
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down -> Hide
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu automatically when scrolling down
      } else {
        // Scrolling Up -> Show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default to dark
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Mobile Menu Animation Variants
  const menuVariants: Variants = {
    closed: { 
      opacity: 0,
      y: -20,
      scaleY: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    open: { 
      opacity: 1,
      y: 0, 
      scaleY: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-white/5 dark:bg-black/10 backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
             {/* Real Cobra Icon */}
             <svg className="w-8 h-8 text-pharaoh-gold drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 90 C40 80 30 70 20 60 C10 45 10 25 25 15 C40 5 60 5 75 15 C90 25 90 45 80 60 C70 70 60 80 50 90 Z M50 20 C45 20 40 25 40 30 C40 35 45 40 50 40 C55 40 60 35 60 30 C60 25 55 20 50 20 Z" />
             </svg>
            <span className="font-display font-bold text-2xl tracking-wider text-gray-800 dark:text-gray-100 drop-shadow-sm">
              ARSINEK
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans font-medium text-gray-700 dark:text-gray-200 hover:text-pharaoh-gold dark:hover:text-pharaoh-gold hover:scale-110 transition-all duration-200 relative group drop-shadow-sm"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-glow transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md text-gray-800 dark:text-pharaoh-gold hover:bg-white/40 dark:hover:bg-black/40 transition-colors focus:outline-none border border-white/10"
              aria-label="Toggle Theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile menu controls */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md text-gray-800 dark:text-pharaoh-gold transition-colors focus:outline-none"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-200 hover:text-pharaoh-gold focus:outline-none p-2"
            >
              {isOpen ? <X className="h-8 w-8 text-pharaoh-gold" /> : <Menu className="h-8 w-8 text-tech-cyan" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Glass Effect and Spring Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-20 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden rounded-b-3xl z-40"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-pharaoh-gold hover:bg-white/10 dark:hover:bg-white/5 w-full text-center transition-all border border-transparent hover:border-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
