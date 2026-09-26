import type { Link } from "@/content/types";

type HeaderProps = Readonly<{
  brand: string;
  links: readonly Link[];
}>;

export function Header({ brand, links }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#top" className="font-semibold">
          {brand}
        </a>
        <ul className="flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="opacity-70 transition-opacity hover:opacity-100">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
