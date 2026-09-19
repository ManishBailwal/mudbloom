import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="MudBloom home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-105">
            M
          </span>

          <span className="font-heading text-[19px] font-semibold tracking-[-0.03em] text-text-primary">
            MudBloom
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#about"
            className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            About
          </Link>

          <Link
            href="/#products"
            className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Products
          </Link>

          <Link
            href="/#services"
            className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Services
          </Link>

          <Link
            href="/#contact"
            className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2B3D30] hover:shadow-lg hover:shadow-brand/10 md:inline-flex"
        >
          Let's Talk
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-4 bg-text-primary" />
            <span className="h-px w-4 bg-text-primary" />
          </span>
        </button>
      </div>
    </header>
  );
}