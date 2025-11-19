import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black py-8 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
         <div className="flex justify-center mb-4">
             {/* Small Cobra Icon */}
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 90 C40 80 30 70 20 60 C10 45 10 25 25 15 C40 5 60 5 75 15 C90 25 90 45 80 60 C70 70 60 80 50 90 Z M50 20 C45 20 40 25 40 30 C40 35 45 40 50 40 C55 40 60 35 60 30 C60 25 55 20 50 20 Z" />
            </svg>
         </div>
        <p className="text-gray-600 dark:text-gray-500 flex items-center justify-center gap-2 text-sm">
          © {new Date().getFullYear()} Mohamed Arsinek. Made with <Heart size={14} className="text-red-500 fill-red-500" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;