export default function About() {
  return (
    
    <section id="about" className="relative bg-background py-20 md:py-32">
      {/* #1e1e24 */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="space-y-3 text-foreground/80 leading-relaxed">
              <p>
                I'm a frontend developer with 3+ years of experience building beautiful, performant web experiences. I specialize in React and Next.js, creating scalable applications with attention to detail.
              </p>
              <p>
                I'm passionate about modern web technologies and always eager to learn and grow in the field of frontend development.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'].map(
                (skill) => (
                  <div key={skill} className="px-4 py-3 bg-card border border-border rounded-lg text-center hover:border-accent transition-colors">
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
