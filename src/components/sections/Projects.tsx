import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { projects } from '../../data/portfolioData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const handleProjectClick = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };
  
  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle subtitle="A showcase of my projects and implementations in cybersecurity and AI.">
          Projects
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-dark-800 rounded-lg overflow-hidden transition-all duration-300 relative group ${
                activeProject === project.id ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block text-xs font-medium bg-primary-500/20 text-primary-300 px-2 py-1 rounded-full mb-2">
                      {project.period}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{project.organization}</p>
                
                <div className="mb-6">
                  <p className="text-gray-300 line-clamp-3">
                    {project.description[0]}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded-full">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex justify-between group-hover:border-primary-500/50"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <span>View Details</span>
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform ${activeProject === project.id ? 'rotate-90' : ''}`} 
                  />
                </Button>
              </div>
              
              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pt-4 border-t border-dark-700">
                      <h4 className="text-lg font-medium text-white mb-3">Project Details</h4>
                      <ul className="space-y-2 text-gray-300">
                        {project.description.map((desc, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-primary-500 mr-2">•</span>
                            <span className="text-sm">{desc}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {project.location && (
                        <p className="mt-4 text-sm text-gray-400">
                          <span className="font-medium">Location:</span> {project.location}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;