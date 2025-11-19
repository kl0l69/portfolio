
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white dark:bg-pharaoh-dark relative transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Image */}
          <div className="relative group max-w-sm mx-auto md:max-w-none w-full">
            <div className="absolute inset-0 bg-tech-cyan transform translate-x-2 translate-y-2 rounded-xl transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-300"></div>
            <div className="relative rounded-xl overflow-hidden border-2 border-pharaoh-gold/50">
              <img 
                src={PERSONAL_INFO.image} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <div className="h-0.5 w-10 bg-pharaoh-gold"></div>
               <h2 className="text-tech-cyan font-display tracking-widest uppercase">About Me</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Crafting Digital Experiences with <span className="text-pharaoh-gold">Precision</span> & <span className="text-tech-cyan">Passion</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-sans">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8">
               <div className="p-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:border-tech-cyan/50 transition-colors shadow-sm dark:shadow-none">
                  <h4 className="text-pharaoh-gold font-bold text-lg md:text-xl mb-1">2+ Years</h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Experience</p>
               </div>
               <div className="p-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:border-tech-cyan/50 transition-colors shadow-sm dark:shadow-none">
                  <h4 className="text-pharaoh-gold font-bold text-lg md:text-xl mb-1">20+</h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
               </div>
               <div className="p-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:border-tech-cyan/50 transition-colors shadow-sm dark:shadow-none">
                  <h4 className="text-pharaoh-gold font-bold text-lg md:text-xl mb-1">IT Student</h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Academic Excellence</p>
               </div>
               <div className="p-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 rounded-lg hover:border-tech-cyan/50 transition-colors shadow-sm dark:shadow-none">
                  <h4 className="text-pharaoh-gold font-bold text-lg md:text-xl mb-1">Freelancer</h4>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Global Clients</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
