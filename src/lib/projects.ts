import type { Project } from "@/content/types";

export const selectFeaturedProjects = (projects: readonly Project[]): readonly Project[] =>
  projects.filter((project) => project.featured);
