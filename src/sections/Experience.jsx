const experiences = [
  {
    period: "2025",
    role: "Backend Engineering",
    company: "Springer Capital • Real Estate Investment & Advisory",
    description:
      "Worked with a backend team on internal Python services used in real company workflows, with a focus on APIs, business logic, structured data, database operations, testing, and service documentation.",
    highlights: [
      "Built and contributed to three Python backend services covering meeting-data workflows, internal financial operations, and employee-related processes.",
      "Worked on a meeting-data service that collected information from Google and Microsoft tools and converted different provider formats into a consistent structure for internal workflows.",
      "Worked on a financial-operations service that validated internal data, applied business rules and calculations, and returned structured results through backend workflows.",
      "Built employee-related backend workflows for employee, attendance, and performance data, including authentication, validation, filtering, pagination, and database-backed logic.",
      "Investigated backend issues by reproducing requests, checking application behavior and database state, fixing logic problems, and adding tests to prevent regressions.",
      "Worked through Git branches, pull requests, code review, Docker-based environments, testing, and technical documentation as part of the team development process.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "Pytest",
    ],
    current: false,
  },
  {
    period: "2025 — Present",
    role: "Freelance Software Developer",
    company: "Professional Photography Client",
    description:
      "Own the development and ongoing support of a production website for a professional photographer, working directly with the client from early design discussions through launch and follow-up releases.",
    highlights: [
      "Turned client ideas and visual requirements into practical product decisions, reusable website components, and production releases.",
      "Built image-focused galleries, sliders, lightboxes, responsive layouts, and navigation designed around large professional photography collections.",
      "Handled the main technical tradeoff of the project: keeping high-resolution photography visually strong without making the website feel slow.",
      "Improved image loading, page structure, metadata, SEO details, and mobile behavior based on real feedback from the live website.",
      "Managed Vercel deployments, custom-domain setup, cross-device checks, issue fixing, and ongoing client-requested updates after launch.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Building software with
            <span className="font-serif italic font-normal text-white">
              {" "}
              real responsibility.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My experience includes Python backend development in a team
            environment and end-to-end software delivery for a real client,
            from requirements and implementation to testing, deployment,
            debugging, and ongoing updates.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="
              timeline-glow
              absolute
              left-0
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-primary/70
              via-primary/30
              to-transparent
              md:-translate-x-1/2
              shadow-[0_0_25px_rgba(32,178,166,0.8)]
            "
          />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={`${exp.role}-${exp.company}`}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    top-0
                    w-3
                    h-3
                    bg-primary
                    rounded-full
                    -translate-x-1/2
                    ring-4
                    ring-background
                    z-10
                  "
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Experience Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    {/* Period */}
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    {/* Role */}
                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    {/* Main Description */}
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul
                      className={`mt-5 space-y-3 text-sm text-muted-foreground ${
                        idx % 2 === 0
                          ? "md:text-right"
                          : "text-left"
                      }`}
                    >
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className={`flex gap-3 ${
                            idx % 2 === 0
                              ? "md:flex-row-reverse"
                              : ""
                          }`}
                        >
                          <span className="text-primary mt-[2px] shrink-0">
                            •
                          </span>

                          <span className="leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${
                        idx % 2 === 0
                          ? "md:justify-end"
                          : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-3
                            py-1
                            bg-surface
                            text-xs
                            rounded-full
                            text-muted-foreground
                            border
                            border-border/50
                            hover:border-primary/50
                            hover:text-primary
                            transition-all
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};