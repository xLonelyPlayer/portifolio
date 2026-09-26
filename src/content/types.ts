export type Link = Readonly<{
  label: string;
  href: string;
}>;

export type Project = Readonly<{
  title: string;
  description: string;
  tags: readonly string[];
  href?: string;
  featured: boolean;
}>;

export type SiteMeta = Readonly<{
  title: string;
  description: string;
  url: string;
  locale: string;
}>;

export type Hero = Readonly<{
  name: string;
  headline: string;
  tagline: string;
  cta: Link;
}>;

export type SiteContent = Readonly<{
  meta: SiteMeta;
  hero: Hero;
  sections: readonly string[];
  about: Readonly<{ paragraphs: readonly string[] }>;
  projects: readonly Project[];
  contact: Readonly<{ blurb: string; links: readonly Link[] }>;
}>;
