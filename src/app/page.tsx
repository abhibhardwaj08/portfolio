
import { HeroSection } from '@/components/sections/hero-section';
import AboutMeSection from '@/components/sections/about-me-section'; // Ensure this is a default import
import { ProjectShowcase } from '@/components/sections/project-showcase';
import { SkillsSection } from '@/components/sections/skills-section';
import { EducationSection } from '@/components/sections/education-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { InterestsSection } from '@/components/sections/interests-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutMeSection /> {/* This should now work with the default export */}
      <ProjectShowcase />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      {/* <InterestsSection /> Uncomment if needed */}
      <ContactSection />
    </div>
  );
}
