import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Mastery Path",
    description:
      "I approach software with discipline, constant practice, and the goal of turning difficult ideas into real systems.",
  },
  {
    icon: Code2,
    title: "Real Projects",
    description:
      "I focus on projects that feel close to real software: deployed apps, client work, payments, AI features, and production updates.",
  },
  {
    icon: Lightbulb,
    title: "Fast Learning",
    description:
      "I learn quickly by building, debugging, reading documentation, and using modern tools to understand concepts faster.",
  },
  {
    icon: Users,
    title: "Clean Structure",
    description:
      "I care about writing code that is easier to understand, maintain, test, and improve over time.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              I learn by building
              <span className="font-serif italic font-normal text-white">
                {" "}
                real software.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I&apos;m Roman Rochniak, a Python-focused developer who learns
                by building, breaking things, fixing them, and getting better
                through practice. I studied computer engineering, but a big part
                of my growth came from self-learning: reading documentation,
                building projects, using modern tools, and pushing myself to
                understand how real applications work.
              </p>

              <p>
                I&apos;ve completed a backend engineering internship, worked
                with a real client on a production photography website, built
                full-stack Django applications, created AI assistant features,
                worked on web scrapers, and deployed projects instead of keeping
                everything as local demos.
              </p>

              <p>
                Right now, I&apos;m focused on becoming a stronger backend
                developer every day. I&apos;m improving my FastAPI skills,
                learning how to write cleaner and more reliable code, and
                working toward becoming the kind of developer who can contribute
                to serious products, strong teams, and real-world systems.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &quot;I want to become part of something bigger than just my own
                projects — a strong engineering team, real products, and work
                that pushes me to grow into a developer who can build, improve,
                and take responsibility.&quot;
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};