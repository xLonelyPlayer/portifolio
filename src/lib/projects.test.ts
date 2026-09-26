import { describe, expect, it } from "vitest";
import type { Project } from "@/content/types";
import { selectFeaturedProjects } from "./projects";

const project = (title: string, featured: boolean): Project => ({
  title,
  description: "",
  tags: [],
  featured,
});

describe("selectFeaturedProjects", () => {
  it("keeps only featured projects in original order", () => {
    const projects = [project("a", true), project("b", false), project("c", true)];
    expect(selectFeaturedProjects(projects).map((p) => p.title)).toEqual(["a", "c"]);
  });

  it("returns an empty list when nothing is featured", () => {
    expect(selectFeaturedProjects([project("a", false)])).toEqual([]);
  });

  it("does not mutate its input", () => {
    const projects = Object.freeze([project("a", false), project("b", true)]);
    selectFeaturedProjects(projects);
    expect(projects).toHaveLength(2);
  });
});
