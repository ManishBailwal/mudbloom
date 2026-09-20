"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
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
    y: 35,
    filter: "blur(7px)",
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

const products = [
  {
    name: "Nostalzic",
    category: "Memory & Lifestyle",
    tagline: "Turn moments into memories.",
    description:
      "A beautiful way to preserve the moments that matter. Nostalzic transforms everyday memories into timelines, stories, and keepsakes worth holding onto.",
    image: "/nostalzic.png",
    href: "https://nostalzic.com",
    external: true,
    background: "#FFE6EC",
    accent: "#E85D75",
    number: "01",
    tags: ["Mobile App", "Memory", "Lifestyle"],
  },
  {
    name: "BrainCircuit",
    category: "AI & Productivity",
    tagline: "Ask your documents anything.",
    description:
      "An intelligent document experience designed to help people understand, explore, and interact with their information in a more natural way.",
    image: "/braincircuit.png",
    href: "#",
    external: false,
    background: "#EAF1E8",
    accent: "#344A3A",
    number: "02",
    tags: ["AI", "Documents", "Productivity"],
  },
  {
    name: "Webmetraq",
    category: "Web & Identity",
    tagline: "Build your corner of the web.",
    description:
      "A simpler approach to creating a personal digital presence—giving people a place on the web that feels genuinely theirs.",
    image: "/webmetraq.png",
    href: "#",
    external: false,
    background: "#F1EBFF",
    accent: "#6D5A8E",
    number: "03",
    tags: ["Web", "Identity", "Creator"],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F7] text-[#302A3D]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden">
        {/* Ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-44 top-20 h-[520px] w-[520px] rounded-full bg-[#EAF1E8]/80 blur-3xl"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-[-80px] h-[560px] w-[560px] rounded-full bg-[#F3DDD5]/60 blur-3xl"
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
          className="pointer-events-none absolute left-[8%] top-[30%] h-32 w-44 rounded-[60%_40%_55%_45%] bg-[#F3DDD5]/45"
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
                Products by MudBloom
              </span>

              <span className="h-px w-9 bg-[#302A3D]/25" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]"
            >
              Ideas we turned
              <br />
              into{" "}
              <span className="text-[#E85D75]">products.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-10 max-w-2xl text-base leading-7 text-[#6F6878] sm:text-lg sm:leading-8"
            >
              We don&apos;t only build products for others. We explore our own
              ideas too—turning small observations, problems, and possibilities
              into digital products people can actually use.
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
            className="pointer-events-none absolute right-[8%] top-[31%] hidden lg:block"
          >
            <p className="font-serif text-[17px] italic leading-6 text-[#6F6878]">
              ideas become
              <br />
              things when
              <br />
              you build them.
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
          INTRO STRIP
      ========================================================== */}
      <section className="border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]">
                Our product philosophy
              </p>

              <h2 className="mt-4 max-w-2xl font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.94] tracking-[-0.055em]">
                Build things you&apos;d
                <br />
                <span className="text-[#E85D75]">want to use yourself.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-md text-[15px] leading-7 text-[#6F6878] lg:pb-1"
            >
              Every MudBloom product starts with a simple question: can this
              be made more useful, more thoughtful, or simply more human?
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9F7]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="space-y-8">
            {products.map((product, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <motion.article
                  key={product.name}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  className="group relative overflow-hidden rounded-[34px] border border-[#302A3D]/10 bg-white/50 transition-all duration-700 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(48,42,61,0.08)]"
                >
                  <div
                    className={`grid lg:grid-cols-2 ${
                      isReverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* Product visual */}
                    <div
                      className="relative min-h-[400px] overflow-hidden sm:min-h-[500px] lg:min-h-[600px]"
                      style={{
                        backgroundColor: product.background,
                      }}
                    >
                      {/* Decorative blobs */}
                      <div
                        aria-hidden
                        className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl transition-transform duration-1000 group-hover:scale-125"
                        style={{
                          backgroundColor: product.accent,
                        }}
                      />

                      <div
                        aria-hidden
                        className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/50 blur-3xl"
                      />

                      {/* Number */}
                      <span className="absolute left-7 top-7 z-20 text-[10px] font-semibold tracking-[0.2em] text-[#302A3D]/40 sm:left-9 sm:top-9">
                        {product.number}
                      </span>

                      {/* Product image */}
                      <div className="absolute inset-8 flex items-center justify-center sm:inset-12 lg:inset-16">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.96, y: 10 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{
                            duration: 1.1,
                            ease: EASE,
                          }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src={product.image}
                            alt={`${product.name} product`}
                            fill
                            sizes="(max-width: 1024px) 90vw, 50vw"
                            className="object-contain drop-shadow-[0_30px_40px_rgba(48,42,61,0.12)] transition-transform duration-1000 group-hover:scale-[1.035]"
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor: product.accent,
                            }}
                          />

                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
                            {product.category}
                          </span>
                        </div>

                        <h2 className="mt-6 font-heading text-[clamp(3rem,5vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                          {product.name}
                        </h2>

                        <p
                          className="mt-5 font-heading text-xl font-medium leading-7 tracking-[-0.025em] sm:text-2xl"
                          style={{
                            color: product.accent,
                          }}
                        >
                          {product.tagline}
                        </p>

                        <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#716A76]">
                          {product.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-7 flex flex-wrap gap-2">
                          {product.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[#302A3D]/10 bg-[#FFF9F7]/70 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#77707D]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-9">
                          {product.external ? (
                            <a
                              href={product.href}
                              target="_blank"
                              rel="noreferrer"
                              className="group/link inline-flex items-center gap-3 rounded-full border border-[#302A3D]/15 bg-white px-5 py-3 text-sm font-medium text-[#302A3D] transition-all duration-400 hover:-translate-y-0.5 hover:border-[#E85D75]/30 hover:shadow-lg"
                            >
                              Visit {product.name}

                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#302A3D] text-white transition-transform duration-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                                <ExternalLink className="h-3.5 w-3.5" />
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={product.href}
                              className="group/link inline-flex items-center gap-3 rounded-full border border-[#302A3D]/15 bg-white px-5 py-3 text-sm font-medium text-[#302A3D] transition-all duration-400 hover:-translate-y-0.5 hover:border-[#E85D75]/30 hover:shadow-lg"
                            >
                              Explore {product.name}

                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#302A3D] text-white transition-transform duration-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SMALL MANIFESTO
      ========================================================== */}
      <section className="border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE6EC] text-[#E85D75]"
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 font-serif text-lg italic text-[#77707D]"
            >
              We&apos;re curious about what could exist.
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 font-heading text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.065em]"
            >
              Not everything has
              <br />
              to be built.
              <br />
              <span className="text-[#E85D75]">
                But the right things should be.
              </span>
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MORE THAN PRODUCTS
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#FFF9F7]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAF1E8]/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]"
              >
                Looking for something else?
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 max-w-xl font-heading text-[clamp(3rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]"
              >
                Maybe your idea
                <br />
                should be{" "}
                <span className="text-[#E85D75]">next.</span>
              </motion.h2>
            </div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-end"
            >
              <p className="max-w-lg text-[15px] leading-7 text-[#6F6878] sm:text-lg sm:leading-8">
                We&apos;re always interested in interesting problems. If you
                have an idea that doesn&apos;t fit into anything you&apos;ve
                seen here, that&apos;s okay.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#344A3A] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(52,74,58,0.14)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2B3D30] hover:shadow-[0_25px_55px_rgba(52,74,58,0.2)]"
              >
                Tell us your idea

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FOOTER SIGNATURE
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