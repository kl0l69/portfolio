
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Loader2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSent) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      // Reset success message after 3 seconds
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white dark:bg-pharaoh-dark relative border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          
          {/* Left: Info & Socials */}
          <div>
            <div className="mb-8 md:mb-10">
               <h2 className="text-tech-cyan font-display font-medium tracking-widest mb-2">GET IN TOUCH</h2>
               <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Let's <span className="text-pharaoh-gold">Create</span> Something Legendary.</h1>
               <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
                 Have a project in mind? Whether it's AI, Web Development, or Graphic Design, I'm ready to bring your vision to life.
               </p>
            </div>

            <motion.div 
              className="space-y-3 md:space-y-4 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-50px" }}
            >
              {SOCIAL_LINKS.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-3 md:p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-tech-cyan/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group shadow-sm dark:shadow-none cursor-pointer"
                >
                  <motion.div 
                    className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full text-tech-cyan group-hover:text-pharaoh-gold group-hover:bg-gray-800 dark:group-hover:bg-black transition-colors relative overflow-hidden"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <link.icon size={20} className="relative z-10" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white text-sm md:text-base">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: false, margin: "-50px" }}
             className="bg-gray-50 dark:bg-[#0f1115] p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  required
                  disabled={isSubmitting || isSent}
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-tech-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-colors peer text-sm md:text-base"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-tech-cyan peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  required
                  disabled={isSubmitting || isSent}
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-tech-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-colors peer text-sm md:text-base"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-tech-cyan peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                  Your Email
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  required
                  rows={4}
                  disabled={isSubmitting || isSent}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-tech-cyan disabled:opacity-50 disabled:cursor-not-allowed transition-colors peer resize-none text-sm md:text-base"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-tech-cyan peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs">
                  Your Message
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSent}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-tech-cyan to-teal-700 text-white font-bold rounded hover:shadow-[0_0_20px_rgba(69,162,158,0.5)] transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : isSent ? (
                  <>
                    <span className="text-white">Message Sent!</span>
                    <Check size={18} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
