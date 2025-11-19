
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, Code, MessageCircle, ExternalLink, Globe, Lock } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  // Ensure unique filters
  const filters = Array.from(new Set(['All', 'Public', 'Private', 'Python', 'AI', 'Web', 'React', 'Telegram', 'Tools']));

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All') return true;
    return project.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-12 md:py-24 bg-white dark:bg-pharaoh-dark transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="w-full md:w-auto text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <div className="h-0.5 w-10 bg-tech-cyan"></div>
                <span className="text-tech-cyan font-display tracking-widest uppercase text-sm font-bold">My Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight">
              Project <span className="text-pharaoh-gold">Source Code</span>
            </h2>
          </div>
          <motion.a 
            href="https://github.com/kl0l69" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="hidden md:flex text-gray-500 dark:text-gray-400 hover:text-tech-cyan transition-colors items-center gap-2 mt-4 md:mt-0 group"
          >
            <span>Explore GitHub</span> 
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start items-center">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border flex items-center gap-2 ${
                        activeFilter === filter
                        ? 'bg-tech-cyan text-white border-tech-cyan shadow-[0_0_15px_var(--color-glow)] scale-105'
                        : 'bg-transparent text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-tech-cyan hover:text-tech-cyan hover:shadow-lg dark:hover:bg-white/5'
                    }`}
                >
                    {filter === 'Public' && <Globe size={14} />}
                    {filter === 'Private' && <Lock size={14} />}
                    {filter}
                </button>
            ))}
        </div>

        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => {
                const isPrivate = project.tags.includes("Private");
                // Sanitize title for "variable name" look
                const varName = project.title.replace(/[^a-zA-Z0-9]/g, '_');
                
                return (
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    key={project.id}
                    className="group relative flex flex-col bg-gray-50 dark:bg-[#12141a] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-tech-cyan/50 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_10px_40px_-10px_rgba(69,162,158,0.15)] transition-all duration-300"
                >
                    {/* Code Editor Header */}
                    <div className="h-48 w-full bg-[#1E1E1E] relative p-5 overflow-hidden font-mono text-xs md:text-sm leading-relaxed border-b border-gray-800">
                        {/* Window Controls */}
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors"/>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors"/>
                            <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors"/>
                        </div>

                        {/* Syntax Highlighted Code */}
                        <div className="relative z-10 font-bold">
                            <div>
                                <span className="text-[#C678DD]">const</span> <span className="text-[#E5C07B]">{varName}</span> <span className="text-[#56B6C2]">=</span> <span className="text-[#C678DD]">{'{'}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-[#E06C75]">id</span>: <span className="text-[#98C379]">"{project.id}"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-[#E06C75]">access</span>: <span className={isPrivate ? "text-[#E06C75]" : "text-[#98C379]"}>"{isPrivate ? 'PRIVATE' : 'PUBLIC'}"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-[#E06C75]">tags</span>: <span className="text-[#56B6C2]">[</span><span className="text-[#D19A66]">"{project.tags[1] || 'Dev'}"</span><span className="text-[#56B6C2]">]</span>
                            </div>
                            <div>
                                <span className="text-[#C678DD]">{'}'}</span>;
                            </div>
                        </div>

                        {/* Matrix/Binary Background Decor */}
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-[10px] leading-3 text-tech-cyan select-none pointer-events-none text-right font-mono">
                            10110<br/>01001<br/>11010
                        </div>
                        
                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow relative">
                        {/* Overlay Gradient for darker feel in light mode */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-[#12141a] dark:to-[#0f1115] opacity-50 pointer-events-none"></div>
                        
                        <div className="relative z-10 mb-4 flex-grow">
                            <h3 className="text-xl font-display font-bold text-gray-800 dark:text-white mb-2 group-hover:text-tech-cyan transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3" dir="auto">
                                {project.description}
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-2 mb-6 mt-auto">
                            {project.tags.filter(t => t !== "Public" && t !== "Private").slice(0, 3).map(tag => (
                            <span key={tag} className="text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-2 py-1 rounded group-hover:border-tech-cyan/30 transition-colors">
                                .{tag.toLowerCase()}()
                            </span>
                            ))}
                        </div>

                        <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-gray-200 dark:border-gray-800/50">
                            <a 
                                href={project.githubUrl || "https://github.com/kl0l69"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-bold hover:border-tech-cyan hover:text-tech-cyan hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
                            >
                                <Code size={16} />
                                <span>Source</span>
                            </a>
                            <a 
                                href="https://wa.me/201141345223"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-pharaoh-gold text-pharaoh-dark text-sm font-bold hover:brightness-110 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all"
                            >
                                <MessageCircle size={16} />
                                <span>Deploy</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
                );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <motion.a 
            href="https://github.com/kl0l69?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-display font-bold rounded-xl hover:border-pharaoh-gold hover:text-pharaoh-gold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-pharaoh-gold/20"
          >
            git checkout --all
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;