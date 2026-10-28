interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-line">
      <p className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-ink-muted">
        © {new Date().getFullYear()} {name}
      </p>
    </footer>
  );
}
