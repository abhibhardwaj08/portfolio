'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Settings, Network, Box, BrainCircuit, CheckCircle } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const skillData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Development',
    icon: Code,
    skills: ['HTML5', 'CSS', 'React', 'Next.js'],
  },
  {
    title: 'Cloud Computing',
    icon: Cloud,
    skills: ['AWS', 'GCP'],
  },
  {
    title: 'DevOps & Tools',
    icon: Settings,
    skills: ['Docker', 'Git', 'VS Code'],
  },
  {
    title: 'Decentralized Tech',
    icon: Network,
    skills: ['IPFS', 'Ethereum Smart Contracts', 'Filecoin'],
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: {
      y: -5, // Lift card slightly on hover
      transition: { duration: 0.2 }
   }
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 text-primary" // Increased margin
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" // Adjusted gap
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillData.map((category) => (
            <motion.div
               key={category.title}
               variants={itemVariants}
               whileHover="hover" // Add hover animation
               className="h-full" // Ensure div takes full height for hover effect
             >
              <Card className="h-full bg-background border border-border hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col rounded-lg"> {/* Added rounded-lg */}
                <CardHeader className="flex flex-row items-center gap-4 pb-4 pt-5 px-5"> {/* Adjusted padding */}
                  <div className="p-2 bg-primary/10 rounded-md"> {/* Added background circle for icon */}
                     <category.icon className="w-7 h-7 text-primary" /> {/* Slightly larger icon */}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 flex-grow"> {/* Adjusted padding and added flex-grow */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-secondary/80 hover:bg-secondary transition-colors duration-200 cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
