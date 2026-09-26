type FooterProps = Readonly<{
  name: string;
  year: number;
}>;

export function Footer({ name, year }: FooterProps) {
  return (
    <footer className="border-t border-foreground/10 py-8 text-center text-sm opacity-60">
      © {year} {name}
    </footer>
  );
}
