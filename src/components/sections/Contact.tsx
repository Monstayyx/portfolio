import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../data/portfolioData';
import FloatingGrid from '../3d/FloatingGrid';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" />,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone className="text-primary-500" />,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin className="text-primary-500" />,
      label: 'Location',
      value: personalInfo.location
    },
    {
      icon: <Linkedin className="text-primary-500" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.linkedin
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <FloatingGrid />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle subtitle="Interested in working together? Let's connect!">
          Get In Touch
        </SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Feel free to reach out if you're looking for a cybersecurity specialist, 
              have a question, or just want to connect. I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-800 p-6 rounded-lg flex items-start gap-4 group hover:bg-dark-700/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center group-hover:bg-dark-600 transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white hover:text-primary-400 transition-colors duration-300 font-medium"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;