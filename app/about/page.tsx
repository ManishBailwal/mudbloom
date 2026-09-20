"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Lightbulb,
  Layers3,
  Sprout,
  Heart,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const SOFT_EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
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
      duration: 1.15,
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
      duration: 1,
      ease: EASE,
    },
  },
};

export default function AboutPage() {
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
          className="pointer-events-none absolute -right-40 top-[-80px] h-[540px] w-[540px] rounded-full bg-[#F3DDD5]/60 blur-3xl"
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
          className="pointer-events-none absolute left-[9%] top-[30%] h-32 w-44 rounded-[60%_40%_55%_45%] bg-[#F3DDD5]/45"
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
          className="pointer-events-none absolute bottom-[10%] right-[7%] h-36 w-28 rounded-[45%_55%_40%_60%] bg-[#E9E4D6]/70"
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
                About MudBloom
              </span>

              <span className="h-px w-9 bg-[#302A3D]/25" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]"
            >
              We turn good ideas
              <br />
              into{" "}
              <span className="text-[#E85D75]">useful things.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-2xl text-base leading-7 text-[#6F6878] sm:text-lg sm:leading-8"
            >
              MudBloom is an independent software studio building thoughtful
              digital products, mobile apps, web experiences, and software
              systems for people and businesses with something worth building.
            </motion.p>
          </motion.div>

          {/* Handwritten note */}
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
              ideas need
              <br />
              somewhere
              <br />
              to grow.
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
          PHILOSOPHY
      ========================================================== */}
      <section className="relative border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]">
                What we believe
              </p>

              <h2 className="mt-5 max-w-sm font-heading text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.06em]">
                Technology should feel{" "}
                <span className="text-[#E85D75]">human.</span>
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
                We believe software should solve real problems without making
                life feel more complicated.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-[15px] leading-7 text-[#77707D]"
              >
                That means thoughtful interfaces, useful technology, clear
                communication, and products that respect the people using
                them.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl text-[15px] leading-7 text-[#77707D]"
              >
                We care about the details, but never for the sake of details.
                Every interaction, screen, system, and decision should have a
                reason to exist.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="pt-5 font-serif text-lg italic text-[#6F6878]"
              >
                Less noise. More usefulness.
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THINK / BUILD / GROW
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9F7]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]"
            >
              How we work
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-3xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.06em]"
            >
              Think.
              <br />
              Build.
              <br />
              <span className="text-[#E85D75]">Grow.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-3"
          >
            {/* Think */}
            <motion.div
              variants={cardVariants}
              className="group rounded-[28px] border border-[#302A3D]/10 bg-[#EAF1E8]/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#EAF1E8]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#344A3A]">
                <Lightbulb className="h-5 w-5" />
              </div>

              <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718073]">
                01
              </p>

              <h3 className="mt-2 font-heading text-3xl font-medium tracking-[-0.04em]">
                Think
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-[#687168]">
                Understand the problem before jumping into the solution. We
                explore ideas, users, constraints, and what actually needs to
                be built.
              </p>
            </motion.div>

            {/* Build */}
            <motion.div
              variants={cardVariants}
              className="group rounded-[28px] border border-[#302A3D]/10 bg-[#FFE6EC]/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#FFE6EC]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#E85D75]">
                <Layers3 className="h-5 w-5" />
              </div>

              <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9B6672]">
                02
              </p>

              <h3 className="mt-2 font-heading text-3xl font-medium tracking-[-0.04em]">
                Build
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-[#806A72]">
                Turn the idea into something real. From interfaces and mobile
                apps to web platforms and backend systems, we build with
                purpose.
              </p>
            </motion.div>

            {/* Grow */}
            <motion.div
              variants={cardVariants}
              className="group rounded-[28px] border border-[#302A3D]/10 bg-[#F1EBFF]/75 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#F1EBFF]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-[#6D5A8E]">
                <Sprout className="h-5 w-5" />
              </div>

              <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817595]">
                03
              </p>

              <h3 className="mt-2 font-heading text-3xl font-medium tracking-[-0.04em]">
                Grow
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-[#756B82]">
                Launching is only the beginning. We think about feedback,
                iteration, performance, and how a product can become more
                useful over time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE BUILD
      ========================================================== */}
      <section className="border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]">
                What we build
              </p>

              <h2 className="mt-5 max-w-lg font-heading text-[clamp(3rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                From first idea
                <br />
                to{" "}
                <span className="text-[#E85D75]">real product.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-3"
            >
              {[
                "Mobile applications",
                "Web experiences",
                "SaaS products",
                "Software systems",
                "Product design",
                "Digital experiences",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  variants={cardVariants}
                  className="group flex items-center justify-between border-b border-[#302A3D]/10 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-medium tracking-[0.15em] text-[#9A929C]">
                      0{index + 1}
                    </span>

                    <span className="font-heading text-xl tracking-[-0.025em] text-[#302A3D] sm:text-2xl">
                      {item}
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-[#8A8390] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E85D75]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR PRODUCTS
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9F7]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#EAF1E8]/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
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
              Made by MudBloom
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-3xl font-heading text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.06em]"
            >
              We don&apos;t just build
              <br />
              for others.
              <br />
              <span className="text-[#E85D75]">We build our own.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-[15px] leading-7 text-[#6F6878] sm:text-lg sm:leading-8"
            >
              MudBloom is also a place where our own ideas become products.
              Each one starts with a problem, a curiosity, or a simple thought
              about how something could work better.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >
            <motion.div
              variants={cardVariants}
              className="rounded-[28px] border border-[#302A3D]/10 bg-white/60 p-7 backdrop-blur-sm"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
                Nostalzic
              </p>

              <h3 className="mt-4 font-heading text-3xl font-medium tracking-[-0.04em]">
                Turn moments into memories.
              </h3>

              <p className="mt-5 text-sm leading-6 text-[#756E7A]">
                A memory timeline designed to turn meaningful moments into
                stories and keepsakes.
              </p>

              <a
                href="https://nostalzic.com"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#302A3D]"
              >
                Visit Nostalzic
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="rounded-[28px] border border-[#302A3D]/10 bg-[#EAF1E8]/70 p-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718073]">
                BrainCircuit
              </p>

              <h3 className="mt-4 font-heading text-3xl font-medium tracking-[-0.04em]">
                Ask your documents anything.
              </h3>

              <p className="mt-5 text-sm leading-6 text-[#687168]">
                Intelligent document interaction designed to make information
                easier to understand and work with.
              </p>

              <Link
                href="/products/braincircuit"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#344A3A]"
              >
                Explore product
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="rounded-[28px] border border-[#302A3D]/10 bg-[#F1EBFF]/70 p-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#817595]">
                Webmetraq
              </p>

              <h3 className="mt-4 font-heading text-3xl font-medium tracking-[-0.04em]">
                Build your corner of the web.
              </h3>

              <p className="mt-5 text-sm leading-6 text-[#756B82]">
                A simpler way to create a digital presence that feels like
                your own.
              </p>

              <Link
                href="/products/webmetraq"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#6D5A8E]"
              >
                Explore product
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section className="border-t border-[#302A3D]/10 bg-[#302A3D] text-[#FFF9F7]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                Our principles
              </p>

              <h2 className="mt-5 max-w-md font-heading text-[clamp(3rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Things we
                <br />
                <span className="text-[#E85D75]">care about.</span>
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-10 sm:grid-cols-2"
            >
              {[
                {
                  title: "Useful over flashy",
                  text: "Beautiful is good. Useful is essential. We want both.",
                },
                {
                  title: "Clarity over complexity",
                  text: "Good products make complicated things feel simpler.",
                },
                {
                  title: "Details matter",
                  text: "Small interactions can change how an entire product feels.",
                },
                {
                  title: "Build with care",
                  text: "Technology is something people live with. We treat it that way.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  className="border-t border-white/10 pt-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium tracking-[0.15em] text-white/35">
                      0{index + 1}
                    </span>

                    <Heart className="h-3.5 w-3.5 text-[#E85D75]" />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9F7]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAF1E8]/65 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A8390]">
            Have something in mind?
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-heading text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em]">
            Good ideas need
            <br />
            <span className="text-[#E85D75]">room to grow.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[15px] leading-7 text-[#6F6878]">
            Tell us what you&apos;re thinking. It doesn&apos;t have to be
            finished. It just has to be worth exploring.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#344A3A] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(52,74,58,0.14)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2B3D30] hover:shadow-[0_25px_55px_rgba(52,74,58,0.2)]"
          >
            Start a conversation

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          BOTTOM SIGNATURE
      ========================================================== */}
      <div className="border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-6 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8A8390] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>MudBloom</span>
          <span>Ideas → Products → People</span>
        </div>
      </div>
    </main>
  );
}