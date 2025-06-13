
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Cpu, Database, Palette, Leaf, SatelliteDish, Calculator, MoreHorizontal } from 'lucide-react'; // Added MoreHorizontal

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // Keep optional
  icon?: React.ElementType;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: string;
  // Add a brief summary for hover/modal later if needed
  summary?: string;
  imageHint?: string;
}

// Seed values for Picsum photos to ensure somewhat consistent (but still random) images
const imageSeeds = [
  'blockchain', 'space', 'agriculture', 'industrial', 'webdev', 'hackathon'
];


const projectsData: Project[] = [
 {
    id: 'divitanet',
    title: 'DIVITANET (ETHSF Hackathon 2025)',
    description: 'Decentralized file sharing with expiry logic and optional crypto micro-payments. Peer-to-peer storage using IPFS/Filecoin.',
    imageUrl: `https://placehold.co/600x400.png`,
    imageHint: 'divitanet logo',
    icon: Cpu,
    tags: ['Decentralized', 'Ethereum', 'IPFS', 'Filecoin', 'Next.js', 'Hackathon'],
    repoUrl: 'https://github.com/abhibhardwaj08/DivitaNet',
    category: 'Decentralized Tech',
    summary: 'Solo hackathon project exploring decentralized file storage and payments.',
  },
  {
    id: 'iss-cargo-optimizer',
    title: 'ISS Cargo Optimizer',
    description: 'Automated cargo planning & waste return system for the ISS. Features optimal placement and rearrangement logic. Presented at IIT Delhi.',
    imageUrl: `https://placehold.co/600x400.png`,
    imageHint: 'space station',
    icon: SatelliteDish,
    tags: ['React', 'API', 'Docker', 'ML', 'Optimization', 'Space Tech', 'UI/UX'],
    repoUrl: 'https://github.com/AbhiBhardwaj1/ISS-Cargo-Optimizer',
    category: 'Web & AI',
    summary: 'An ML-driven tool to optimize logistics for the International Space Station.',
  },
   {
    id: 'smart-agriculture',
    title: 'Smart Agriculture System',
    description: 'Real-time crop monitoring and automation using IoT sensors, cloud dashboard, and NodeMCU.',
    imageUrl: `https://placehold.co/600x400.png`,
    imageHint: 'smart farm',
    icon: Leaf,
    tags: ['IoT', 'Cloud', 'NodeMCU', 'Sensors', 'Automation'],
    repoUrl: 'https://github.com/mohitchandwai/SMART-AGRICULTURE-USING-REAL-TIME-MONITORING-AND-AUTOMATION',
    category: 'IoT & Cloud',
    summary: 'Leveraging IoT for efficient and automated agriculture practices.',
  },
   {
    id: 'centrifugal-casting-monitor',
    title: 'Real-Time Monitoring of Centrifugal Casting',
    description: 'Industrial IoT solution using smart sensors for data logging and real-time process monitoring.',
    imageUrl: `https://placehold.co/600x400.png`,
    imageHint: 'industrial machinery',
    icon: Database,
    tags: ['IoT', 'Industrial IoT', 'Sensors', 'Data Logging'],
    category: 'IoT & Cloud',
    summary: 'Applying IoT principles to monitor and optimize industrial manufacturing processes.',
  },
  {
    id: 'calculators',
    title: 'Front-End Calculators',
    description: 'Collection of useful calculators (Scientific, GST, EMI, Unit Converter) built with vanilla HTML, CSS, and JavaScript.',
    imageUrl: `https://placehold.co/600x400.png`,
    imageHint: 'digital calculator',
    icon: Calculator,
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend', 'Utility'],
    liveUrl: 'https://abhibhardwaj08.github.io/frontend-stuff/',
    repoUrl: 'https://github.com/abhibhardwaj08/frontend-stuff',
    category: 'Web Development',
    summary: 'Practical web-based calculators demonstrating front-end fundamentals.',
  },
];

export function ProjectShowcase() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.03, // Slightly enlarge on hover
      boxShadow: '0px 10px 20px hsla(var(--primary) / 0.2)', // Add subtle primary color shadow
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 text-primary" // Increased bottom margin
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"> {/* Increased gap */}
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover" // Trigger hover animation
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="flex" // Ensure cards stretch to fill height
            >
              <Card className="w-full h-full flex flex-col overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 group rounded-lg"> {/* Slightly more rounded */}
                 <div className="relative h-52 w-full overflow-hidden"> {/* Increased height */}
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={project.imageHint || 'placeholder'}
                      />
                     ) : project.icon ? (
                      // Display Icon if no image URL
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-secondary/50 p-6">
                          <project.icon className="w-24 h-24 text-primary opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      </div>
                    ) : (
                      // Placeholder if neither image nor icon
                       <div className="absolute inset-0 bg-muted flex items-center justify-center">
                            <Palette className="w-16 h-16 text-muted-foreground opacity-50" /> {/* Generic placeholder */}
                       </div>
                    ) }
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div> {/* Enhanced overlay */}
                   {/* Position Title on top of the image overlay */}
                    <CardHeader className="absolute bottom-0 left-0 p-4 z-10 w-full">
                       <CardTitle className="text-lg md:text-xl font-semibold text-white drop-shadow-sm group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    </CardHeader>
                 </div>

                <CardContent className="flex-grow p-5 pt-4"> {/* Adjusted padding */}
                   <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</CardDescription> {/* Line clamp for consistency */}
                   <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => ( // Show limited tags initially
                      <span key={tag} className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-medium cursor-default">
                        {tag}
                      </span>
                    ))}
                     {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground font-medium cursor-pointer hover:bg-muted/80">
                            + {project.tags.length - 4} more
                        </span>
                     )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center border-t border-border/50 mt-auto"> {/* Space between buttons */}
                  <div>
                     {/* Placeholder for potential future 'Details' button */}
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10" aria-label={`More details about ${project.title}`}>
                         <MoreHorizontal className="h-4 w-4" />
                         {/* <span className="ml-1">Details</span> */}
                     </Button>
                  </div>
                   <div className="flex gap-2">
                      {project.repoUrl && (
                        <Button asChild variant="outline" size="sm" className="group/icon border-muted-foreground/50 text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-colors">
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Github repository`}>
                            <Github className="mr-1.5 h-4 w-4 text-muted-foreground group-hover/icon:text-primary transition-colors" /> Code
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild variant="default" size="sm" className="group/icon bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                           <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                             <ExternalLink className="mr-1.5 h-4 w-4" /> Demo
                          </Link>
                        </Button>
                      )}
                   </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

    
