'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
   hover: {
     x: 5, // Shift slightly right on hover
     boxShadow: '4px 4px 15px hsla(var(--primary) / 0.15)', // Add subtle shadow
     transition: { duration: 0.2 }
   }
};

const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
     hover: {
       x: -5, // Shift slightly left on hover
       boxShadow: '-4px 4px 15px hsla(var(--secondary) / 0.1)', // Add subtle shadow
       transition: { duration: 0.2 }
   }
}

export function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch" // Use items-stretch
           variants={sectionVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
        >
          {/* University Education */}
          <motion.div variants={itemVariants} whileHover="hover" className="h-full">
            <Card className="h-full border-l-4 border-primary bg-card shadow-md hover:shadow-lg transition-shadow duration-300 rounded-r-lg"> {/* Added rounded-r-lg */}
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                 <div className="bg-primary/10 p-2.5 rounded-full mt-1"> {/* Adjusted padding/margin */}
                   <GraduationCap className="w-6 h-6 text-primary" />
                 </div>
                 <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                    B.Tech in Computer Science & Engineering
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground mt-1">
                    Specialization: Cloud Computing
                    </CardDescription>
                 </div>
              </CardHeader>
              <CardContent className="pl-16 pb-5"> {/* Adjusted padding */}
                <p className="font-medium text-foreground">GLA University, Mathura</p>
                <p className="text-sm text-muted-foreground">2023 – 2027 (Expected)</p>
                <p className="mt-2 text-sm text-foreground/90"> {/* Slightly lighter text */}
                  Focus areas: AWS, GCP, DevOps, Distributed Systems
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Schooling */}
           <motion.div variants={itemVariantsRight} whileHover="hover" className="h-full">
            <Card className="h-full border-l-4 border-secondary bg-card shadow-md hover:shadow-lg transition-shadow duration-300 rounded-r-lg"> {/* Added rounded-r-lg */}
                <CardHeader className="flex flex-row items-start gap-4 pb-4">
                  <div className="bg-secondary/10 p-2.5 rounded-full mt-1"> {/* Adjusted padding/margin */}
                     <School className="w-6 h-6 text-secondary-foreground" />
                   </div>
                   <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        High School Education (CBSE)
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground mt-1">
                        10th & 12th Standard
                      </CardDescription>
                   </div>
                </CardHeader>
                <CardContent className="pl-16 pb-5"> {/* Adjusted padding */}
                    <p className="font-medium text-foreground">Dewan Public School, Meerut</p>
                    {/* Add years if available */}
                    {/* <p className="text-sm text-muted-foreground">Year - Year</p> */}
                </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
