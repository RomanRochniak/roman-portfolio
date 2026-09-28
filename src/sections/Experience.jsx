const experiences = [
  {
    period: "2024 — Present",
    role: "Freelance Software Developer",
    company: "Independent • Backend, Automation & Custom Software",
    description:
      "I work directly with clients who usually come with a problem, not a perfect technical specification. My job is to understand what is actually slowing them down, design a practical solution, build it, and make sure it keeps working after launch.",
    highlights: [
      "Build custom Python tools and automation workflows around real client needs instead of forcing problems into predefined templates.",
      "Develop web scrapers that collect, clean, transform, and structure data from client-specified sources, replacing repetitive manual work with reusable processes.",
      "Build Telegram bots and automation systems for notifications, user commands, scheduled operations, and recurring workflows.",
      "Develop backend APIs, integrations, and internal tools using Python-based frameworks and relational databases.",
      "Turn vague or changing requirements into clear technical plans, choosing solutions that are simple enough to maintain but strong enough to solve the actual problem.",
      "Own projects end to end: understanding the problem, architecture, implementation, testing, debugging, deployment, and post-launch support.",
    ],
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Web Scraping",
      "Telegram Bot API",
      "REST APIs",
      "Docker",
    ],
    current: true,
  },

  {
    period: "2025 — Present",
    role: "Full-stack Developer",
    company: "Andriy Rochnyak Photography • Production Client Project",
    description:
      "Built and continue to maintain a production website for an internationally awarded fine-art photographer. The work goes beyond writing frontend code — it includes understanding the client's visual goals, making technical tradeoffs, shipping releases, and improving the product based on real feedback.",
    highlights: [
      "Turned client ideas and visual requirements into practical product decisions, reusable components, and production releases.",
      "Built image-focused galleries, sliders, lightboxes, responsive layouts, and navigation designed around large professional photography collections.",
      "Solved the main technical challenge of presenting high-resolution photography while keeping the site fast and usable across devices.",
      "Improved image loading, page structure, metadata, SEO, and mobile behavior based on real usage and client feedback.",
      "Manage Vercel deployments, custom-domain configuration, QA, cross-device testing, issue resolution, and ongoing releases.",
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

  {
    period: "2025",
    role: "Backend Developer Intern",
    company: "Springer Capital • Real Estate Investment & Advisory",
    description:
      "Worked inside a backend engineering team on Python services used in internal company workflows. The work involved understanding existing systems, adding features, tracing bugs, working with databases and integrations, and making sure changes were tested and maintainable.",
    highlights: [
      "Developed features across Python backend services supporting internal company workflows.",
      "Worked on REST endpoints, request validation, authentication, filtering, pagination, and PostgreSQL-backed application logic.",
      "Built integrations with Google and Microsoft services, converting meeting data from different providers into a consistent structure for downstream workflows.",
      "Investigated backend defects by reproducing requests, tracing application behavior, inspecting database state, and fixing logic issues.",
      "Added Pytest regression tests to protect fixes and reduce the chance of recurring backend problems.",
      "Worked with Docker, Git branches, pull requests, code review, and service documentation as part of the team's development workflow.",
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
            From problem to
            <span className="font-serif italic font-normal text-white">
              {" "}
              working software.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I&apos;ve worked in different situations — inside a backend team,
            directly with clients, and independently on software projects.
            The common part is always the same: understand the problem,
            make sensible technical decisions, build the solution, and take
            responsibility for getting it into a working state.
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