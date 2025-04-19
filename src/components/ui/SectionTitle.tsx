import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

const SectionTitle = ({ children, className = '', subtitle }: SectionTitleProps) => {
  return (
    <motion.div 
      className={`mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {children}
        <span className="text-primary-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-2 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-primary-500 mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;