import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ETH Enugu',
      description:
        'A blockchain and cryptocurrency platform designed to promote Ethereum adoption in Enugu. Built with modern web technologies to provide a seamless user experience for cryptocurrency enthusiasts and developers.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Web3', 'Blockchain'],
      projectType: 'Collaboration',
      liveLink: 'https://ethenugu.xyz/',
      githubLink: 'https://github.com/ETHEnugu/eth-enugu-frontend',
      highlight: true,
    },
    {
      id: 2,
      title: 'Vetkonect',
      description:
        'A professional veterinary services platform connecting pet owners with qualified veterinarians. Features appointment booking, medical records management, and consultation services.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      projectType: 'Collaboration',
      liveLink: 'https://vetkonect.com',
      githubLink: '',
    },
    {
      id: 3,
      title: 'Audioblocks',
      description:
        'A digital audio marketplace and streaming platform for discovering and sharing audio content, optimized for performance across all devices.',
      technologies: ['React', 'JavaScript', 'API Integration'],
      projectType: 'Personal Project',
      liveLink: 'https://audioblocks.org',
      githubLink: '',
    },
    {
      id: 4,
      title: 'Grandilo Technology Platform',
      description:
        'A corporate and service platform built for Grandilo Technology to showcase services, manage client interactions, and deliver responsive user interfaces. Focused on performance optimization, clean UI architecture, and seamless API integrations for dynamic content delivery.',
      technologies: ['Vue.js', 'Tailwind CSS', 'Firebase', 'JavaScript'],
      projectType: 'Professional Project',
      liveLink: 'https://grandilo.com',
      githubLink: '',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section id="projects" className="relative bg-background py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 cursor-pointer md:col-span-2"
            >
              {/* Animated background glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Right Links */}
              <div className="right-6 top-6 flex items-center gap-4 text-foreground/60 absolute z-10">
                {project.liveLink && (
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-accent transition"
                    >
                      Live Link <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                )}

                {project.githubLink && (
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition"
                      aria-label="GitHub Repository"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.58 2 13c0 5.13 3.43 9.47 8.18 11 .6.11.82-.27.82-.58v-2.02c-3.33.75-4.03-1.66-4.03-1.66-.55-1.43-1.34-1.81-1.34-1.81-1.1-.78.08-.77.08-.77 1.21.09 1.85 1.27 1.85 1.27 1.08 1.89 2.83 1.34 3.52 1.02.11-.8.42-1.34.76-1.65-2.66-.31-5.47-1.37-5.47-6.1 0-1.35.47-2.46 1.24-3.32-.13-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.27a11.2 11.2 0 0 1 6 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.7.25 2.96.12 3.27.77.86 1.24 1.97 1.24 3.32 0 4.75-2.82 5.78-5.5 6.08.43.38.82 1.12.82 2.26v3.35c0 .32.22.7.83.58C18.57 22.47 22 18.13 22 13 22 6.58 17.52 2 12 2z" />
                      </svg>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-5 max-w-3xl relative z-10">
                <h3 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70 group-hover:border-accent/50 group-hover:text-accent/80 transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Type */}
                <p className="text-sm text-foreground/60">
                  <span className="font-medium text-foreground">
                    Project Type:
                  </span>{' '}
                  {project.projectType}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
