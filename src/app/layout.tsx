import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhi Bhardwaj - Cloud & Web Developer Portfolio',
  description: 'Portfolio of Abhi Bhardwaj, an aspiring Cloud Architect with a passion for Web Front-End Development and Decentralized Technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between pt-16">
            {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
