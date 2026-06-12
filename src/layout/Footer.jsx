import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/RomanRochniak",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/roman-rochniak-aaa9b1326/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rochnyak180405@gmail.com",
    label: "Email",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="glass rounded-3xl border border-primary/20 p-8 md:p-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-10 items-start">
            {/* Brand */}
            <div>
              <a href="#" className="inline-flex items-center text-2xl font-bold tracking-tight">
                RR<span className="text-primary">.</span>
              </a>

              <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
                Roman Rochniak — Python developer building practical web apps,
                backend systems, AI-powered features, and deployed real-world
                projects.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to Work
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider mb-4">
                Navigation
              </h3>

              <nav className="grid grid-cols-2 gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-foreground uppercase tracking-wider mb-4">
                Connect
              </h3>

              <div className="flex items-center gap-3 mb-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-3 rounded-full bg-surface border border-border/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <a
                href="mailto:rochnyak180405@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                rochnyak180405@gmail.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/70 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Roman Rochniak. All rights reserved.
            </p>

            <p className="text-xs text-muted-foreground">
              Built with React, Tailwind CSS, Vite, and too much caffeine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};