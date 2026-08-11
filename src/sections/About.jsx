import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Backend Focus",
    description:
      "I work mainly with application logic, APIs, databases, integrations, and the systems behind user-facing features.",
  },
  {
    icon: Rocket,
    title: "Production Work",
    description:
      "My experience includes internal backend services, deployed applications, client releases, payments, and AI integrations.",
  },
  {
    icon: Users,
    title: "Team Development",
    description:
      "I have worked with Git branches, pull requests, code review, testing, debugging, and technical documentation.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description:
      "I try to understand why a feature is needed, not only how to code it, and turn requirements or feedback into working software.",
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
                Backend development
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  with real product context.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I&apos;m Roman Rochniak, a Python Software Developer focused
                mainly on backend development. I enjoy working with the part
                of a product that handles application logic, APIs, data,
                integrations, and the workflows behind what users see on the
                screen.
              </p>

              <p>
                My experience includes working on internal Python services in
                a team environment, building database-backed application
                logic, debugging backend issues, testing changes, and
                documenting service behavior. I&apos;ve also delivered a
                production website for a real client from the first
                requirements through launch and ongoing updates.
              </p>

              <p>
                I also build my own applications to go deeper into backend
                engineering. My projects include membership and payment
                workflows, authentication, relational data, AI integrations,
                and deployed systems that I can continue improving after the
                first release.
              </p>
            </div>

            {/* Personal Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  &quot;You can&apos;t climb the ladder of success with your hands in your pockets.&quot;
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