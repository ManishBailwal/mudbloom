"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

type ServiceKey = "default" | "mobile" | "web" | "software";

/* ============================================================
   CONSTANTS
============================================================ */

const EASE = [0.16, 1, 0.3, 1] as const;
const SOFT_EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE_IMAGES: Record<
  ServiceKey,
  {
    src: string;
    alt: string;
  }
> = {
  default: {
    src: "/heroImage1.avif",
    alt: "MudBloom — Ideas take root here",
  },

  mobile: {
    src: "/heroImage2.avif",
    alt: "MudBloom mobile applications",
  },

  web: {
    src: "/heroImage3.avif",
    alt: "MudBloom web experiences",
  },

  software: {
    src: "/heroImage4.avif",
    alt: "MudBloom software solutions",
  },
};

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const heroContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(9px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 2,
      ease: SOFT_EASE,
    },
  },
};

const headingLine: Variants = {
  hidden: {
    y: "110%",
  },

  show: {
    y: 0,
    transition: {
      duration: 3,
      ease: EASE,
    },
  },
};

const visualContainer: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.93,
    y: 45,
    filter: "blur(12px)",
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.7,
      delay: 0.45,
      ease: EASE,
    },
  },
};

/* ============================================================
   SERVICE CARD
============================================================ */

function ServiceCard({
  title,
  description,
  icon,
  active,
  onHover,
  onLeave,
  onClick,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onClick={onClick}
      className={`
        absolute ${className}
        z-30 flex w-[205px] items-center gap-3
        rounded-2xl border px-4 py-3.5 text-left
        backdrop-blur-xl
        transition-all duration-500 cursor-pointer hover:px-6 hover:py-5
        ${
          active
            ? "border-brand/20 bg-white shadow-[0_22px_60px_rgba(52,74,58,0.16)]"
            : "border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(24,24,23,0.10)] hover:-translate-y-1 hover:bg-white"
        }
      `}
    >
      {/* Icon */}

      <div
        className={`
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-xl transition-all duration-300
          ${
            active
              ? "bg-brand text-white"
              : "bg-brand-light text-brand"
          }
        `}
      >
        {icon}
      </div>

      {/* Content */}

      <div className="min-w-0">
        <p className="font-heading text-[13px] font-semibold tracking-[-0.02em] text-text-primary">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] leading-4 text-text-secondary">
          {description}
        </p>
      </div>

      {/* Active indicator */}

      <span
        className={`
          absolute right-3 top-3 h-1.5 w-1.5 rounded-full
          transition-all duration-300
          ${active ? "bg-accent opacity-100" : "opacity-0"}
        `}
      />
    </button>
  );
}

/* ============================================================
   HERO
============================================================ */

export default function Hero() {
  const [activeService, setActiveService] =
    useState<ServiceKey>("default");

  const activeImage = SERVICE_IMAGES[activeService];

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-brand-light/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#F3DDD5]/50 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1280px] -translate-y-4 lg:-translate-y-12 items-center gap-10 px-6 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative z-20"
        >
          {/* =================================================
              BADGE
          ================================================== */}

          <motion.div
            variants={heroItem}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur-sm"
          >
            <motion.span
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.75,
                duration: 0.7,
                ease: SOFT_EASE,
              }}
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />

            <span className="text-xs font-medium uppercase tracking-[0.16em] text-text-secondary">
              Independent software studio
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h1
            initial="hidden"
            animate="show"
            className="font-heading text-[clamp(3.5rem,7vw,7.2rem)] font-medium leading-[0.94] tracking-[-0.065em] text-text-primary"
          >
            {/* Line 1 */}

            <span className="block overflow-hidden">
              <motion.span
                variants={headingLine}
                className="block"
              >
                We build
              </motion.span>
            </span>

            {/* Line 2 */}

            <span className="block overflow-hidden">
              <motion.span
                variants={headingLine}
                transition={{
                  delay: 0.18,
                  duration: 1.5,
                  ease: EASE,
                }}
                className="block text-brand"
              >
                digital products
              </motion.span>
            </span>

            {/* Line 3 */}

            <span className="block overflow-hidden">
              <motion.span
                variants={headingLine}
                transition={{
                  delay: 0.36,
                  duration: 1.5,
                  ease: EASE,
                }}
                className="block"
              >
                worth using.
              </motion.span>
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            variants={heroItem}
            className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl"
          >
            We design and build mobile apps, web experiences,
            and software that turn ideas into products people
            actually want to use.
          </motion.p>

          {/* =================================================
              ACTIONS
          ================================================== */}

          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#products"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2B3D30] hover:shadow-xl hover:shadow-brand/10"
            >
              Explore our products

              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface/70 px-6 py-3.5 text-sm font-medium text-text-primary backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-surface"
            >
              Work with us
            </Link>
          </motion.div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}

          <motion.div
            variants={heroItem}
            className="mt-14 flex items-center gap-4"
          >
            <motion.span
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 40,
                opacity: 1,
              }}
              transition={{
                delay: 1.7,
                duration: 1,
                ease: SOFT_EASE,
              }}
              className="h-px bg-text-primary/30"
            />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-text-secondary">
              From idea&nbsp; → &nbsp;product&nbsp; → &nbsp;people
            </span>
          </motion.div>
        </motion.div>

        {/* =================================================
            DESKTOP RIGHT VISUAL
        ================================================== */}

        <motion.div
          variants={visualContainer}
          initial="hidden"
          animate="show"
          className="relative hidden h-[620px] lg:order-2 lg:block lg:-translate-y-16"
        >
          {/* =================================================
              ORGANIC BACKGROUND SHAPES
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.7, 0.8, 0.7],
            }}
            transition={{
              duration: 10,


              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[17%] top-[12%] h-[390px] w-[390px] rounded-full bg-brand-light/70 blur-[1px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[1%] top-[21%] h-[330px] w-[330px] rounded-full bg-[#F3DDD5]/80"
          />

          <div className="absolute bottom-[10%] left-[28%] h-[250px] w-[250px] rounded-full bg-[#E9E4D6]/70 blur-2xl" />

          {/* =================================================
              ORBIT LINES
          ================================================== */}

          <motion.div
            animate={{
              rotate: [28, 29, 28],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[4%] top-[24%] h-[430px] w-[430px] rounded-[48%] border border-brand/15"
          />

          <motion.div
            animate={{
              rotate: [28, 27, 28],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[13%] top-[19%] h-[490px] w-[300px] rounded-[50%] border border-accent/25"
          />

          <div className="absolute left-[19%] top-[9%] h-[550px] w-[210px] rotate-[28deg] rounded-[50%] border border-brand/10" />

          {/* =================================================
              ORBIT DOTS
          ================================================== */}

          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[10%] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_7px_rgba(201,107,82,0.08)]"
          />

          <motion.span
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[23%] left-[7%] h-2.5 w-2.5 rounded-full bg-brand/60 shadow-[0_0_0_7px_rgba(52,74,58,0.08)]"
          />

          {/* =================================================
              MOBILE APPS
          ================================================== */}

          <ServiceCard
            title="Mobile Apps"
            description="Ideas in your pocket."
            active={activeService === "mobile"}
            onHover={() => setActiveService("mobile")}
            onLeave={() => setActiveService("default")}
            onClick={() => setActiveService("mobile")}
            className="left-[7%] top-[18%] rotate-[-3deg]"
            icon={
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="6"
                  y="2.5"
                  width="12"
                  height="19"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M10 18.5H14"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            }
          />

          {/* =================================================
              WEB EXPERIENCES
          ================================================== */}

          <ServiceCard
            title="Web Experiences"
            description="Products people love."
            active={activeService === "web"}
            onHover={() => setActiveService("web")}
            onLeave={() => setActiveService("default")}
            onClick={() => setActiveService("web")}
            className="left-[0%] top-[43%] rotate-[2deg]"
            icon={
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M8 21H16M12 18V21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M6 8H18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            }
          />

          {/* =================================================
              SOFTWARE SOLUTIONS
          ================================================== */}

          <ServiceCard
            title="Software Solutions"
            description="Built for what's next."
            active={activeService === "software"}
            onHover={() => setActiveService("software")}
            onLeave={() => setActiveService("default")}
            onClick={() => setActiveService("software")}
            className="left-[8%] top-[67%] rotate-[-2deg]"
            icon={
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />

                <path
                  d="M4 7.5L12 12L20 7.5M12 12V21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          {/* =================================================
              MAIN IMAGE CARD
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [6, 6.5, 6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[2%] top-[20%] z-10 h-[390px] w-[285px] overflow-hidden rounded-[28px] border border-white/80 bg-[#F8F4EA] shadow-[0_30px_80px_rgba(24,24,23,0.16)]"
          >
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority={activeService === "default"}
              sizes="285px"
              className="object-cover transition-all duration-1000"
            />

            {/* Soft overlay */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />

            {/* Active service indicator */}

            {activeService !== "default" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  ease: SOFT_EASE,
                }}
                className="absolute bottom-5 left-5 right-5 z-10"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-text-primary">
                    {activeService === "mobile"
                      ? "Mobile Apps"
                      : activeService === "web"
                        ? "Web Experiences"
                        : "Software Solutions"}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* =================================================
              THOUGHTFUL TECHNOLOGY NOTE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              rotate: -4,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: -8,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 1.35,
              duration: 1.1,
              ease: SOFT_EASE,
            }}
            className="absolute right-[0%] top-[5%] z-30"
          >
            <p className="font-serif text-[16px] italic text-text-secondary">
              Thoughtful
              <br />
              technology
            </p>

            <svg
              width="75"
              height="45"
              viewBox="0 0 75 45"
              fill="none"
              className="ml-[-10px] mt-[-3px]"
              aria-hidden="true"
            >
              <path
                d="M68 5C52 12 39 25 30 39"
                stroke="#6F6C65"
                strokeWidth="1"
                strokeLinecap="round"
              />

              <path
                d="M30 39L31 29M30 39L39 37"
                stroke="#6F6C65"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* =================================================
              BOTTOM RIGHT STATEMENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 1.45,
              duration: 1.1,
              ease: SOFT_EASE,
            }}
            className="absolute bottom-[5%] right-[2%] z-20 max-w-[145px]"
          >
            <div className="mb-3 h-px w-7 bg-brand/30" />

            <p className="text-[9px] font-medium uppercase leading-4 tracking-[0.18em] text-text-secondary">
              Technology
              <br />
              with a more
              <br />
              human tomorrow
            </p>
          </motion.div>

          {/* =================================================
              DECORATIVE LEAF
          ================================================== */}

          <motion.div
            animate={{
              rotate: [30, 33, 30],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-10 -right-20 h-40 w-40 rounded-[100%_0_100%_0] bg-brand/10 blur-sm"
          />
        </motion.div>

        {/* =================================================
            MOBILE IMAGE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.45,
            duration: 1.5,
            ease: EASE,
          }}
          className="relative order-1 mt-0 h-[420px] lg:order-3 lg:hidden"
        >
          {/* Background */}

          <div className="absolute inset-x-8 top-0 h-[360px] rounded-[30px] bg-brand-light/60 blur-2xl" />

          {/* Image */}

          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [3, 3.5, 3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-5 h-[350px] w-[260px] -translate-x-1/2 overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_25px_60px_rgba(24,24,23,0.14)]"
          >
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="260px"
              className="object-cover transition-all duration-1000"
            />
          </motion.div>

          {/* Mobile service selector */}

          <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveService("mobile")}
              className={`rounded-full px-3 py-2 text-[10px] font-medium transition ${
                activeService === "mobile"
                  ? "bg-brand text-white"
                  : "border border-border bg-white/80 text-text-secondary"
              }`}
            >
              Mobile
            </button>

            <button
              type="button"
              onClick={() => setActiveService("web")}
              className={`rounded-full px-3 py-2 text-[10px] font-medium transition ${
                activeService === "web"
                  ? "bg-brand text-white"
                  : "border border-border bg-white/80 text-text-secondary"
              }`}
            >
              Web
            </button>

            <button
              type="button"
              onClick={() => setActiveService("software")}
              className={`rounded-full px-3 py-2 text-[10px] font-medium transition ${
                activeService === "software"
                  ? "bg-brand text-white"
                  : "border border-border bg-white/80 text-text-secondary"
              }`}
            >
              Software
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}