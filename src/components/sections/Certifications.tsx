import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Code, Briefcase } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'JPMorgan Software Engineering Experience',
      issuer: 'JPMorgan Chase & Co.',
      type: 'Professional Experience',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      skills: ['Software Engineering', 'Financial Technology', 'System Design']
    },
    {
      title: 'TCS ESG Program',
      issuer: 'Tata Consultancy Services',
      type: 'Corporate Program',
      icon: Award,
      color: 'from-green-500 to-green-600',
      skills: ['Environmental', 'Social', 'Governance', 'Sustainability']
    },
    {
      title: 'Electronic Arts – Code Planning',
      issuer: 'Electronic Arts',
      type: 'Technical Certification',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      skills: ['Code Architecture', 'Game Development', 'Planning']
    },
    {
      title: 'Firebase Chat App',
      issuer: 'Flutter + Provider',
      type: 'Technical Project',
      icon: Star,
      color: 'from-orange-500 to-orange-600',
      skills: ['Flutter', 'Firebase', 'Real-time', 'Provider Pattern']
    },
    {
      title: 'GameGuru 3D Development',
      issuer: 'GameGuru Platform',
      type: 'Specialized Training',
      icon: Star,
      color: 'from-cyan-500 to-cyan-600',
      skills: ['3D Development', 'Game Design', 'Graphics Programming']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Certifications & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development milestones
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card 
                  key={index} 
                  className="card-hover glow-on-hover bg-card/50 backdrop-blur-sm group"
                >
                  <CardHeader className="text-center pb-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} p-3 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    {/* Type Badge */}
                    <Badge variant="outline" className="mb-2 mx-auto">
                      {cert.type}
                    </Badge>
                    
                    <CardTitle className="text-lg text-primary leading-tight">
                      {cert.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>
                  </CardHeader>

                  <CardContent>
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 justify-center">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Achievement Stats */}
          <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Professional Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  5+
                </div>
                <div className="text-muted-foreground">
                  Professional Certifications
                </div>
                <div className="text-sm text-muted-foreground">
                  Industry-recognized credentials
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  92%
                </div>
                <div className="text-muted-foreground">
                  Best Project Accuracy
                </div>
                <div className="text-sm text-muted-foreground">
                  Deepfake Audio Detection
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  25%
                </div>
                <div className="text-muted-foreground">
                  Performance Improvement
                </div>
                <div className="text-sm text-muted-foreground">
                  Data preprocessing optimization
                </div>
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 text-center">
            <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-3xl mx-auto">
              "Continuous learning and staying updated with the latest technologies 
              is not just a practice, but a passion that drives innovation and excellence."
            </blockquote>
            <cite className="text-primary font-medium mt-4 block">
              — Rajaveer Patil
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;