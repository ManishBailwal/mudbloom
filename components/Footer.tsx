import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="MudBloom home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                M
              </span>

              <span className="font-heading text-lg font-semibold tracking-[-0.03em] text-text-primary">
                MudBloom
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-text-secondary">
              We build thoughtful digital products, mobile applications, web
              experiences, and software designed around real human needs.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-primary">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/#about"
                className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                About
              </Link>

              <Link
                href="/#products"
                className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Products
              </Link>

              <Link
                href="/#services"
                className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Services
              </Link>

              <Link
                href="/#contact"
                className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-primary">
              Product
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://nostalzic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Nostalzic
              </a>

              <Link
                href="/privacy"
                className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="w-fit text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-text-secondary">
            © {new Date().getFullYear()} MudBloom. All rights reserved.
          </p>

          <p className="text-text-secondary">
            Nostalzic is a product by MudBloom.
          </p>
        </div>
      </div>
    </footer>
  );
}