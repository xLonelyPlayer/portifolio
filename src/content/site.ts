import type { SiteContent } from "./types";

// Placeholder copy — replace with real content.
export const site = {
  meta: {
    title: "Augusto — Senior Software Engineer",
    description: "Full-stack engineer building reliable, well-designed web products.",
    url: "https://example.com",
    locale: "en_US",
  },
  hero: {
    name: "Augusto",
    headline: "Senior Software Engineer",
    tagline:
      "I design and build full-stack products with a focus on simplicity, correctness, and craft.",
    cta: { label: "See my work", href: "#projects" },
  },
  sections: ["About", "Projects", "Contact"],
  about: {
    paragraphs: [
      "I'm a full-stack engineer based in Brazil with years of experience shipping production software.",
      "I care about clear boundaries between data, calculations, and actions — code that's easy to reason about and easy to change.",
    ],
  },
  projects: [
    {
      title: "Project One",
      description: "A short description of what this project does and why it matters.",
      tags: ["TypeScript", "Next.js"],
      href: "https://example.com",
      featured: true,
    },
    {
      title: "Project Two",
      description: "A short description of what this project does and why it matters.",
      tags: ["Node.js", "PostgreSQL"],
      featured: true,
    },
    {
      title: "Project Three",
      description: "A short description of what this project does and why it matters.",
      tags: ["React"],
      featured: false,
    },
  ],
  contact: {
    blurb: "Open to interesting problems and good teams. Let's talk.",
    links: [
      { label: "Email", href: "mailto:hello@example.com" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
    ],
  },
} as const satisfies SiteContent;
