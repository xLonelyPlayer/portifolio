import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { site } from "@/content/site";
import { toNavLinks, toSectionId } from "@/lib/navigation";
import { selectFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const [aboutTitle, projectsTitle, contactTitle] = site.sections;
  // Action at the edge: the clock is read once here, at build time.
  const year = new Date().getFullYear();

  return (
    <>
      <Header brand={site.hero.name} links={toNavLinks(site.sections)} />
      <main className="flex-1">
        <Hero hero={site.hero} />
        <About id={toSectionId(aboutTitle)} title={aboutTitle} paragraphs={site.about.paragraphs} />
        <Projects
          id={toSectionId(projectsTitle)}
          title={projectsTitle}
          projects={selectFeaturedProjects(site.projects)}
        />
        <Contact
          id={toSectionId(contactTitle)}
          title={contactTitle}
          blurb={site.contact.blurb}
          links={site.contact.links}
        />
      </main>
      <Footer name={site.hero.name} year={year} />
    </>
  );
}
