import type { Link } from "@/content/types";

export const toSectionId = (label: string): string =>
  label
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const toNavLinks = (sections: readonly string[]): readonly Link[] =>
  sections.map((label) => ({ label, href: `#${toSectionId(label)}` }));
