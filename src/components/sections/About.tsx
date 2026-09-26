import { Section } from "@/components/layout/Section";

type AboutProps = Readonly<{
  id: string;
  title: string;
  paragraphs: readonly string[];
}>;

export function About({ id, title, paragraphs }: AboutProps) {
  return (
    <Section id={id} title={title}>
      <div className="space-y-4 text-lg opacity-80">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
