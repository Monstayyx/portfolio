import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: <Phone size={20} />,
      href: `tel:${personalInfo.phone}`,
      label: 'Phone'
    },
    {
      icon: <Linkedin size={20} />,
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com',
      label: 'GitHub'
    }
  ];
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <footer className="bg-dark-950 text-gray-400">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary-500">.</span>
            </h3>
            <p className="mb-4">
              Cybersecurity professional with expertise in AI and software development. Ready to help secure your digital assets and build innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">{personalInfo.location}</p>
              <p className="mb-2">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {personalInfo.phone}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 text-center">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;