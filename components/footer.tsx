export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Nnadi Peter E. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60">
            Crafted with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
