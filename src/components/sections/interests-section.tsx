'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Cloud, Rocket, Network, Palette, BrainCircuit, Telescope } from 'lucide-react'; // Added Telescope

interface Interest {
  name: string;
  icon: React.ElementType;
}

const interestsData: Interest[] = [
  { name: 'Cloud & DevOps', icon: Cloud },
  { name: 'Space Tech & ISS Innovations', icon: Rocket },
  { name: 'Decentralized Storage & Compute', icon: Network },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Emerging Technologies & AI', icon: BrainCircuit },
   { name: 'Astronomy', icon: Telescope }, // Example additional interest
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2 } },
};

const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function InterestsSection() {
  return (
    <section id="interests" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl"> {/* Centered content */}
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          Interests & Passions
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={listVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
        >
          {interestsData.map((interest) => (
            <motion.div key={interest.name} variants={itemVariants}>
              <Badge
                variant="outline"
                className="text-base md:text-lg px-4 py-2 border-primary/30 hover:bg-primary/10 transition-colors duration-200 cursor-default group"
              >
                <interest.icon className="w-5 h-5 mr-2 text-primary/80 group-hover:text-primary transition-colors" />
                {interest.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
