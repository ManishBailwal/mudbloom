"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      ease: EASE,
    },
  },
};

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-[#FFF9F7]
        py-28
        sm:py-36
        lg:min-h-[820px]
        lg:py-44
      "
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#EAF1E8]/70
          blur-3xl
        "
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 4, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[17%]
          h-28
          w-40
          rounded-[60%_40%_55%_45%]
          bg-[#F3DDD5]/60
          blur-[1px]
        "
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[13%]
          right-[8%]
          h-36
          w-28
          rounded-[45%_55%_40%_60%]
          bg-[#E9E4D6]/80
        "
      />

      {/* Small floating dots */}

      <motion.span
        animate={{
          y: [0, -8, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[34%]
          h-2
          w-2
          rounded-full
          bg-accent
        "
      />

      <motion.span
        animate={{
          y: [0, 7, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[19%]
          top-[27%]
          h-2.5
          w-2.5
          rounded-full
          bg-brand/50
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto flex min-h-[580px] max-w-[1280px] items-center justify-center px-6 lg:min-h-[620px] lg:px-8">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            relative
            z-10
            flex
            max-w-[900px]
            flex-col
            items-center
            text-center
          "
        >
          {/* Eyebrow */}

          <motion.div
            variants={fadeUp}
            className="
              mb-8
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-9 bg-text-primary/25" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-text-secondary
              "
            >
              Let&apos;s build something
            </span>

            <span className="h-px w-9 bg-text-primary/25" />
          </motion.div>

          {/* Main heading */}

          <motion.h2
            variants={fadeUp}
            className="
              font-heading
              text-[clamp(4rem,10vw,9rem)]
              font-medium
              leading-[0.86]
              tracking-[-0.075em]
              text-text-primary
            "
          >
            Have an idea?
            <br />

            <span className="text-brand">
              Let&apos;s grow it.
            </span>
          </motion.h2>

          {/* Supporting copy */}

          <motion.p
            variants={fadeUp}
            className="
              mt-9
              max-w-[570px]
              text-base
              leading-7
              text-text-secondary
              sm:text-lg
              sm:leading-8
            "
          >
            Whether it&apos;s a rough sketch, a product idea,
            or something you&apos;ve been thinking about for a while,
            we&apos;d love to hear it.
          </motion.p>

          {/* CTA */}

          <motion.div
            variants={fadeUp}
            className="mt-10"
          >
            <Link
              href="mailto:hello@mudbloom.in"
              className="
                group
                inline-flex
                items-center
                gap-4
                rounded-full
                bg-brand
                px-7
                py-4
                text-sm
                font-medium
                text-white
                shadow-[0_18px_45px_rgba(52,74,58,0.16)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#2B3D30]
                hover:shadow-[0_25px_55px_rgba(52,74,58,0.22)]
              "
            >
              Start a conversation

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </motion.div>

          {/* Small email */}

          <motion.p
            variants={fadeUp}
            className="
              mt-5
              text-[11px]
              tracking-[0.04em]
              text-text-secondary
            "
          >
            hello@mudbloom.in
          </motion.p>
        </motion.div>

        {/* =======================================================
            DECORATIVE GROWTH ELEMENT
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -15,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.5,
            delay: 0.35,
            ease: EASE,
          }}
          className="
            pointer-events-none
            absolute
            bottom-[8%]
            left-[7%]
            hidden
            lg:block
          "
        >
          {/* Stem */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-28
              w-px
              origin-bottom
              rotate-[18deg]
              bg-brand/25
            "
          />

          {/* Leaf */}

          <motion.div
            animate={{
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-24
              left-[-18px]
              h-16
              w-10
              rotate-[-25deg]
              rounded-[100%_0_100%_0]
              bg-brand/15
            "
          />

          <motion.div
            animate={{
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-16
              left-[15px]
              h-12
              w-8
              rotate-[35deg]
              rounded-[0_100%_0_100%]
              bg-brand/10
            "
          />
        </motion.div>

        {/* =======================================================
            TOP RIGHT HANDWRITTEN NOTE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
            rotate: 5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 3,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: EASE,
          }}
          className="
            pointer-events-none
            absolute
            right-[7%]
            top-[13%]
            hidden
            lg:block
          "
        >
          <p
            className="
              font-serif
              text-[17px]
              italic
              leading-6
              text-text-secondary
            "
          >
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

      {/* =========================================================
          BOTTOM LINE
      ========================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-0
          right-0
          mx-auto
          flex
          max-w-[1280px]
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-text-secondary
          "
        >
          MudBloom
        </span>

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-text-secondary
          "
        >
          Ideas → Products → People
        </span>
      </div>
    </section>
  );
}