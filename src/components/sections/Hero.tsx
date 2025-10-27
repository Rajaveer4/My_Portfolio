import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, File } from 'lucide-react';
import { Scene3D } from '@/components/3d/Scene3D';
import { FloatingGeometry } from '@/components/3d/FloatingGeometry';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'I design.',
    'I build.',
    'I ship.',
    'I innovate.'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, phrases]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Placeholder for resume download
    console.log('Download resume functionality to be implemented');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      
      {/* 3D Background Scene */}
      <div className="absolute inset-0 opacity-40">
        <Scene3D cameraPosition={[0, 0, 8]} enableControls={false}>
          <FloatingGeometry position={[-3, 2, -2]} color="#6366f1" shape="sphere" />
          <FloatingGeometry position={[3, -1, -1]} color="#8b5cf6" shape="torus" />
          <FloatingGeometry position={[-2, -2, -3]} color="#06b6d4" shape="cone" />
          <FloatingGeometry position={[2, 2, -2]} color="#10b981" shape="box" />
          <FloatingGeometry position={[0, -3, -4]} color="#f59e0b" shape="sphere" />
          <FloatingGeometry position={[-4, 0, -1]} color="#ef4444" shape="torus" />
        </Scene3D>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image - New Addition */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-full bg-gradient-primary p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/profile-image.jpg" 
                  alt="Rajaveer Patil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* Greeting */}
            <p className="text-lg text-muted-foreground mb-4 animate-fade-in">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-scale-in">
              Rajaveer Patil
            </h1>

            {/* Role */}
            <div className="text-xl md:text-2xl lg:text-3xl text-foreground mb-8">
              <span>Developer | Problem Solver | Innovator</span>
            </div>

            {/* Typewriter effect */}
            <div className="text-lg md:text-xl text-primary mb-12 h-8">
              <span className="typewriter font-mono">{currentText}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
              <Button
                onClick={downloadResume}
                className="glow-on-hover bg-gradient-primary text-primary-foreground hover:opacity-90"
                size="lg"
              >
                <File className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="glow-on-hover"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com"
                target="https://github.com/Rajaveer4"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors glow-on-hover"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="https://www.linkedin.com/in/rajaveer-patil-576993338"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors glow-on-hover"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:rajveer.patil.rr@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors glow-on-hover"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
