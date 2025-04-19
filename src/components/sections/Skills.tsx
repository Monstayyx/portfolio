import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/portfolioData';
import SphereCanvas from '../3d/SphereCanvas';

const Skills = () => {
  // Group skills by category
  const skillCategories = {
    language: skills.filter(skill => skill.category === 'language'),
    framework: skills.filter(skill => skill.category === 'framework'),
    tool: skills.filter(skill => skill.category === 'tool'),
    software: skills.filter(skill => skill.category === 'software')
  };

  // Color mapping for different skill categories
  const categoryColors = {
    language: "#0ea5e9", // primary-500
    framework: "#06b6d4", // secondary-500
    tool: "#0284c7", // primary-600
    software: "#0891b2" // secondary-600
  };

  // Get random position for skill items in a circle
  const getRandomPosition = (index: number, total: number, radius: number = 1) => {
    const angle = (index / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return [x, y, 0] as [number, number, number];
  };

  return (
    <section id="skills" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle subtitle="A comprehensive list of my technical abilities and tools I work with.">
          Skills & Expertise
        </SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Technical Proficiency
            </h3>
            
            <p className="text-gray-300 mb-6">
              I've developed a diverse skill set across programming languages, frameworks, and tools that enable me to tackle complex cybersecurity and AI challenges. My expertise spans:
            </p>
            
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                categorySkills.length > 0 && (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-medium text-white mb-3 capitalize">
                      {category}s
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill) => (
                        <span 
                          key={skill.id}
                          className="px-4 py-2 bg-dark-800 text-gray-300 rounded-full hover:bg-primary-900 hover:text-white transition-colors duration-300"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-80 md:h-96 flex items-center justify-center"
          >
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
              {skills.slice(0, 9).map((skill, index) => (
                <div 
                  key={skill.id}
                  className="relative flex items-center justify-center"
                >
                  <SphereCanvas 
                    size="h-20 w-20" 
                    sphereProps={{
                      distort: 0.2 + (index % 3) * 0.1,
                      color: categoryColors[skill.category],
                      scale: 0.8 + (index % 3) * 0.2,
                      position: getRandomPosition(index, 9, 0.5)
                    }} 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-medium bg-dark-900/80 px-2 py-1 rounded">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;