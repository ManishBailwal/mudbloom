"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
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
      duration: 1.2,
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

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F7] text-[#302A3D]">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden">
        {/* Ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-[#EAF1E8]/80 blur-3xl"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-[-40px] h-[520px] w-[520px] rounded-full bg-[#F3DDD5]/60 blur-3xl"
        />

        <motion.div
          aria-hidden
          animate={{
            y: [0, -16, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[8%] top-[28%] h-28 w-40 rounded-[60%_40%_55%_45%] bg-[#F3DDD5]/50"
        />

        <motion.div
          aria-hidden
          animate={{
            y: [0, 18, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-[12%] right-[8%] h-36 w-28 rounded-[45%_55%_40%_60%] bg-[#E9E4D6]/70"
        />

        {/* Content */}
        <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-8 lg:px-8 lg:pb-28 -translate-y-20">
         

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-24 max-w-[950px] lg:mt-32"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-[#302A3D]/25" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6F6878]">
                Start a conversation
              </span>

              <span className="h-px w-9 bg-[#302A3D]/25" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-[clamp(4rem,9vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]"
            >
              Let&apos;s build
              <br />
              <span className="text-[#E85D75]">something useful.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-9 max-w-2xl text-base leading-7 text-[#6F6878] sm:text-lg sm:leading-8"
            >
              Have an idea, a problem worth solving, or a product that needs
              to grow? Tell us what you&apos;re thinking. We&apos;ll take it
              from there.
            </motion.p>
          </motion.div>

          {/* Decorative note */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              rotate: 4,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 3,
            }}
            transition={{
              delay: 0.9,
              duration: 1,
              ease: EASE,
            }}
            className="pointer-events-none absolute right-[8%] top-[28%] hidden lg:block"
          >
            <p className="font-serif text-[17px] italic leading-6 text-[#6F6878]">
              good ideas
              <br />
              need room
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
          CONTACT DETAILS
      ========================================================== */}

      <section className="relative border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* Left */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <motion.p
                variants={fadeUp}
                className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8390]"
              >
                Tell us about it
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-5 max-w-md font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.055em] text-[#302A3D]"
              >
                Start with
                <br />
                <span className="text-[#E85D75]">an idea.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-md text-[15px] leading-7 text-[#6F6878]"
              >
                You don&apos;t need a complete brief. A rough idea, a sketch,
                a question, or even a problem you&apos;re trying to understand
                is enough to start a conversation.
              </motion.p>

              {/* Email CTA */}
              <motion.a
                variants={fadeUp}
                href="mailto:hello@mudbloom.in"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#344A3A] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(52,74,58,0.14)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#2B3D30] hover:shadow-[0_25px_55px_rgba(52,74,58,0.2)]"
              >
                Email us

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {/* Email */}
              <motion.a
                variants={cardVariants}
                href="mailto:contact@mudbloom.in"
                className="group rounded-[24px] border border-[#302A3D]/10 bg-white/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(48,42,61,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFE6EC] text-[#E85D75]">
                  <Mail className="h-5 w-5" />
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
                  General enquiries
                </p>

                <p className="mt-2 break-all text-[15px] font-medium text-[#302A3D]">
                  contact@mudbloom.in
                </p>

                <div className="mt-5 flex items-center gap-1 text-xs text-[#7A7380]">
                  Send an email
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              {/* Direct */}
              <motion.a
                variants={cardVariants}
                href="mailto:manish.bailwal@mudbloom.in"
                className="group rounded-[24px] border border-[#302A3D]/10 bg-white/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(48,42,61,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF1E8] text-[#344A3A]">
                  <Mail className="h-5 w-5" />
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
                  Direct contact
                </p>

                <p className="mt-2 break-all text-[15px] font-medium text-[#302A3D]">
                  manish.bailwal@mudbloom.in
                </p>

                <div className="mt-5 flex items-center gap-1 text-xs text-[#7A7380]">
                  Contact directly
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                variants={cardVariants}
                href="tel:+916397308332"
                className="group rounded-[24px] border border-[#302A3D]/10 bg-white/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(48,42,61,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F3DDD5] text-[#C96B52]">
                  <Phone className="h-5 w-5" />
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
                  Phone
                </p>

                <p className="mt-2 text-[15px] font-medium text-[#302A3D]">
                  +91 63973 08332
                </p>

                <div className="mt-5 flex items-center gap-1 text-xs text-[#7A7380]">
                  Give us a call
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                variants={cardVariants}
                className="rounded-[24px] border border-[#302A3D]/10 bg-white/60 p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9E4D6] text-[#6F6C65]">
                  <MapPin className="h-5 w-5" />
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8390]">
                  Studio
                </p>

                <address className="mt-2 not-italic text-[15px] font-medium leading-6 text-[#302A3D]">
                  Subhash Road
                  <br />
                  Opposite to Income Tax Office
                  <br />
                  Lane No. 2, Dehradun
                  <br />
                  Uttarakhand — 248001
                  <br />
                  India
                </address>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#FFF9F7]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EAF1E8]/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1280px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8A8390]">
            What happens next
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#302A3D]">
            Bring the idea.
            <br />
            <span className="text-[#E85D75]">We&apos;ll figure out the rest.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[15px] leading-7 text-[#6F6878]">
            No complicated forms. No perfect pitch required. Just tell us what
            you&apos;re trying to make, and we&apos;ll take it from there.
          </p>

          <Link
            href="mailto:hello@mudbloom.in"
            className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[#302A3D]/15 bg-white/70 px-6 py-3.5 text-sm font-medium text-[#302A3D] shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[#E85D75]/30 hover:bg-white hover:shadow-lg"
          >
            hello@mudbloom.in

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#302A3D] text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Bottom signature */}
      <div className="border-t border-[#302A3D]/10 bg-[#F8F4EA]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-6 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8A8390] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>MudBloom</span>

          <span>Ideas → Products → People</span>
        </div>
      </div>
    </main>
  );
}