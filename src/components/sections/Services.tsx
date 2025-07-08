import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: '20+ Figma screens, Postman API integration',
      features: [
        'Modern, responsive designs',
        'User-centered approach',
        'Prototyping & wireframing',
        'API integration planning'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Portfolio websites, restaurant booking sites, responsive layouts',
      features: [
        'React & modern frameworks',
        'Responsive design',
        'Performance optimization',
        'SEO best practices'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'App Development',
      description: 'AI chatbot (RAAJ AI), ₹6L Flutter app, Spotify clone',
      features: [
        'Cross-platform development',
        'Native performance',
        'AI integration',
        'Complex app architecture'
      ],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-hover glow-on-hover bg-card/50 backdrop-blur-sm group"
              >
                <CardHeader className="text-center">
                  {/* Service Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary p-3 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-primary mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    onClick={scrollToContact}
                    className="w-full mt-6 bg-gradient-primary hover:opacity-90"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to create something amazing. From concept to deployment, 
                I'll help you build solutions that make a difference.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="glow-on-hover bg-gradient-primary hover:opacity-90"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;