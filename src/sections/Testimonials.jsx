import {
  ArrowUpRight,
  Award,
  Code2,
  GraduationCap,
} from "lucide-react";

const certificates = [
  {
    title: "CS50 Web Programming with Python and JavaScript",
    issuer: "HarvardX",
    description:
      "Web development with Python, Django, JavaScript, SQL, APIs, testing, authentication, and full-stack application development.",
    link: "https://certificates.cs50.io/77ce24f2-e0af-4590-bc64-9779f80e41f6.pdf?size=letter",
    icon: GraduationCap,
  },
  {
    title: "Python Mega Course: Build 20 Real-World Apps and AI Agents",
    issuer: "Udemy",
    description:
      "Hands-on Python training through practical applications, automation, APIs, web development, data workflows, and AI-powered projects.",
    link: "https://www.udemy.com/certificate/UC-1e73189f-fc11-457e-8a9e-2be9ca1a6217/",
    icon: Code2,
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman Academy",
    description:
      "Practical API work with HTTP requests, responses, collections, environments, testing, authentication, and API development workflows.",
    link: "https://verify.skilljar.com/c/8thenq3ag4gj",
    icon: Award,
  },
  {
    title: "Additional Software Development Certificate",
    issuer: "Udemy",
    description:
      "Additional technical training focused on practical software development concepts and hands-on implementation.",
    link: "https://www.udemy.com/certificate/UC-c81e0ba9-77bf-42f6-b5ef-b03e5d33680e/",
    icon: Code2,
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technical training
            <span className="font-serif italic font-normal text-white">
              {" "}
              behind the work.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Selected certifications covering Python, backend development,
            APIs, web applications, and practical software engineering.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((certificate, idx) => (
            <a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                glass
                p-6
                rounded-2xl
                glow-border
                animate-fade-in
                hover:border-primary/50
                transition-all
                duration-500
              "
              style={{
                animationDelay: `${(idx + 1) * 120}ms`,
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <certificate.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {certificate.title}
                  </h3>

                  <p className="text-sm text-primary mt-2">
                    {certificate.issuer}
                  </p>
                </div>

                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {certificate.description}
              </p>

              {/* Link */}
              <div className="mt-6 text-sm font-medium text-secondary-foreground group-hover:text-primary transition-colors">
                View certificate →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};