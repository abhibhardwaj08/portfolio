'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Home as HomeIcon, Briefcase, Mail, GraduationCap, Award, Sparkles, Menu, X } from 'lucide-react'; // Added Menu/X for mobile

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Scroll detection for header background
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   // Active section highlighting
   React.useEffect(() => {
     const sections = ['hero', 'projects', 'skills', 'education', 'certifications', 'contact'];
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setActiveSection(entry.target.id);
           }
         });
       },
       { rootMargin: "-40% 0px -60% 0px" } // Adjust rootMargin to trigger highlight closer to the middle of the viewport
     );

     sections.forEach((id) => {
       const element = document.getElementById(id);
       if (element) {
         observer.observe(element);
       }
     });

     return () => {
       sections.forEach((id) => {
         const element = document.getElementById(id);
         if (element) {
           observer.unobserve(element);
         }
       });
     };
   }, []);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70; // Adjusted slightly
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
       });
       setMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  const navItems = [
     { id: 'hero', label: 'Home', icon: HomeIcon },
     { id: 'projects', label: 'Projects', icon: Briefcase },
     { id: 'skills', label: 'Skills', icon: Code },
     { id: 'education', label: 'Education', icon: GraduationCap },
     { id: 'certifications', label: 'Certs', icon: Award },
     // { id: 'interests', label: 'Interests', icon: Sparkles }, // Uncomment if needed
     { id: 'contact', label: 'Contact', icon: Mail, isButton: true },
   ];


  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-background/95 backdrop-blur-lg shadow-md border-b border-border/50' : 'bg-transparent' // Adjusted styling
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18 }} // Adjusted spring physics
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 relative"> {/* Added relative positioning */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity duration-300">
          {/* <Code className="h-6 w-6" /> */}
          <span>Abhi Bhardwaj</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
           {navItems.map((item) => (
             item.isButton ? (
                <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variant={activeSection === item.id ? "default" : "outline"} // Use default variant for active contact button
                    className={`ml-2 border-primary text-primary hover:bg-primary/10 hover:text-primary ${activeSection === item.id ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary/10'}`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                    >
                    <item.icon className="mr-2 h-4 w-4" /> {item.label}
                </Button>
             ) : (
                <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`text-foreground hover:text-primary hover:bg-primary/10 relative ${activeSection === item.id ? 'text-primary font-medium' : ''}`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                >
                    <item.icon className="mr-1.5 h-4 w-4" /> {item.label}
                    {activeSection === item.id && (
                      <motion.div
                          layoutId="active-nav-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                     )}
                </Button>
             )
           ))}
        </div>

         {/* Mobile Navigation Trigger */}
         <div className="md:hidden">
            <Button
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               variant="ghost"
               size="icon"
               className="text-foreground hover:bg-primary/10"
               aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
             >
               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
         </div>

        {/* Mobile Navigation Menu */}
         <motion.div
          className={`absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-b border-border/50 shadow-md md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
             <div className="container mx-auto flex flex-col items-start p-4 gap-2">
               {navItems.map((item) => (
                  <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full justify-start text-lg py-3 ${activeSection === item.id ? 'text-primary font-semibold bg-primary/5' : 'text-foreground'}`}
                       aria-current={activeSection === item.id ? "page" : undefined}
                  >
                      <item.icon className="mr-3 h-5 w-5" /> {item.label}
                  </Button>
               ))}
             </div>
         </motion.div>
      </nav>
    </motion.header>
  );
}
