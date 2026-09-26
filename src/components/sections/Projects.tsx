import { Section } from "@/components/layout/Section";
import type { Project } from "@/content/types";

type ProjectsProps = Readonly<{
  id: string;
  title: string;
  projects: readonly Project[];
}>;

export function Projects({ id, title, projects }: ProjectsProps) {
  return (
    <Section id={id} title={title}>
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="rounded-2xl border border-foreground/10 p-6 transition-colors hover:border-foreground/30"
          >
            <h3 className="mb-2 text-xl font-semibold">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.title} ↗
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="mb-4 opacity-80">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-foreground/5 px-3 py-1 font-mono text-xs">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
