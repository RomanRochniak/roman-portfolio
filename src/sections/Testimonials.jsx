import { ArrowUpRight, Award, Code2, GraduationCap } from "lucide-react";

const certificates = [
  {
    title: "CS50 Web Programming with Python and JavaScript",
    issuer: "Harvard University",
    description:
      "Completed a web programming course focused on Python, JavaScript, Django, SQL, APIs, testing, and modern web application development.",
    link: "https://certificates.cs50.io/77ce24f2-e0af-4590-bc64-9779f80e41f6.pdf?size=letter",
    icon: GraduationCap,
  },
  {
    title: "Python Mega Course: Build 20 Real-World Apps and AI Agents",
    issuer: "Udemy",
    description:
      "Completed a 50.5-hour Python course focused on building practical applications, automation workflows, web apps, and AI-powered projects.",
    link: "https://www.udemy.com/certificate/UC-1e73189f-fc11-457e-8a9e-2be9ca1a6217/",
    icon: Code2,
  },
  {
    title: "Backend Engineering Internship Certificate",
    issuer: "Springer Capital",
    description:
      "Certificate confirming completion of a backend engineering internship focused on backend services, APIs, databases, testing, documentation, and development workflows.",
    link: "https://drive.google.com/file/d/1jvLdIsw-b_2npDWxBGYHoHjqfovp1LoG/view",
    icon: Award,
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp / Microsoft",
    description:
      "Completed foundational C# training covering core programming concepts, syntax, data structures, control flow, and basic software development fundamentals.",
    link: "https://www.freecodecamp.org/certification/fcc-99e9a1ff-66bd-449a-b11e-f09130949580/foundational-c-sharp-with-microsoft",
    icon: Code2,
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    description:
      "Completed API fundamentals training focused on working with APIs, requests, responses, collections, and practical API testing workflows in Postman.",
    link: "https://verify.skilljar.com/c/8thenq3ag4gj",
    icon: Award,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground 
            text-sm font-medium tracking-wider 
            uppercase animate-fade-in"
          >
            Certificates
          </span>

          <h2
            className="text-4xl md:text-5xl 
            font-bold mt-4 mb-6 animate-fade-in 
            animation-delay-100 text-secondary-foreground"
          >
            Learning backed by{" "}
            <span className="font-serif italic font-normal text-white">
              verified credentials.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A focused set of certificates that support my learning path in
            Python, web development, backend engineering, API workflows, and
            software fundamentals.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, idx) => (
            <a
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass p-6 rounded-2xl glow-border animate-fade-in hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <certificate.icon className="w-6 h-6 text-primary" />
              </div>

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

              <p className="text-sm text-muted-foreground mt-4">
                {certificate.description}
              </p>

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