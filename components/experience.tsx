import { GraduationCap } from "lucide-react";

export default function Experience() {
  const workExperience = [
    {
      id: 1,
      title: 'Frontend Developer | Grandilo Technology',
      period: 'August 2020 - September 2022',
      description:
        'Developed and maintained 4+ web applications using Vue.js, TailwindCSS, and Firebase. Optimized frontend performance, reducing page load time by 30% for improved user experience. Integrated backend APIs to fetch and display dynamic data, ensuring seamless user interactions. Collaborated with UX/UI designers to translate wireframes into fully responsive web interfaces. Implemented Git workflows for efficient team collaboration and version control.',
    },
    {
      id: 2,
      title: 'IT Infrastructure Executive | Goldpark Logistics',
      period: 'August 2023 - November 2024',
      description:
        'Developed a Warehouse Reporting System that automated logistics operations and improved efficiency. Analyzed logistics processes to identify bottlenecks and proposed automation solutions. Built a functional reporting dashboard using React.js and Node.js.',
    },
    {
      id: 3,
      title: 'Blockchain Development Trainee | Web3Bridge',
      period: 'July 2024 - December 2024',
      description:
        'Underwent intensive blockchain development training focusing on Ethereum, Solidity, and smart contract development. Built decentralized applications (dApps) and gained hands-on experience with EVM, gas optimization, and smart contract security best practices. Worked with Web3 libraries such as wagmi, RainbowKit, and ethers.js.',
    },
    {
      id: 4,
      title: 'Open Source Contributor | OnlyDust',
      period: '2024 - Present',
      description:
        'Contributed to open-source Web3 projects by fixing bugs, optimizing performance, and building frontend components for decentralized applications. Collaborated with global blockchain developers and contributed to DAO-driven projects.',
    },
    {
      id: 5,
      title: 'Frontend Developer | VetKonect',
      period: '2024 - Present',
      description:
        'Building and maintaining responsive web applications using Next.js, TailwindCSS, and modern React patterns. Implemented authentication flows, dashboard interfaces, and API integrations for real-time veterinary and logistics data. Optimized performance and improved UI/UX consistency across devices. Collaborated with backend developers and product designers to deliver scalable features and maintain clean code architecture.',
    },
  ];

  const education = [
    {
      id: 1,
      title: 'OND in Computer Science',
      institution: 'Federal Polytechnic Idah',
      period: 'September 2017 - August 2019',
    },
    {
      id: 2,
      title: "Bachelor's Degree in Computer Science",
      institution: 'University of Nigeria, Nsukka',
      period: 'June 2021 - Present',
    },
  ];

  return (
    <section id="experience" className="relative bg-card py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
          Experience & Education
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Work Experience */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

            <div className="space-y-12 pl-12">
              {workExperience.map((exp) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-16 top-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-card"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">
                      {exp.period}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

            <div className="space-y-12 pl-12">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-16 top-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">

                    <GraduationCap className="w-5 h-5 text-card" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
