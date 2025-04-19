import { motion } from 'framer-motion';
import { BriefcaseIcon, GraduationCap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { experiences, education } from '../../data/portfolioData';

const TimelineItem = ({ 
  date, 
  title, 
  organization, 
  location, 
  description, 
  icon: Icon,
  isLast = false
}: { 
  date: string; 
  title: string; 
  organization: string; 
  location: string; 
  description: string[];
  icon: React.ElementType;
  isLast?: boolean;
}) => {
  return (
    <div className="relative pl-8 pb-12">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-3 top-0 bottom-0 w-px bg-dark-700"></div>
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center">
        <Icon size={14} className="text-white" />
      </div>
      
      <div>
        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-dark-800 text-primary-400 rounded">
          {date}
        </span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">
          {organization} | {location}
        </p>
        
        <ul className="mt-4 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-300 text-sm">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark-950">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle subtitle="My professional journey and educational background.">
          Experience & Education
        </SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <BriefcaseIcon size={24} className="text-primary-500 mr-2" />
              Work Experience
            </h3>
            
            <div className="relative">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  date={exp.period}
                  title={exp.title}
                  organization={exp.organization}
                  location={exp.location}
                  description={exp.description}
                  icon={BriefcaseIcon}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <GraduationCap size={24} className="text-primary-500 mr-2" />
              Education
            </h3>
            
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  date={edu.graduationDate || 'Completed'}
                  title={edu.degree}
                  organization={edu.institution}
                  location={edu.location}
                  description={[]}
                  icon={GraduationCap}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;