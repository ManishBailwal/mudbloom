"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowDownRight,
  Lightbulb,
  Sparkles,
  Sprout,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
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
      duration: 1.2,
      ease: EASE,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.15,
      ease: EASE,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    scaleX: 0,
    transformOrigin: "left",
  },
  show: {
    scaleX: 1,
    transition: {
      duration: 1.4,
      ease: EASE,
    },
  },
};

const steps = [
  {
    number: "01",
    title: "THINK",
    heading: "Shape the idea.",
    description:
      "We start by understanding the problem, the people, and the opportunity behind the idea.",
    icon: Lightbulb,
    accent: "bg-[#F3DDD5]",
  },
  {
    number: "02",
    title: "BUILD",
    heading: "Make it real.",
    description:
      "Design and engineering come together to turn the idea into something people can actually use.",
    icon: Sparkles,
    accent: "bg-[#E9E4D6]",
  },
  {
    number: "03",
    title: "GROW",
    heading: "Put it in people's hands.",
    description:
      "We launch, learn, and keep improving until the product feels as useful as the idea behind it.",
    icon: Sprout,
    accent: "bg-[#E6EFE5]",
  },
];

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[#FFF9F7] py-28 sm:py-36 lg:py-44"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none absolute
          -left-40 top-20
          h-[420px] w-[420px]
          rounded-full
          bg-[#EAF1E8]/70
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-48 bottom-0
          h-[500px] w-[500px]
          rounded-full
          bg-[#F3DDD5]/45
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
          pointer-events-none absolute
          right-[8%] top-[16%]
          h-24 w-24
          rounded-[60%_40%_55%_45%]
          bg-[#F3DDD5]/50
          blur-[1px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          left-[8%] bottom-[12%]
          h-2 w-2
          rounded-full
          bg-brand/30
        "
      />

      <div
        className="
          pointer-events-none absolute
          right-[14%] top-[31%]
          h-2.5 w-2.5
          rounded-full
          bg-accent/50
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">

        {/* =======================================================
            INTRO
        ======================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="max-w-[1050px]"
        >
          {/* Eyebrow */}

          <motion.div
            variants={fadeUp}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-text-primary/30" />

            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-text-secondary
              "
            >
              What we do
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={fadeUp}
            className="
              max-w-[1000px]
              font-heading
              text-[clamp(3.2rem,7vw,7rem)]
              font-medium
              leading-[0.94]
              tracking-[-0.065em]
              text-text-primary
            "
          >
            We turn good ideas
            <br />

            <span className="text-brand">
              into useful things.
            </span>
          </motion.h2>

          {/* Description */}

          <motion.div
            variants={fadeUp}
            className="
              mt-9
              flex
              max-w-[720px]
              flex-col
              gap-6
              sm:flex-row
              sm:items-start
            "
          >
            <div className="hidden h-px w-10 shrink-0 bg-text-primary/20 sm:mt-3 sm:block" />

            <p
              className="
                max-w-[650px]
                text-base
                leading-7
                text-text-secondary
                sm:text-lg
                sm:leading-8
              "
            >
              From the first rough idea to the product people
              actually use, we combine thoughtful design,
              engineering, and technology to make things that
              feel simple, human, and intentional.
            </p>
          </motion.div>
        </motion.div>

        {/* =======================================================
            DIVIDER
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          variants={lineVariants}
          className="mt-24 h-px bg-border/80 lg:mt-32"
        />

        {/* =======================================================
            PROCESS INTRO
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={containerVariants}
          className="mt-10 flex items-center justify-between"
        >
          <motion.p
            variants={fadeUp}
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-text-secondary
            "
          >
            From idea to impact
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="
              hidden
              items-center
              gap-2
              text-text-secondary
              sm:flex
            "
          >
            <span className="text-[10px] uppercase tracking-[0.15em]">
              Our approach
            </span>

            <ArrowDownRight className="h-4 w-4" strokeWidth={1.4} />
          </motion.div>
        </motion.div>

        {/* =======================================================
            THREE STEPS
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          variants={containerVariants}
          className="
            mt-14
            grid
            gap-px
            overflow-hidden
            rounded-[30px]
            border
            border-border/70
            bg-border/60
            lg:grid-cols-3
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                variants={stepVariants}
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  bg-[#FFF9F7]
                  p-7
                  transition-colors
                  duration-700
                  hover:bg-white
                  sm:p-9
                  lg:min-h-[430px]
                  lg:p-10
                "
              >
                {/* Background organic shape */}

                <motion.div
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 1.2,
                    ease: EASE,
                  }}
                  className={`
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-44
                    w-44
                    rounded-[60%_40%_55%_45%]
                    ${step.accent}
                    opacity-50
                    blur-[1px]
                    transition-transform
                    duration-1000
                    group-hover:scale-125
                  `}
                />

                {/* Number */}

                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className="
                      font-mono
                      text-[11px]
                      tracking-[0.15em]
                      text-text-secondary
                    "
                  >
                    {step.number}
                  </span>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border/80
                      bg-white/60
                      text-brand
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:rotate-[-8deg]
                      group-hover:bg-brand
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}

                <div className="relative z-10 mt-28">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-brand
                    "
                  >
                    {step.title}
                  </p>

                  <h3
                    className="
                      mt-3
                      font-heading
                      text-[clamp(2rem,3vw,3rem)]
                      font-medium
                      leading-[1]
                      tracking-[-0.045em]
                      text-text-primary
                    "
                  >
                    {step.heading}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[330px]
                      text-sm
                      leading-6
                      text-text-secondary
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* Bottom line */}

                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    h-px
                    w-10
                    bg-text-primary/20
                    transition-all
                    duration-700
                    group-hover:w-20
                    sm:left-9
                    lg:bottom-9
                    lg:left-10
                  "
                />

                {/* Step index decoration */}

                <span
                  className="
                    absolute
                    bottom-6
                    right-7
                    font-heading
                    text-[70px]
                    font-medium
                    leading-none
                    tracking-[-0.08em]
                    text-text-primary/10
                    transition-all
                    duration-700
                    group-hover:text-brand/[0.07]
                    sm:right-9
                    lg:bottom-8
                    lg:right-10
                  "
                >
                  {step.number}
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: EASE,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-7
            sm:flex-row
            sm:items-end
            sm:justify-between
            lg:mt-28
          "
        >
          <p
            className="
              max-w-[650px]
              font-serif
              text-[clamp(1.5rem,2.5vw,2.35rem)]
              italic
              leading-[1.2]
              tracking-[-0.025em]
              text-text-primary
            "
          >
            Good software should feel
            <span className="text-brand"> almost obvious.</span>
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-text-primary/30" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-text-secondary
              "
            >
              Thoughtful by design
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}