
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code2, Terminal, Globe, Palette, Bot } from 'lucide-react';

const Skills: React.FC = () => {
  
  // Helper to map category names to icons with distinct styling
  const getIcon = (category: string) => {
    // Programming: Core coding & Scripting
    if (category.includes("Programming")) return <Terminal size={24} />;
    // Web & App Dev: Global reach & Internet
    if (category.includes("Web")) return <Globe size={24} />;
    // Design & Media: Artistic & Creative tools
    if (category.includes("Design")) return <Palette size={24} />;
    // Tech & Tools: AI, Bots & Automation
    if (category.includes("Tech")) return <Bot size={24} />;
    
    return <Code2 size={24} />;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-12 md:py-24 bg-gray-50 dark:bg-[#0f1115] transition-colors duration-300 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-tech-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-tech-cyan">Arsenal</span>
          </h2>
          <div className="w-24 h-1.5 bg-pharaoh-gold mx-auto rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated collection of tools and technologies I use to build digital solutions.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-pharaoh-dark border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(69,162,158,0.1)] hover:border-tech-cyan/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-tech-cyan group-hover:bg-tech-cyan group-hover:text-white transition-colors duration-300 shadow-inner">
                    {getIcon(skillGroup.category)}
                 </div>
                 <h3 className="text-xl font-display font-bold text-gray-800 dark:text-gray-100 group-hover:text-pharaoh-gold transition-colors">
                    {skillGroup.category}
                 </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-50 dark:bg-gray-900/60 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700/50 hover:border-tech-cyan hover:text-tech-cyan hover:shadow-[0_0_10px_rgba(69,162,158,0.2)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
