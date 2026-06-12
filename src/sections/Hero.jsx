import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const GITHUB_URL = "https://github.com/RomanRochniak";
const LINKEDIN_URL = "https://www.linkedin.com/in/roman-rochniak-aaa9b1326/";
const EMAIL_URL = "mailto:rochnyak180405@gmail.com";
const RESUME_URL = "/Roman_Rochniak_Backend_Resume.pdf";

const skills = [
  "Python",
  "Django",
  "FastAPI",
  "Django REST Framework",
  "PostgreSQL",
  "Neon",
  "SQLAlchemy",
  "Alembic",
  "Pydantic",
  "Jinja2",
  "REST APIs",
  "JWT Auth",
  "Stripe",
  "Gemini API",
  "Ollama",
  "Docker",
  "Git",
  "Pytest",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Render",
  "Vercel",
];

const floatingDots = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${15 + Math.random() * 20}s`,
  delay: `${Math.random() * 5}s`,
}));

export const Hero = () => {
  const handleProjectsClick = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = (event) => {
    if (RESUME_URL === "#") {
      event.preventDefault();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Portfolio background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            left: dot.left,
            top: dot.top,
            animation: `slow-drift ${dot.duration} ease-in-out infinite`,
            animationDelay: dot.delay,
          }}
        />
      ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Python Developer • Backend & Web Systems
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building practical
                <br />
                <span className="text-primary glow-text">Python</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  web apps.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I&apos;m Roman Rochniak, a Python developer who learns by building. I&apos;ve
                worked with real clients, completed a backend engineering internship,
                built full-stack web apps, AI assistants, web scrapers, and deployed
                projects from scratch — and I&apos;m focused on turning that experience
                into strong backend engineering skills.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={handleProjectsClick}>
                View Projects <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href={RESUME_URL}
                onClick={handleResumeClick}
                aria-disabled={RESUME_URL === "#"}
                title={
                  RESUME_URL === "#"
                    ? "Resume coming soon"
                    : "Download Roman Rochniak resume"
                }
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Connect: </span>
              {[
                { icon: Github, href: GITHUB_URL, label: "GitHub" },
                { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
                { icon: Mail, href: EMAIL_URL, label: "Email" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Roman Rochniak"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float max-w-[260px]">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shrink-0" />
                    <span className="text-sm font-medium">
                      Open to Work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-primary">Real</div>
                  <div className="text-xs text-muted-foreground">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};