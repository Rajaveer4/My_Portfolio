import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['Python', 'Dart', 'Java', 'C++', 'SQL', 'JavaScript']
    },
    {
      title: 'Frameworks',
      icon: '🚀',
      skills: ['Flutter', 'Flask', 'React', 'TensorFlow']
    },
    {
      title: 'Design & Dev Tools',
      icon: '🎨',
      skills: ['Figma', 'Postman', 'Power BI']
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Firebase', 'Git', 'GCP']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'SQLite']
    },
    {
      title: 'AI & ML',
      icon: '🤖',
      skills: ['Machine Learning', 'Deep Learning', 'Data Science', 'Computer Vision']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="card-hover glow-on-hover bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Frontend Development', level: 90 },
                { name: 'Backend Development', level: 85 },
                { name: 'Mobile Development', level: 88 },
                { name: 'AI/ML', level: 82 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
