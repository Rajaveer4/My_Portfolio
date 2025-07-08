import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: 'SevenMentors',
      role: 'Data Science Intern',
      period: 'Jan 2024 – Jun 2024',
      type: 'Internship',
      achievements: [
        'Built advanced data pipelines reducing preprocessing time by 25%',
        'Developed production-ready machine learning applications',
        'Collaborated with cross-functional teams on data-driven solutions',
        'Implemented automated data validation and quality checks'
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'SQL'],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      company: 'TechnoHack',
      role: 'Tech Intern',
      period: 'Dec 2023 – Jan 2024',
      type: 'Internship',
      achievements: [
        'Validated and optimized ML pipeline performance',
        'Deployed user interface improvements increasing user engagement',
        'Enhanced system performance through code optimization',
        'Participated in agile development processes'
      ],
      technologies: ['Machine Learning', 'UI/UX', 'Performance Optimization'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      company: 'Freelance',
      role: 'App & Web Developer',
      period: 'Ongoing',
      type: 'Freelance',
      achievements: [
        'Maintained 100% project delivery rate across all client engagements',
        'Reduced client churn by 15% through exceptional service delivery',
        'Led development of ₹6L Flutter application project',
        'Built responsive web applications for various industries'
      ],
      technologies: ['Flutter', 'React', 'Firebase', 'Node.js', 'MongoDB'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey and key accomplishments
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 shadow-glow"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="card-hover glow-on-hover bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <Badge 
                            variant="outline" 
                            className={`bg-gradient-to-r ${exp.gradient} text-white border-0`}
                          >
                            {exp.type}
                          </Badge>
                          <Badge variant="secondary">
                            {exp.period}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-4">
                          {exp.company}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '6+', label: 'Months Experience' },
              { number: '₹6L+', label: 'Project Value' },
              { number: '15%', label: 'Churn Reduction' },
              { number: '100%', label: 'Delivery Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;