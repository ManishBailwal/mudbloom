import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#F8F4EA]">
      {/* Ambient organic shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#EAF8EF] blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#FFE6EC] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-16 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-24">
          {/* Brand */}
         <div className="max-w-md">
  <Link
    href="/"
    className="group inline-flex items-center"
    aria-label="MudBloom home"
  >
    <Image
      src="/mudbloom_logo.avif"
      alt="MudBloom"
      width={140}
      height={180}
      priority
      className="h-[100px] w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
    />
  </Link>

  <p className="mt-7 max-w-sm font-heading text-[25px] font-medium leading-[1.18] tracking-[-0.035em] text-[#302A3D]">
    We turn good ideas into useful things.
  </p>

  <p className="mt-5 max-w-sm text-[14px] leading-6 text-[#6F6878]">
    An independent software studio building thoughtful digital products,
    mobile apps, web experiences, and software systems.
  </p>

  {/* Email */}
  <a
    href="mailto:hello@mudbloom.in"
    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#302A3D]"
  >
    <Mail className="h-4 w-4 text-[#E85D75]" />

    <span className="border-b border-[#302A3D]/20 pb-0.5 transition-colors group-hover:border-[#E85D75] group-hover:text-[#E85D75]">
      hello@mudbloom.in
    </span>
  </a>
</div>
          {/* Explore */}
<div>
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
    Explore
  </p>

  <div className="mt-6 flex flex-col gap-4">
    {[
      ["About", "/about"],
      ["Products", "/products"],
      ["Services", "/services"],
      ["Contact", "/contact"],
    ].map(([label, href]) => (
      <Link
        key={label}
        href={href}
        className="group flex w-fit items-center gap-1.5 text-[14px] text-[#5F5967] transition-colors duration-200 hover:text-[#302A3D]"
      >
        <span>{label}</span>

        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      </Link>
    ))}
  </div>
</div>

{/* Legal */}
<div>
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
   Legal
  </p>

  <div className="mt-6 flex flex-col gap-4">
  
    <Link
      href="/privacy"
      className="w-fit text-[14px] text-[#5F5967] transition-colors duration-200 hover:text-[#302A3D]"
    >
      Privacy Policy
    </Link>

    <Link
      href="/terms"
      className="w-fit text-[14px] text-[#5F5967] transition-colors duration-200 hover:text-[#302A3D]"
    >
      Terms
    </Link>
  </div>
</div>

{/* Contact */}
<div>
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
    Contact
  </p>

  <div className="mt-6 flex flex-col gap-5">
    {/* Email */}

     <a
      href="mailto:manish.bailwal@mudbloom.in"
      className="group flex items-start gap-3 text-[14px] text-[#5F5967] transition-colors duration-200 hover:text-[#302A3D]"
    >
      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E85D75]" />

      <span className="leading-5">
        manish.bailwal@mudbloom.in
      </span>
    </a>

       <a
      href="mailto:manishbailwal02@gmail.com"
      className="group flex items-start gap-3 text-[14px] text-[#5F5967] transition-colors duration-200 hover:text-[#302A3D]"
    >
      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E85D75]" />

      <span className="leading-5">
        manishbailwal02@gmail.com
      </span>
    </a>
    <a
      href="mailto:contact@mudbloom.in"
      className="group flex items-start gap-3 text-[14px] text-[#5F5967] transition-colors duration-200 hover:text-[#302A3D]"
    >
      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E85D75]" />

      <span className="leading-5">
        contact@mudbloom.in
      </span>
    </a>

    {/* Phone */}
    <a
      href="tel:+916397308332"
      className="group flex items-start gap-3 text-[14px] text-[#5F5967] transition-colors duration-200 hover:text-[#302A3D]"
    >
      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#E85D75]" />

      <span className="leading-5">
        +91 63973 08332
      </span>
    </a>

    {/* Address */}
    <div className="flex items-start gap-3 text-[14px] text-[#5F5967]">
      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E85D75]" />

      <address className="not-italic leading-6">
 
  
   Subhash Road,

  
  <br />
 Opposite to Income Tax Office

  Lane No. 2, Dehradun
  <br />

  Uttarakhand — 248001
  <br />
  India
</address>
    </div>

    {/* Socials */}
    {/* <div className="mt-1 flex items-center gap-3">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#302A3D]/10 bg-white/50 text-[#6F6878] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E85D75]/30 hover:bg-white hover:text-[#E85D75]"
      >
        <FaInstagram className="h-4 w-4" />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#302A3D]/10 bg-white/50 text-[#6F6878] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E85D75]/30 hover:bg-white hover:text-[#E85D75]"
      >
        <FaLinkedinIn className="h-4 w-4" />
      </a>
    </div> */}
  </div>
</div>
        </div>

        {/* Large closing statement */}
        <div className="border-t border-[#302A3D]/10 py-12 lg:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            {/* Statement */}
            <div>
              <p className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#302A3D]">
                Ideas.
                <br />
                Products.
                <br />
                <span className="text-[#E85D75]">People.</span>
              </p>
            </div>

            {/* CTA */}
            <div className="max-w-xs md:pb-2">
              <p className="text-[13px] leading-6 text-[#7A7380]">
                Thoughtful technology for a more human tomorrow.
              </p>

              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#302A3D]"
              >
                <span>Start a conversation</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#302A3D] text-white transition-transform duration-300 group-hover:-rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-[#302A3D]/10 py-6 text-[12px] text-[#8A8390] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} MudBloom. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E85D75]" />
            <span>Independent software studio</span>
          </div>

          <p>Nostalzic is a product by MudBloom.</p>
        </div>
      </div>
    </footer>
  );
}