import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Scene3D } from '@/components/3d/Scene3D';
import { ProjectCard3D } from '@/components/3d/ProjectCard3D';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'web', label: 'Web' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Deepfake Audio Detection',
      description: '92% LSTM accuracy, Flask backend for real-time audio analysis',
      category: 'ai-ml',
      tags: ['Python', 'LSTM', 'Flask', 'TensorFlow'],
      image: '🎵',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Amazon Recommender',
      description: 'Collaborative filtering system serving 10K+ users',
      category: 'ai-ml',
      tags: ['Python', 'Machine Learning', 'Collaborative Filtering'],
      image: '🛒',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Malware Detection App',
      description: '94% precision ML model with Flask integration',
      category: 'ai-ml',
      tags: ['Python', 'Flask', 'Machine Learning', 'Security'],
      image: '🛡️',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Client Flutter App',
      description: '₹6L contract project with team leadership',
      category: 'mobile',
      tags: ['Flutter', 'Dart', 'Firebase', 'Team Lead'],
      image: '📱',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Expense Tracker',
      description: 'Offline support with native Android features',
      category: 'mobile',
      tags: ['Android', 'SQLite', 'Java'],
      image: '💰',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Fully responsive with contact integration',
      category: 'web',
      tags: ['React', 'TypeScript', 'Tailwind'],
      image: '🌐',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Spotify Clone',
      description: 'Music API UI with player simulation',
      category: 'web',
      tags: ['React', 'API Integration', 'UI/UX'],
      image: '🎶',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 8,
      title: 'RAAJ AI',
      description: 'GPT-style chatbot for intelligent suggestions',
      category: 'ai-ml',
      tags: ['Python', 'NLP', 'AI', 'Chatbot'],
      image: '🤖',
      github: '#',
      demo: '#',
      featured: true
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions and technical expertise
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-gradient-primary" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* 3D Projects Showcase */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              3D Project Explorer
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Interact with projects in 3D space • Click cards for details • Drag to explore
            </p>
            <div className="h-96 rounded-lg bg-gradient-to-br from-background to-muted border">
              <Scene3D cameraPosition={[0, 0, 8]} enableControls={true}>
                {filteredProjects.slice(0, 6).map((project, index) => {
                  const positions: [number, number, number][] = [
                    [-3, 1, 0], [0, 1, 0], [3, 1, 0],
                    [-3, -1.5, 0], [0, -1.5, 0], [3, -1.5, 0]
                  ];
                  const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
                  
                  return (
                    <ProjectCard3D
                      key={project.id}
                      position={positions[index] || [0, 0, 0]}
                      title={project.title}
                      description={project.description}
                      technologies={project.tags}
                      color={colors[index] || '#6366f1'}
                    />
                  );
                })}
              </Scene3D>
            </div>
          </div>

          {/* Traditional Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`card-hover glow-on-hover bg-card/50 backdrop-blur-sm group ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  {/* Project Image/Icon */}
                  <div className="w-full h-32 bg-gradient-secondary rounded-lg flex items-center justify-center text-4xl mb-4 group-hover:scale-105 transition-transform">
                    {project.image}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-gradient-primary">
                      Featured
                    </Badge>
                  )}

                  <CardTitle className="text-xl text-primary">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="glow-on-hover"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              Visit My GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;