import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Rajaveer4',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/rajaveer-patil-576993338',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:rajveer.patil.rr@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Rajaveer Patil
            </button>
            <p className="text-muted-foreground text-sm mt-1">
              Developer • Problem Solver • Innovator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors glow-on-hover"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Rajaveer Patil. Made with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            and lots of code.
          </p>
          <p className="mt-2 text-xs">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;