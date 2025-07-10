import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const education = [
    {
      degree: 'B.E. AI & Data Science',
      institution: 'ADYPSOE, Pune',
      period: '2021–2025',
      score: 'CGPA: 7.35 / 10'
    },
    {
      degree: '12th Grade',
      institution: 'Higher Secondary',
      period: '2021',
      score: '89%'
    },
    {
      degree: '10th Grade',
      institution: 'Secondary School',
      period: '2019',
      score: '84%'
    }
  ];

  const techIcons = [
    'Flutter', 'Python', 'AI/ML', 'React', 'Firebase', 'AWS'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with expertise in modern technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="space-y-6">
              {/* Profile Image Placeholder */}
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dtjjgiitl/image/upload/q_auto:good,f_auto,fl_progressive/v1752093310/tiiormgyj4triiplcpgq.jpg" 
                    alt="Rajaveer Patil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div> 

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {techIcons.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="glow-on-hover"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Bio & Education */}
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  My Story
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Experienced developer with a strong foundation in Artificial Intelligence and Data Science. 
                  Skilled in Flutter, Python, and modern web technologies. Successfully led a ₹6L project 
                  and contributed to high-performing ML apps and UI solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  I'm passionate about creating innovative solutions that solve real-world problems, 
                  with a focus on user experience and cutting-edge technology.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">
                            {edu.degree}
                          </h4>
                          <Badge variant="outline">{edu.score}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-primary text-sm font-medium">
                          {edu.period}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;