'use client';

import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  LucideIcon,
  Mail,
} from "lucide-react";
import { X as XImage } from '@/public';

type Social =
  | {
    icon: LucideIcon;
    href: string;
    label: string;
    isImage: false;
  }
  | {
    icon: StaticImageData;
    href: string;
    label: string;
    isImage: true;
  };


const socials: Social[] = [
  { icon: Github, href: "https://github.com/peternnadi1999", label: "GitHub", isImage: false },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nnadi-peter-emeka-a002371a9", label: "LinkedIn", isImage: false },
  { icon: XImage, href: "https://x.com/PeterNnadi7", label: "X", isImage: true },
  { icon: Mail, href: "mailto:peternnadi1999@gmail.com", label: "Email", isImage: false },
];


export default function Contact() {
  return (
    <section id="contact" className="relative bg-background py-12">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Have a project in mind? I'd love to hear about it. Feel free to reach out and let's discuss how I can help.
          </p>
        </div>

        <div className="pt-6">
          <div className="flex border border-border rounded-3xl shadow-lg py-6 flex-wrap justify-center gap-6 bg-card">
            {socials.map(({ icon: Icon, href, label, isImage }) => (
              <motion.div
                key={label}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group rounded-xl"
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
      w-14 h-14
      flex items-center justify-center
      rounded-xl
      border border-border
      bg-muted
      backdrop-blur-sm
      transition-all
      duration-300
      hover:bg-accent
      hover:border-accent
      dark:hover:bg-accent
      dark:hover:border-accent
    "
                >
                  {isImage ? (
                    <Image
                      src={Icon as StaticImageData}
                      alt={label}
                      width={24}
                      height={24}
                      className="text-foreground transition-colors duration-300 group-hover:text-accent-foreground"
                    />
                  ) : (
                    <Icon
                      size={24}
                      className="
        text-foreground
        transition-colors
        duration-300
        group-hover:text-accent-foreground
      "
                    />
                  )}
                </Link>

                {/* Tooltip */}
                <span
                  className="
      pointer-events-none
      absolute
      -top-10 left-1/2 -translate-x-1/2
      whitespace-nowrap
      rounded-md
      bg-foreground
      px-3 py-1
      text-base
      font-semibold
      text-background
      opacity-0
      scale-95
      transition-all
      duration-200
      group-hover:opacity-100
      group-hover:scale-100
      shadow-md
    "
                >
                  {label}
                </span>
              </motion.div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
