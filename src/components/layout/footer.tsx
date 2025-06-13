import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; // Use Mail instead of Twitter

export function Footer() {
  return (
    <footer className="w-full bg-card text-card-foreground py-8 mt-16 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Abhi Bhardwaj. Aspiring Cloud Architect & Developer.
        </p>
        <div className="flex items-center gap-5"> {/* Increased gap slightly */}
          <Link href="https://github.com/abhibhardwaj08" target="_blank" rel="noopener noreferrer" aria-label="Github profile" className="group">
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform" />
          </Link>
          <Link href="https://www.linkedin.com/in/abhi-bhardwaj-62234a2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="group">
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform" />
          </Link>
           {/* Use Mail icon linking to email */}
           <a href="mailto:ab1933395@gmail.com" aria-label="Email Abhi Bhardwaj" className="group">
             <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform" />
           </a>
        </div>
      </div>
    </footer>
  );
}
