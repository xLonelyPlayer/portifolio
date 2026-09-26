import { Section } from "@/components/layout/Section";
import type { Link } from "@/content/types";

type ContactProps = Readonly<{
  id: string;
  title: string;
  blurb: string;
  links: readonly Link[];
}>;

export function Contact({ id, title, blurb, links }: ContactProps) {
  return (
    <Section id={id} title={title}>
      <p className="mb-8 text-lg opacity-80">{blurb}</p>
      <ul className="flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-block rounded-full border border-foreground/20 px-5 py-2 transition-colors hover:bg-foreground hover:text-background"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
