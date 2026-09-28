import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem First",
    description:
      "I like starting with the real problem, not the technology. First I figure out what needs to happen, then I choose the simplest approach that can actually work.",
  },
  {
    icon: Code2,
    title: "Backend Builder",
    description:
      "Most of my work is around Python, APIs, databases, automation, integrations, and the logic that makes applications actually function.",
  },
  {
    icon: Rocket,
    title: "Ship It",
    description:
      "I care about getting software into a usable state — testing it, fixing issues, deploying it, and improving it after real feedback.",
  },
  {
    icon: Users,
    title: "Real Work",
    description:
      "I have worked both inside a development team and directly with clients, where communication, changing requirements, and ownership matter as much as writing code.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                About Me
              </span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 animate-fade-in animation-delay-100 text-secondary-foreground">
                I like figuring out
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  what actually needs to be built.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I&apos;m Roman Rochniak, a software developer who enjoys the
                part of development where the answer is not obvious yet. A
                client has a repetitive task, a workflow is breaking, data has
                to move between systems, or a feature needs to work reliably —
                that&apos;s the kind of problem I like digging into.
              </p>

              <p>
                I work mostly with Python and backend technologies, but I
                don&apos;t think of myself as someone who just writes API
                endpoints. I like understanding how the whole process works,
                where the bottleneck is, what can be automated, and what the
                simplest useful solution should look like.
              </p>

              <p>
                That has meant working on backend services inside a development
                team, building scrapers and automation tools, creating client
                software, debugging production issues, working with databases
                and integrations, and taking projects from an early idea to a
                deployed product.
              </p>

              <p>
                I&apos;m still constantly improving my technical depth, but the
                way I approach work is already simple: understand the problem,
                build something useful, test it properly, and take
                responsibility for whether it actually works.
              </p>
            </div>

            {/* Personal Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &quot;You can&apos;t climb the ladder of success with your hands
                in your pockets.&quot;
              </p>

              <p className="mt-3 text-sm text-primary font-medium">
                — Arnold Schwarzenegger
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/40 border border-transparent transition-all duration-300"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

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