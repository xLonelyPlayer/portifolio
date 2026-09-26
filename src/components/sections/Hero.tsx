import type { Hero as HeroContent } from "@/content/types";

type HeroProps = Readonly<{ hero: HeroContent }>;

export function Hero({ hero }: HeroProps) {
  return (
    <section id="top" className="flex min-h-[80vh] items-center">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 font-mono text-sm opacity-60">Hi, I&apos;m {hero.name}</p>
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">{hero.headline}</h1>
        <p className="mb-10 max-w-2xl text-lg opacity-80">{hero.tagline}</p>
        <a
          href={hero.cta.href}
          className="inline-block rounded-full bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
        >
          {hero.cta.label}
        </a>
      </div>
    </section>
  );
}
