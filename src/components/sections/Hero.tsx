import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';
import Scene from '../3d/Scene';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-conic from-secondary-500/5 via-accent-500/5 to-secondary-500/5 animate-spin-slow"></div>
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Scene />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text font-medium">
                Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent"
              style={{ 
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` 
              }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="text-primary-400">{personalInfo.tagline}</span>
            </motion.p>
            
            <motion.p 
              className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {personalInfo.about}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button 
                variant="primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
              >
                Contact Me
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary-500/30 hover:bg-primary-500/10"
              >
                View Projects
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start mt-8 space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full animate-pulse-slow"></div>
              <img
                src="/profile.jpg"
                alt="Mohamed Sabkari"
                className="rounded-full object-cover w-full h-full p-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="text-primary-500 animate-bounce" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;