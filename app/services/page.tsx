"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Smartphone,
  Globe2,
  Server,
  Palette,
  Layers3,
  Sparkles,
  Check,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const SOFT_EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: SOFT_EASE,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

const services = [
  {
    number: "01",
    title: "Mobile Apps",
    description:
      "Native-quality mobile experiences designed to feel natural, fast, and effortless to use.",
    icon: Smartphone,
    color: "#FFE6EC",
    iconColor: "#E85D75",
    items: [
      "iOS & Android applications",
      "React Native & Expo",
      "Authentication & user flows",
      "Payments & subscriptions",
      "Push notifications",
      "App Store & Play Store launch",
    ],
  },
  {
    number: "02",
    title: "Web Experiences",
    description:
      "Thoughtful websites and web applications that combine strong design with solid engineering.",
    icon: Globe2,
    color: "#EAF1E8",
    iconColor: "#344A3A",
    items: [
      "Marketing websites",
      "Web applications",
      "Landing pages",
      "SaaS platforms",
      "Responsive interfaces",
      "Performance optimization",
    ],
  },
  {
    number: "03",
    title: "Software Systems",
    description:
      "The infrastructure behind the experience—built to be reliable, maintainable, and ready to grow.",
    icon: Server,
    color: "#F1EBFF",
    iconColor: "#6D5A8E",
    items: [
      "Backend development",
      "REST APIs",
      "Database architecture",
      "Authentication & authorization",
      "Third-party integrations",
      "Cloud & deployment setup",
    ],
  },
  {
    number: "04",
    title: "Product Design",
    description:
      "Interfaces shaped around real people, real problems, and the moments that matter.",
    icon: Palette,
    color: "#FFF0E7",
    iconColor: "#C96B52",
    items: [
      "Product strategy",
      "UX & UI design",
      "Design systems",
      "User journeys",
      "Interactive prototypes",
      "Design-to-development",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F7] text-[#302A3D]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden">
        {/* Ambient shapes */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-44 top-20 h-[520px] w-[520px] rounded-full bg-[#EAF1E8]/80 blur-3xl"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-[-70px] h-[540px] w-[540px] rounded-full bg-[#F3DDD5]/60 blur-3xl"
        />

        <motion.div
          aria-hidden
          animate={{
            y: [0, -18, 0],
            rotate: [0, 4, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[8%] top-[32%] h-32 w-44 rounded-[60%_40%_55%_45%] bg-[#F3DDD5]/45"
        />

        <motion.div
          aria-hidden
          animate={{
            y: [0, 16, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-[12%] right-[7%] h-36 w-28 rounded-[45%_55%_40%_60%] bg-[#E9E4D6]/70"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 pb-24 pt-8 lg:px-8 lg:pb-32 -translate-y-20">
          

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-24 max-w-[1050px] lg:mt-32"
          >
            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#302A3D]/25" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6F6878]">
                What we do
              </span>

              <span className="h-px w-9 bg-[#302A3D]/25" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]"
            >
              Whatever the idea
              <br />
              needs,{" "}
              <span className="text-[#E85D75]">we build around it.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-2xl text-base leading-7 text-[#6F6878] sm:text-lg sm:leading-8"
            >
              From the first sketch to the final deployment, we combine
              product thinking, thoughtful design, and modern engineering to
              turn ideas into useful digital products.
            </motion.p>
          </motion.div>

          {/* Floating note */}
          <motion.div
            initial={{ opacity: 0, y: 15, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{
              delay: 0.9,
              duration: 1,
              ease: EASE,
            }}
            className="pointer-events-none absolute right-[8%] top-[30%] hidden lg:block"
          >
            <p className="font-serif text-[17px] italic leading-6 text-[#6F6878]">
              from idea
              <br />
              to something
              <br />
              people use.
            </p>

            <svg
              width="70"
              height="42"
              viewBox="0 0 70 42"
              fill="none"
              className="ml-[-5px] mt-1"
              aria-hidden="true"
            >
              <path
                d="M4 8C20 11 35 19 55 35"
                stroke="#6F6C65"
                strokeWidth="1"
                strokeLinecap="round"
              />

              <path
                d="M55 35L45 34M55 35L53 25"
                stroke="#6F6C65"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]">
                One studio
              </p>

              <h2 className="mt-5 max-w-sm font-heading text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.06em]">
                Design,
                <br />
                technology,
                <br />
                <span className="text-[#E85D75]">together.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-7"
            >
              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-[17px] leading-8 text-[#5F5967] sm:text-[19px] sm:leading-9"
              >
                A good digital product isn&apos;t just good design or good
                code. It&apos;s the relationship between the two.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-[15px] leading-7 text-[#77707D]"
              >
                That&apos;s why we bring product thinking, interface design,
                frontend development, backend engineering, and deployment into
                one connected process.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-[15px] leading-7 text-[#77707D]"
              >
                The result is less handoff, fewer layers, and a product that
                feels considered from the first screen to the systems running
                behind it.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#FFF9F7]"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]"
            >
              Capabilities
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-3xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.06em]"
            >
              Everything a product
              <br />
              needs to{" "}
              <span className="text-[#E85D75]">come alive.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-16 grid gap-5 md:grid-cols-2"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-[30px] border border-[#302A3D]/10 bg-white/55 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(48,42,61,0.08)] sm:p-9"
                >
                  {/* Decorative circle */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-70 blur-2xl transition-transform duration-700 group-hover:scale-125"
                    style={{
                      backgroundColor: service.color,
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: service.color,
                          color: service.iconColor,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-[10px] font-medium tracking-[0.15em] text-[#A19AA3]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-9 font-heading text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.045em]">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#716A76]">
                      {service.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#625C68]"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            style={{
                              color: service.iconColor,
                            }}
                          />

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FULL PRODUCT DEVELOPMENT
      ========================================================== */}
      <section className="border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]"
              >
                Full product development
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 max-w-2xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.06em]"
              >
                One idea.
                <br />
                <span className="text-[#E85D75]">One connected team.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-[15px] leading-7 text-[#6F6878] sm:text-lg sm:leading-8"
              >
                You don&apos;t always need separate designers, developers,
                backend engineers, and deployment teams. Sometimes you need
                one team that understands the whole product.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#344A3A] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(52,74,58,0.14)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2B3D30] hover:shadow-[0_25px_55px_rgba(52,74,58,0.2)]"
                >
                  Start a project

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Process visual */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[32px] border border-[#302A3D]/10 bg-white/65 p-7 shadow-[0_25px_70px_rgba(48,42,61,0.06)] backdrop-blur-sm sm:p-9">
                <div className="absolute left-[39px] top-[72px] bottom-[72px] w-px bg-[#302A3D]/10" />

                {[
                  {
                    number: "01",
                    title: "Discover",
                    text: "Understand the idea and the problem.",
                  },
                  {
                    number: "02",
                    title: "Design",
                    text: "Shape the experience and product.",
                  },
                  {
                    number: "03",
                    title: "Build",
                    text: "Turn the product into working software.",
                  },
                  {
                    number: "04",
                    title: "Launch",
                    text: "Put it in front of real people.",
                  },
                ].map((step) => (
                  <motion.div
                    key={step.number}
                    variants={cardVariants}
                    className="relative flex gap-6 py-5"
                  >
                    <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#302A3D]/10 bg-[#FFF9F7] text-[9px] font-semibold text-[#6F6878]">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-medium tracking-[-0.03em]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 text-sm leading-6 text-[#77707D]">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FLEXIBLE ENGAGEMENT
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9F7]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-[#F1EBFF]/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]"
              >
                How we can help
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 max-w-md font-heading text-[clamp(3rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]"
              >
                Bring us
                <br />
                in{" "}
                <span className="text-[#E85D75]">wherever.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-md text-[15px] leading-7 text-[#6F6878]"
              >
                Not every project needs the same kind of help. We can work
                across the entire product or step in exactly where you need us.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  icon: Sparkles,
                  title: "From scratch",
                  text: "You have an idea and need help turning it into a real product.",
                  bg: "#FFE6EC",
                  iconColor: "#E85D75",
                },
                {
                  icon: Layers3,
                  title: "Product build",
                  text: "You know what you want and need an experienced team to build it.",
                  bg: "#EAF1E8",
                  iconColor: "#344A3A",
                },
                {
                  icon: Palette,
                  title: "Design support",
                  text: "You need help shaping the interface, experience, or design system.",
                  bg: "#F1EBFF",
                  iconColor: "#6D5A8E",
                },
                {
                  icon: Server,
                  title: "Technical support",
                  text: "You need backend, APIs, integrations, infrastructure, or improvements.",
                  bg: "#FFF0E7",
                  iconColor: "#C96B52",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    className="rounded-[25px] border border-[#302A3D]/10 bg-white/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(48,42,61,0.07)]"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: item.bg,
                        color: item.iconColor,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 font-heading text-2xl font-medium tracking-[-0.035em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#756E7A]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="relative overflow-hidden border-t border-[#302A3D]/10 bg-[#302A3D] text-[#FFF9F7]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E85D75]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Have something worth building?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-heading text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em]">
            Let&apos;s make
            <br />
            <span className="text-[#E85D75]">something useful.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[15px] leading-7 text-white/55">
            Tell us what you&apos;re thinking. We&apos;ll figure out what it
            needs and where to start.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#FFF9F7] px-6 py-3.5 text-sm font-medium text-[#302A3D] transition-all duration-500 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          >
            Start a conversation

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#302A3D] text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          BOTTOM SIGNATURE
      ========================================================== */}
      <div className="border-t border-white/10 bg-[#302A3D]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>MudBloom</span>
          <span>Ideas → Products → People</span>
        </div>
      </div>
    </main>
  );
}