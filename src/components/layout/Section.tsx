import type { ReactNode } from "react";

type SectionProps = Readonly<{
  id: string;
  title: string;
  children: ReactNode;
}>;

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">{title}</h2>
        {children}
      </div>
    </section>
  );
}
