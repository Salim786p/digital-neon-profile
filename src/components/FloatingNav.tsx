import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, User, Code2, BookOpen, FileText, Mail, Menu, X } from 'lucide-react';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 100);
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#', id: 'hero' },
    { icon: User, label: 'About', href: '#about', id: 'about' },
    { icon: Code2, label: 'Skills', href: '#skills', id: 'skills' },
    { icon: Code2, label: 'Projects', href: '#projects', id: 'projects' },
    { icon: BookOpen, label: 'Blog', href: '#blog', id: 'blog' },
    { icon: FileText, label: 'Resume', href: '#resume', id: 'resume' },
    { icon: Mail, label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        className={`fixed top-4 right-4 z-50 md:hidden bg-card border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
          scrolled ? 'shadow-neon-primary' : ''
        }`}
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={16} /> : <Menu size={16} />}
      </Button>

      {/* Desktop Floating Navigation */}
      <nav className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block transition-all duration-300 ${
        scrolled ? 'opacity-100' : 'opacity-80'
      }`}>
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-lg p-2 shadow-neon-primary">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-300 group"
                onClick={() => scrollToSection(item.id)}
                title={item.label}
              >
                <item.icon size={16} className="group-hover:animate-glow-pulse" />
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="absolute top-16 right-4 bg-card border border-border rounded-lg p-4 shadow-neon-primary">
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-300"
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon size={16} className="mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default FloatingNav;