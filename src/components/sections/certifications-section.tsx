
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Star, Briefcase, CheckSquare, Users } from 'lucide-react'; // Added Users icon

interface Certification {
  title: string;
  issuer: string;
  icon: React.ElementType;
  description?: string;
  link?: string; // Add link property
}

const certificationsData: Certification[] = [
  {
    title: 'Data Analyst Micro Experience',
    issuer: 'SkillCred',
    icon: Star,
    description: 'Completed a micro-experience focused on data analysis tasks.',
    link: 'https://www.linkedin.com/posts/abhi-bhardwaj-62234a2a9_dataanalysis-skillcred-grateful-activity-7227008586952888320-xllU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpEfvoB4O9g1iExhgGwy-LkXx1hte4nzvQ',
  },
  {
    title: 'Java Certification',
    issuer: 'Hackerrank',
    icon: CheckSquare,
    description: 'Verified proficiency in Java programming fundamentals.',
    link: 'https://www.linkedin.com/posts/abhi-bhardwaj-62234a2a9_abhi-bhardwaj-ab1933395-on-hackerrank-activity-7244760021413027840-WA2A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpEfvoB4O9g1iExhgGwy-LkXx1hte4nzvQ',
  },
  {
    title: 'Data Analytics & Visualization Job Simulation',
    issuer: 'Accenture x Forage',
    icon: Briefcase,
    description: 'Completed a virtual job simulation involving data analytics and visualization.',
    link: 'https://www.linkedin.com/posts/abhi-bhardwaj-62234a2a9_datavisualization-analytics-continuouslearning-activity-7240663678289674240-A9An?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpEfvoB4O9g1iExhgGwy-LkXx1hte4nzvQ',
  },
  {
    title: 'Certificate of Participation - ISS Cargo Optimizer',
    issuer: 'NIT Delhi',
    icon: Award,
    description: 'Recognized for participation and presentation of the ISS Cargo Optimizer project.',
    link: 'https://www.linkedin.com/posts/abhi-bhardwaj-62234a2a9_nationalspacehackathon-iitdelhi-spacetech-activity-7325211066374770688-eEks?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpEfvoB4O9g1iExhgGwy-LkXx1hte4nzvQ',
  },
  {
    title: 'Certificate of Participation - DevHeat Hackathon',
    issuer: 'IIIT Surat (Team)',
    icon: Users, // Using Users icon to signify team participation
    description: 'Participated as part of a team in the DevHeat Hackathon.',
    link: 'https://www.linkedin.com/posts/abhi-bhardwaj-62234a2a9_hackathon-iiitsurat-glauniversity-activity-7327053667402993665-wiev?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpEfvoB4O9g1iExhgGwy-LkXx1hte4nzvQ',
  },
];


const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] } },
  hover: {
    scale: 1.05, // Scale up slightly
    borderColor: 'hsl(var(--primary))', // Highlight border with primary color
    transition: { duration: 0.2 }
  }
};


export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-16 md:py-24 lg:py-32 bg-card text-card-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-16 text-primary" // Increased margin
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Accomplishments
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" // Adjusted gap
           variants={sectionVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
        >
          {certificationsData.map((cert) => (
            <motion.div
               key={cert.title}
               variants={itemVariants}
               whileHover="hover" // Add hover animation
               className="h-full" // Ensure div takes full height
             >
              {cert.link ? (
                <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="h-full bg-background border border-border hover:shadow-lg transition-all duration-300 flex flex-col rounded-lg cursor-pointer"> {/* Added cursor-pointer */}
                    <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-5 px-5"> {/* Adjusted padding */}
                        <div className="p-2 bg-primary/10 rounded-md">
                          <cert.icon className="w-6 h-6 text-primary" />
                        </div>
                       <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-foreground">{cert.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">{cert.issuer}</CardDescription>
                       </div>
                    </CardHeader>
                    {cert.description && (
                        <CardContent className="pt-2 px-5 pb-5 text-sm text-foreground/80 flex-grow"> {/* Adjusted padding */}
                           <p>{cert.description}</p>
                        </CardContent>
                    )}
                     {!cert.description && <CardContent className="flex-grow px-5 pb-5"></CardContent>}
                  </Card>
                </Link>
              ) : (
                <Card className="h-full bg-background border border-border hover:shadow-lg transition-all duration-300 flex flex-col rounded-lg"> {/* Added rounded-lg */}
                  <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-5 px-5"> {/* Adjusted padding */}
                      <div className="p-2 bg-primary/10 rounded-md">
                        <cert.icon className="w-6 h-6 text-primary" />
                      </div>
                     <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-foreground">{cert.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{cert.issuer}</CardDescription>
                     </div>
                  </CardHeader>
                  {cert.description && (
                      <CardContent className="pt-2 px-5 pb-5 text-sm text-foreground/80 flex-grow"> {/* Adjusted padding */}
                         <p>{cert.description}</p>
                      </CardContent>
                  )}
                   {!cert.description && <CardContent className="flex-grow px-5 pb-5"></CardContent>}
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
