import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, Check } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    bg: string;
    glow: string;
  };
}

const themes: Theme[] = [
  {
    id: 'pharaoh',
    name: 'Pharaoh (Default)',
    colors: {
      primary: '#8B5CF6', // Violet (Replaces Gold)
      secondary: '#45A29E', // Cyan
      bg: '#0B0C10', // Dark Black
      glow: '#A78BFA' // Light Violet
    }
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    colors: {
      primary: '#F472B6', // Pink
      secondary: '#22D3EE', // Cyan
      bg: '#111827', // Dark Gray
      glow: '#F472B6'
    }
  },
  {
    id: 'emerald',
    name: 'Matrix',
    colors: {
      primary: '#10B981', // Green
      secondary: '#34D399', // Light Green
      bg: '#022c22', // Deep Green Black
      glow: '#10B981'
    }
  },
  {
    id: 'crimson',
    name: 'Ronin',
    colors: {
      primary: '#EF4444', // Red
      secondary: '#F59E0B', // Orange
      bg: '#0F0F0F', // Black
      glow: '#EF4444'
    }
  },
  {
    id: 'royal',
    name: 'Majestic',
    colors: {
      primary: '#A78BFA', // Purple
      secondary: '#F472B6', // Pink
      bg: '#1E1B4B', // Deep Indigo
      glow: '#A78BFA'
    }
  }
];

const ThemePanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('pharaoh');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;

    setActiveTheme(themeId);
    localStorage.setItem('app-theme', themeId);

    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-bg-dark', theme.colors.bg);
    root.style.setProperty('--color-glow', theme.colors.glow);
    
    // Trigger a custom event so other components (like Canvas) can update if needed
    window.dispatchEvent(new Event('themeChanged'));
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '100%' : (isVisible ? 0 : '150%') }}
        transition={{ duration: 0.3 }}
        className="fixed top-24 right-0 z-40 p-3 rounded-l-lg bg-pharaoh-dark border-y border-l border-pharaoh-gold shadow-[0_0_15px_rgba(0,0,0,0.5)] text-pharaoh-gold transition-colors duration-300"
      >
        <Palette size={24} className="animate-pulse" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-pharaoh-dark border-l border-gray-200 dark:border-pharaoh-gold/30 shadow-2xl z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  Theme <span className="text-pharaoh-gold">Settings</span>
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-bold">Select Color Palette</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => applyTheme(theme.id)}
                        className={`relative flex items-center p-3 rounded-xl border-2 transition-all duration-300 group overflow-hidden ${
                          activeTheme === theme.id 
                            ? 'border-pharaoh-gold bg-gray-100 dark:bg-white/5' 
                            : 'border-gray-200 dark:border-gray-800 hover:border-tech-cyan'
                        }`}
                      >
                        {/* Color Preview Circles */}
                        <div className="flex space-x-2 mr-4">
                          <div className="w-8 h-8 rounded-full shadow-sm" style={{ backgroundColor: theme.colors.primary }}></div>
                          <div className="w-8 h-8 rounded-full shadow-sm" style={{ backgroundColor: theme.colors.secondary }}></div>
                          <div className="w-8 h-8 rounded-full shadow-sm border border-gray-600" style={{ backgroundColor: theme.colors.bg }}></div>
                        </div>
                        
                        <span className="font-sans font-medium text-gray-800 dark:text-gray-200 flex-grow text-left">
                          {theme.name}
                        </span>

                        {activeTheme === theme.id && (
                          <div className="text-pharaoh-gold">
                            <Check size={20} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Theme applies to accents, backgrounds, and interactive elements.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemePanel;