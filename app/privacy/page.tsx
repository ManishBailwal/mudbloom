import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const sections = [
  {
    id: "information",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you interact with MudBloom, we may collect information that you
          provide directly to us, information collected automatically when you
          use our website, and information provided to us through our products
          or services.
        </p>

        <h3>Information you provide</h3>

        <p>
          This may include your name, email address, phone number, company
          information, project details, messages, and any other information
          you choose to provide when contacting us or using our services.
        </p>

        <h3>Information collected automatically</h3>

        <p>
          When you visit our website, certain technical information may be
          collected automatically, such as your IP address, browser type,
          device information, operating system, referring pages, and general
          usage information.
        </p>

        <p>
          We may use cookies or similar technologies where necessary to
          operate, secure, understand, and improve our website.
        </p>
      </>
    ),
  },

  {
    id: "use",
    title: "2. How We Use Information",
    content: (
      <>
        <p>
          We use information we collect for purposes such as:
        </p>

        <ul>
          <li>Responding to enquiries and communications.</li>
          <li>Providing and improving our products and services.</li>
          <li>Understanding how our website and products are used.</li>
          <li>Maintaining security and preventing misuse.</li>
          <li>Operating, maintaining, and improving our systems.</li>
          <li>Complying with applicable legal obligations.</li>
        </ul>

        <p>
          We only use information for legitimate business purposes and in
          accordance with applicable law.
        </p>
      </>
    ),
  },

  {
    id: "sharing",
    title: "3. When We Share Information",
    content: (
      <>
        <p>
          We do not sell your personal information.
        </p>

        <p>
          We may share information with trusted service providers who help us
          operate our website, products, infrastructure, communications, or
          business operations. These providers are expected to process
          information only for the purposes for which it is provided and in
          accordance with applicable requirements.
        </p>

        <p>
          We may also disclose information when required by law, legal
          process, regulatory requirements, or when reasonably necessary to
          protect our rights, users, systems, or property.
        </p>
      </>
    ),
  },

  {
    id: "cookies",
    title: "4. Cookies & Similar Technologies",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to provide
          essential functionality, understand website usage, remember
          preferences, and improve the experience.
        </p>

        <p>
          Depending on the technologies enabled on our website, you may be
          able to control certain cookies through your browser or available
          consent controls.
        </p>
      </>
    ),
  },

  {
    id: "third-party",
    title: "5. Third-Party Services",
    content: (
      <>
        <p>
          Our website and products may contain links to or integrations with
          third-party services. Those services operate independently and may
          have their own privacy policies and terms.
        </p>

        <p>
          MudBloom is not responsible for the privacy practices of third-party
          websites or services that we do not control.
        </p>
      </>
    ),
  },

  {
    id: "security",
    title: "6. Data Security",
    content: (
      <>
        <p>
          We take reasonable technical and organizational measures designed to
          protect information against unauthorized access, alteration,
          disclosure, or destruction.
        </p>

        <p>
          However, no method of transmission or electronic storage is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </>
    ),
  },

  {
    id: "retention",
    title: "7. Data Retention",
    content: (
      <>
        <p>
          We retain information only for as long as reasonably necessary for
          the purposes described in this Privacy Policy, including providing
          services, maintaining business records, resolving disputes,
          enforcing agreements, and complying with legal obligations.
        </p>
      </>
    ),
  },

  {
    id: "rights",
    title: "8. Your Rights",
    content: (
      <>
        <p>
          Depending on applicable law and your circumstances, you may have
          rights relating to your personal information, including rights to
          access, correct, update, or request deletion of certain information.
        </p>

        <p>
          To make a privacy-related request, contact us using the information
          provided below. We may need to verify your identity before
          completing certain requests.
        </p>
      </>
    ),
  },

  {
    id: "children",
    title: "9. Children's Privacy",
    content: (
      <>
        <p>
          Our website and services are not intentionally directed toward
          children where applicable law requires parental consent. We do not
          knowingly collect personal information from children in violation of
          applicable law.
        </p>
      </>
    ),
  },

  {
    id: "changes",
    title: "10. Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services, technology, business practices, or legal
          requirements.
        </p>

        <p>
          When we make changes, we will update the effective date shown at the
          top of this page.
        </p>
      </>
    ),
  },

  {
    id: "contact",
    title: "11. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how MudBloom
          handles information, you can contact us at:
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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] text-[#302A3D]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#302A3D]/10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#EAF8EF] blur-3xl"
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
              <ShieldCheck className="h-4 w-4 text-[#E85D75]" />
              Privacy
            </div>

            <h1 className="mt-6 font-heading text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              Privacy
              <br />
              <span className="text-[#E85D75]">Policy.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-[16px] leading-7 text-[#6F6878]">
              We believe technology should be useful without making privacy
              complicated. This policy explains what information we collect,
              why we use it, and how we handle it.
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
                This Privacy Policy applies to the MudBloom website and,
                where applicable, products and services operated by MudBloom.
                Specific products may provide additional privacy notices where
                their data practices differ.
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

                    <div className="mt-5 space-y-5 text-[14px] leading-7 text-[#6F6878] [&_h3]:pt-2 [&_h3]:font-semibold [&_h3]:text-[#302A3D] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
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