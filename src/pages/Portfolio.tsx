import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink,
  Code2,
  Database,
  Globe,
  Brain,
  Terminal,
  Cpu,
  Monitor,
  Smartphone,
  FileText,
  BookOpen,
  Zap,
  Star
} from 'lucide-react';
import FloatingNav from '@/components/FloatingNav';
import { useToast } from '@/hooks/use-toast';
import cyberpunkAvatar from '@/assets/cyberpunk-avatar.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Portfolio = () => {
  const { toast } = useToast();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'Turning Logic into Code',
    'Problem Solver',
    'Tech Explorer',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, phrases]);

  const skills = [
    { name: 'C/C++', icon: Code2, category: 'Programming' },
    { name: 'Python', icon: Terminal, category: 'Programming' },
    { name: 'JavaScript', icon: Globe, category: 'Programming' },
    { name: 'MySQL', icon: Database, category: 'Database' },
    { name: 'React', icon: Monitor, category: 'Framework' },
    { name: 'NumPy', icon: Brain, category: 'Library' },
    { name: 'Pandas', icon: FileText, category: 'Library' },
    { name: 'HTML/CSS', icon: Smartphone, category: 'Web' }
  ];

  const projects = [
    {
      title: 'Library Management System',
      description: 'A comprehensive library management system built with modern web technologies featuring book tracking, user management, and automated notifications.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'MySQL'],
      github: 'https://github.com/Salim786p',
      preview: 'Coming Soon'
    }
  ];

  const blogPosts = [
    {
      title: 'The Evolution of Modern Web Development',
      excerpt: 'Exploring how web development has transformed with new technologies and frameworks...',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      title: 'Database Optimization Techniques',
      excerpt: 'Advanced strategies for optimizing database performance in large-scale applications...',
      date: '2024-01-10',
      readTime: '8 min read'
    },
    {
      title: 'React Best Practices in 2024',
      excerpt: 'Latest patterns and practices for building scalable React applications...',
      date: '2024-01-05',
      readTime: '6 min read'
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: `${type} has been copied to your clipboard.`,
        duration: 2000,
      });
    }).catch(() => {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard. Please try again.",
        variant: "destructive",
        duration: 2000,
      });
    });
  };

  const downloadResume = () => {
    // In a real implementation, this would download an actual PDF
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background font-rajdhani">
      <FloatingNav />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-neon-primary animate-glow-pulse">
              <img 
                src={cyberpunkAvatar} 
                alt="Salim Akhter Ansari" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-primary animate-slide-up">
            Salim Akhter Ansari
          </h1>
          
          <h2 className="font-orbitron text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-secondary animate-slide-up animation-delay-200">
            Software Developer
          </h2>
          
          <div className="h-16 mb-8">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-medium">
              <span className="text-accent">{currentText}</span>
              <span className="border-r-2 border-primary animate-blink">|</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up animation-delay-400">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-neon-primary transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-neon-secondary transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code2 className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 text-primary/30 animate-float">
          <Cpu size={60} />
        </div>
        <div className="absolute bottom-20 right-20 text-secondary/30 animate-float animation-delay-1000">
          <Terminal size={50} />
        </div>
        <div className="absolute top-1/2 left-10 text-accent/30 animate-float animation-delay-500">
          <Code2 size={40} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I am a passionate <span className="text-primary">Software Developer</span> with a strong foundation in multiple programming languages and modern web technologies. My journey in tech began with a curiosity for problem-solving and has evolved into a deep passion for creating efficient, scalable solutions.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                With expertise in <span className="text-secondary">C++, Python, and JavaScript</span>, I enjoy building everything from system-level applications to modern web interfaces. I'm constantly exploring new technologies and methodologies to stay at the forefront of software development.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or experimenting with emerging technologies in the ever-evolving world of software development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.slice(0, 4).map((skill, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-neon-primary group">
                  <CardContent className="p-4 text-center">
                    <skill.icon className="h-8 w-8 mx-auto mb-2 text-primary group-hover:text-primary-glow transition-colors" />
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-neon-primary group cursor-pointer transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-all duration-300 group-hover:animate-glow-pulse" />
                  <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-neon-primary group overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-primary flex items-center justify-center">
                    <Monitor className="h-16 w-16 text-primary-foreground" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-orbitron text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-secondary/50 text-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        disabled
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.preview}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Tech Insights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:border-secondary transition-all duration-300 hover:shadow-neon-secondary group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-5 w-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-orbitron text-lg font-semibold mb-3 text-foreground group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary-glow">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-primary">
            Resume
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border hover:border-highlight transition-all duration-300 hover:shadow-neon-highlight">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-highlight" />
                  <h3 className="font-orbitron text-lg font-semibold text-foreground">Experience</h3>
                </div>
                <p className="text-muted-foreground">
                  Passionate developer with hands-on experience in multiple programming languages and frameworks. Focused on writing clean, efficient code and solving complex problems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-neon-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-accent" />
                  <h3 className="font-orbitron text-lg font-semibold text-foreground">Strengths</h3>
                </div>
                <p className="text-muted-foreground">
                  Strong analytical thinking, problem-solving abilities, and continuous learning mindset. Experienced in both frontend and backend development.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-highlight border-0 text-highlight-foreground hover:shadow-neon-highlight font-semibold text-lg px-8 py-3"
            onClick={downloadResume}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-primary">
            Get In Touch
          </h2>
          
          <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-neon-primary group cursor-pointer"
              onClick={() => copyToClipboard('ansarisalim786p@gmail.com', 'Email')}
            >
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-primary group-hover:text-primary-glow transition-colors" />
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-medium">ansarisalim786p@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card 
              className="bg-card border-border hover:border-secondary transition-all duration-300 hover:shadow-neon-secondary group cursor-pointer"
              onClick={() => copyToClipboard('9555490442', 'Phone number')}
            >
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-secondary group-hover:text-secondary-glow transition-colors" />
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground font-medium">9555490442</p>
              </CardContent>
            </Card>
            
            <Card 
              className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-neon-accent group cursor-pointer"
              onClick={() => window.open('https://www.linkedin.com/in/salim-ansari-83b381237', '_blank')}
            >
              <CardContent className="p-6 text-center">
                <Linkedin className="h-8 w-8 mx-auto mb-3 text-accent group-hover:text-accent-glow transition-colors" />
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-foreground font-medium">Connect</p>
              </CardContent>
            </Card>
            
            <Card 
              className="bg-card border-border hover:border-highlight transition-all duration-300 hover:shadow-neon-highlight group cursor-pointer"
              onClick={() => window.open('https://github.com/Salim786p', '_blank')}
            >
              <CardContent className="p-6 text-center">
                <Github className="h-8 w-8 mx-auto mb-3 text-highlight group-hover:text-highlight-glow transition-colors" />
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <p className="text-foreground font-medium">Follow</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-orbitron text-lg font-semibold mb-2 text-primary">
            Salim Akhter Ansari
          </p>
          <p className="text-muted-foreground">
            Built with ❤️ and a love for code
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;