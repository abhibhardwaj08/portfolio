'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Cloud, Code, Layers, Rocket } from 'lucide-react'; // Added relevant icons

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
       const headerOffset = 80; // Adjust if header height changes
       const elementPosition = projectsSection.getBoundingClientRect().top;
       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
       id="hero"
       className="relative flex h-screen w-full items-center justify-center overflow-hidden hero-bg" // Use hero-bg class
      >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 hero-overlay" />

      <motion.div
        className="z-10 flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }} // Smoother ease
      >
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 drop-shadow-md" // Add subtle drop shadow
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          <span className="block">Abhi Bhardwaj</span>
          <motion.span
             className="block text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 font-medium" // Slightly lighter weight
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.6 }}
             >
             Cloud & Web Developer
          </motion.span>
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-muted-foreground md:text-xl lg:text-2xl mb-8 font-light drop-shadow-sm" // Add subtle drop shadow
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
         Aspiring <strong className="font-semibold text-foreground">Cloud Architect</strong> with a passion for <strong className="font-semibold text-foreground">Web Front-End Development</strong> and <strong className="font-semibold text-foreground">Decentralized Technologies</strong>. Building scalable systems for the future.
        </motion.p>

        {/* Icons representing interests */}
         <motion.div
           className="flex gap-4 mb-8 text-primary"
           initial="hidden"
           animate="visible"
           transition={{ delay: 0.6, staggerChildren: 0.1 }}
         >
            {[Cloud, Code, Layers, Rocket].map((Icon, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                 transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 5 }} // Add hover effect
              >
                <Icon className="h-6 w-6" />
              </motion.div>
             ))}
         </motion.div>

        <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.8, duration: 0.6 }} // Slightly later delay
        >
          <Button size="lg" onClick={scrollToProjects} className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-primary/40 active:scale-100">
            Explore My Projects
             <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" /> {/* Smoother transition */}
          </Button>
        </motion.div>
      </motion.div>
       {/* Subtle animated arrow at the bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer" // Add cursor-pointer
        onClick={scrollToProjects} // Make arrow clickable
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, y: 5 }} // Add hover effect
      >
        <ArrowDown className="h-5 w-5 text-foreground/60" /> {/* Slightly more visible */}
      </motion.div>
    </section>
  );
}
