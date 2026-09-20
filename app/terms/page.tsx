import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms of Service govern your access to and use of the MudBloom
          website, products, and services.
        </p>

        <p>
          By accessing or using our website or services, you agree to these
          Terms. If you do not agree with these Terms, please do not use the
          relevant service.
        </p>
      </>
    ),
  },

  {
    id: "services",
    title: "2. Our Services",
    content: (
      <>
        <p>
          MudBloom is an independent software studio that designs, develops,
          operates, and maintains digital products, applications, websites,
          and software systems.
        </p>

        <p>
          Specific products or projects may have additional terms, conditions,
          documentation, or agreements that apply to their use.
        </p>
      </>
    ),
  },

  {
    id: "use",
    title: "3. Acceptable Use",
    content: (
      <>
        <p>
          You agree to use our website and services only for lawful purposes
          and in a way that does not interfere with the operation, security,
          or availability of our services.
        </p>

        <p>You must not:</p>

        <ul>
          <li>
            Use our services to violate applicable laws or regulations.
          </li>
          <li>
            Attempt to gain unauthorized access to systems, accounts, or data.
          </li>
          <li>
            Introduce malicious code, malware, or other harmful material.
          </li>
          <li>
            Interfere with or disrupt our services or infrastructure.
          </li>
          <li>
            Misuse our products, intellectual property, or branding.
          </li>
          <li>
            Use our services in a way that infringes another person's rights.
          </li>
        </ul>
      </>
    ),
  },

  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, the MudBloom name, branding, website
          content, visual designs, software, graphics, text, and other
          materials provided by MudBloom are owned by or licensed to MudBloom
          and are protected by applicable intellectual property laws.
        </p>

        <p>
          You may not reproduce, modify, distribute, sell, or create derivative
          works from our materials without appropriate authorization.
        </p>
      </>
    ),
  },

  {
    id: "user-content",
    title: "5. User Content",
    content: (
      <>
        <p>
          Where a MudBloom product allows you to upload, submit, create, or
          otherwise provide content, you remain responsible for that content
          and for ensuring that you have the necessary rights to use it.
        </p>

        <p>
          You grant MudBloom only the permissions reasonably necessary to
          operate the relevant service, unless additional permissions are
          expressly agreed or described for that product.
        </p>
      </>
    ),
  },

  {
    id: "third-party",
    title: "6. Third-Party Services",
    content: (
      <>
        <p>
          Our website and products may link to or integrate with third-party
          services. Those services may have their own terms and policies.
        </p>

        <p>
          MudBloom is not responsible for third-party services that it does
          not control.
        </p>
      </>
    ),
  },

  {
    id: "availability",
    title: "7. Availability & Changes",
    content: (
      <>
        <p>
          We work to keep our website and services available and reliable, but
          we do not guarantee that they will always be available, uninterrupted,
          secure, or error-free.
        </p>

        <p>
          We may modify, suspend, discontinue, or update parts of our services
          when reasonably necessary, including for maintenance, security,
          product development, or operational reasons.
        </p>
      </>
    ),
  },

  {
    id: "disclaimer",
    title: "8. Disclaimer",
    content: (
      <>
        <p>
          Our website and services are provided on an “as available” basis to
          the extent permitted by applicable law.
        </p>

        <p>
          We do not make guarantees about specific results, uninterrupted
          availability, or that our services will meet every particular
          requirement.
        </p>
      </>
    ),
  },

  {
    id: "liability",
    title: "9. Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, MudBloom will not
          be liable for indirect, incidental, special, consequential, or
          exemplary damages arising from or related to your use of our website
          or services.
        </p>

        <p>
          Nothing in these Terms excludes or limits liability that cannot
          legally be excluded or limited under applicable law.
        </p>
      </>
    ),
  },

  {
    id: "termination",
    title: "10. Termination",
    content: (
      <>
        <p>
          We may restrict or terminate access to a service if we reasonably
          believe that you have violated these Terms, created a security risk,
          misused the service, or where termination is otherwise necessary for
          operational or legal reasons.
        </p>

        <p>
          Provisions that by their nature should survive termination will
          continue to apply.
        </p>
      </>
    ),
  },

  {
    id: "changes",
    title: "11. Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms from time to time. Updated Terms will be
          published on this page with a revised effective date.
        </p>

        <p>
          Your continued use of the relevant services after updated Terms are
          published constitutes acceptance of the updated Terms to the extent
          permitted by law.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    title: "12. Contact",
    content: (
      <>
        <p>
          If you have questions about these Terms or our services, contact us
          at:
        </p>

        <a
          href="mailto:contact@mudbloom.in"
          className="inline-flex text-[#E85D75] underline decoration-[#E85D75]/30 underline-offset-4 transition-colors hover:text-[#C9435D]"
        >
          contact@mudbloom.in
        </a>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] text-[#302A3D]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#302A3D]/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F1EBFF] blur-3xl"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-[-180px] h-96 w-96 rounded-full bg-[#FFE6EC] blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-8 lg:px-8 lg:pb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[#6F6878] transition-colors hover:text-[#302A3D]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to MudBloom
          </Link>

          <div className="mt-20 max-w-3xl lg:mt-28">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
              <FileText className="h-4 w-4 text-[#E85D75]" />
              Legal
            </div>

            <h1 className="mt-6 font-heading text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Terms of
              <br />
              <span className="text-[#E85D75]">Service.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[16px] leading-7 text-[#6F6878]">
              A simple outline of the rules that apply when you use MudBloom's
              website, products, and services.
            </p>

            <p className="mt-5 text-xs text-[#8A8390]">
              Last updated: September 20, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-20">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
                On this page
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-[12px] leading-5 text-[#7A7380] transition-colors hover:text-[#E85D75]"
                  >
                    {section.title.replace(/^\d+\.\s/, "")}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="max-w-3xl">
            <div className="rounded-[28px] border border-[#302A3D]/10 bg-white/50 p-7 sm:p-10 lg:p-12">
              <p className="mb-12 text-[15px] leading-7 text-[#6F6878]">
                These Terms apply generally to the MudBloom website and
                services. A particular MudBloom product may have additional
                terms that apply specifically to that product.
              </p>

              <div className="space-y-12">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-10 border-t border-[#302A3D]/10 pt-10 first:border-t-0 first:pt-0"
                  >
                    <h2 className="font-heading text-[22px] font-semibold tracking-[-0.025em] text-[#302A3D]">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-5 text-[14px] leading-7 text-[#6F6878] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}