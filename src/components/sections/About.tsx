import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Skills', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle subtitle="Get to know me better and what drives my passion for cybersecurity.">
          About Me
        </SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Cybersecurity Enthusiast & AI Specialist
            </h3>
            
            <div className="space-y-6 text-gray-300">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="leading-relaxed"
              >
                As a Master's student in Cybersecurity with a strong background in Computer Science specializing in Artificial Intelligence,
                I combine technical expertise with a passion for solving complex problems. My experience includes developing facial recognition systems,
                production planning optimization algorithms, and automation tools.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="leading-relaxed"
              >
                I'm driven by the challenge of creating secure, efficient solutions that leverage the power of AI and machine learning.
                My goal is to contribute to the cybersecurity field by developing innovative approaches to protect digital assets and infrastructure.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-800 p-6 rounded-lg text-center relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-dark-800 p-6 rounded-lg"
              >
                <p className="text-gray-400 text-sm mb-2">Location</p>
                <p className="text-white">{personalInfo.location}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-dark-800 p-6 rounded-lg"
              >
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;