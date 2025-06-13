
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { UserCircle, Smile } from 'lucide-react'; // Using Smile as a fallback, UserCircle is fine too

export default function AboutMeSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about-me" className="w-full py-16 md:py-24 lg:py-32 bg-card text-card-foreground overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-2 relative aspect-square w-full max-w-sm mx-auto md:max-w-none rounded-lg overflow-hidden shadow-2xl group"
            variants={itemVariants}
          >
            <Image
              src="https://placehold.co/400x400.png"
              alt="Abhi Bhardwaj"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="profile photo"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
          </motion.div>

          <motion.div className="md:col-span-3" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-primary flex items-center">
              <Smile className="w-8 h-8 mr-3 text-primary" /> {/* Or UserCircle */}
              A Little About Me
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              Hi, I’m a passionate and curious individual with a love for technology, coding, and continuous learning. I’m not just a tech enthusiast — I’m also a sportsman, a traveler, and someone who’s always eager to experience and learn so much more from the world around me.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I enjoy working on creative projects, exploring new ideas, and expanding my skills in software development and problem-solving. Welcome to my portfolio — feel free to explore my work and reach out!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
