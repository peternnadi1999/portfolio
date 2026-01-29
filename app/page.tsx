'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Cursor from '@/components/cursor';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
