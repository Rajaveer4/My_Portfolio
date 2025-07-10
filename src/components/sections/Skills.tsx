import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scene3D } from '@/components/3d/Scene3D';
import { InteractiveSkillSphere } from '@/components/3d/InteractiveSkillSphere';

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

          {/* 3D Interactive Skills Visualization */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Interactive Skills Universe
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Click and drag to explore • Hover over spheres to see animations • Click spheres to see proficiency
            </p>
            <div className="h-96 rounded-lg bg-gradient-to-br from-background to-muted border">
              <Scene3D cameraPosition={[0, 0, 6]} enableControls={true}>
                <InteractiveSkillSphere 
                  position={[-2, 1, 0]} 
                  skill="Frontend Dev" 
                  color="#61dafb" 
                  proficiency={0.9} 
                />
                <InteractiveSkillSphere 
                  position={[2, 1, 0]} 
                  skill="Backend Dev" 
                  color="#68d391" 
                  proficiency={0.85} 
                />
                <InteractiveSkillSphere 
                  position={[0, -1, 1]} 
                  skill="Mobile Dev" 
                  color="#4299e1" 
                  proficiency={0.88} 
                />
                <InteractiveSkillSphere 
                  position={[-1.5, -1, -1]} 
                  skill="AI/ML" 
                  color="#ed8936" 
                  proficiency={0.82} 
                />
                <InteractiveSkillSphere 
                  position={[1.5, 0, -1]} 
                  skill="Cloud" 
                  color="#9f7aea" 
                  proficiency={0.78} 
                />
                <InteractiveSkillSphere 
                  position={[0, 2, -0.5]} 
                  skill="DevOps" 
                  color="#f56565" 
                  proficiency={0.75} 
                />
              </Scene3D>
            </div>
          </div>

          {/* Traditional Technical Proficiency */}
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