
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-50 dark:bg-[#0f1115] relative overflow-hidden transition-colors duration-300">
      {/* Decorative BG Element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-tech-cyan/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
            My <span className="text-pharaoh-gold">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto pl-2 md:pl-0">
          {/* Center Line */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-800 transform md:-translate-x-1/2"></div>

          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-8 md:mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot on line */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-pharaoh-gold rounded-full transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 shadow-[0_0_10px_var(--color-primary)]"></div>

              {/* Content Spacer */}
              <div className="md:w-1/2"></div>

              {/* Card */}
              <div className={`md:w-1/2 pl-10 ${index % 2 === 0 ? 'md:pr-12 md:pl-0' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-pharaoh-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-pharaoh-gold/50 transition-all duration-300 relative group">
                   {/* Corner Accent */}
                   <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   
                   <div className="flex items-center gap-2 text-tech-cyan mb-2 text-sm font-bold">
                      <Calendar size={14} />
                      {exp.period}
                   </div>
                   <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                   <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <Briefcase size={14} />
                      {exp.company}
                   </div>
                   <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;