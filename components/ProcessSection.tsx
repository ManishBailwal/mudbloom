"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowDown,
  Compass,
  Hammer,
  Rocket,
  Sparkles,
} from "lucide-react";

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
    filter: "blur(7px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: EASE,
    },
  },
};

const steps = [
  {
    number: "01",
    title: "Discover",
    shortTitle: "Understand",
    description:
      "We start with the idea, the problem, and the people behind it. Together we figure out what matters and what should come first.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    shortTitle: "Shape",
    description:
      "We turn the thinking into flows, interfaces, and experiences that make the product feel clear before we write the code.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Build",
    shortTitle: "Create",
    description:
      "Design becomes a working product through thoughtful engineering, clean architecture, and technology chosen for the job.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Launch",
    shortTitle: "Release",
    description:
      "We put the product into people's hands, learn from reality, and keep improving what comes next.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        bg-[#F8F4EA]
        py-28
        sm:py-36
        lg:py-44
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#E9E4D6]/60
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[10%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#F3DDD5]/45
          blur-3xl
        "
      />

      {/* Organic floating shape */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[14%]
          h-28
          w-36
          rounded-[60%_40%_55%_45%]
          bg-[#EAF1E8]/70
        "
      />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
          "
        >
          {/* Left */}

          <div>
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-9 bg-text-primary/30" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-text-secondary
                "
              >
                How we work
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="
                font-heading
                text-[clamp(3.2rem,7vw,6.8rem)]
                font-medium
                leading-[0.92]
                tracking-[-0.065em]
                text-text-primary
              "
            >
              Good products
              <br />
              <span className="text-brand">
                don&apos;t happen by accident.
              </span>
            </motion.h2>
          </div>

          {/* Right */}

          <motion.div
            variants={fadeUp}
            className="
              max-w-[520px]
              lg:ml-auto
            "
          >
            <p
              className="
                text-base
                leading-7
                text-text-secondary
                sm:text-lg
                sm:leading-8
              "
            >
              We keep the process simple, collaborative,
              and focused. The goal is not to add more steps —
              it&apos;s to make the right things happen at the
              right time.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-brand/40" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-text-secondary
                "
              >
                Clear thinking. Careful making.
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* =======================================================
            PROCESS
        ======================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="relative mt-20 lg:mt-28"
        >
          {/* Connecting line */}

          <div
            className="
              absolute
              left-[27px]
              top-[28px]
              bottom-[28px]
              w-px
              bg-text-primary/10
              lg:left-1/2
              lg:top-[55px]
              lg:bottom-auto
              lg:h-px
              lg:w-[calc(100%-150px)]
              lg:-translate-x-1/2
            "
          />

          <div
            className="
              grid
              gap-14
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  variants={fadeUp}
                  className="
                    group
                    relative
                    lg:text-center
                  "
                >
                  {/* Number / Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-5
                      lg:flex-col
                      lg:gap-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-text-primary/10
                        bg-[#F8F4EA]
                        text-brand
                        shadow-[0_8px_30px_rgba(48,42,61,0.05)]
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:border-brand/30
                        group-hover:bg-brand
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                      />
                    </div>

                    <div className="flex items-center gap-3 lg:flex-col">
                      <span
                        className="
                          font-mono
                          text-[10px]
                          tracking-[0.16em]
                          text-text-secondary
                        "
                      >
                        {step.number}
                      </span>

                      <span
                        className="
                          hidden
                          h-px
                          w-8
                          bg-text-primary/15
                          lg:block
                        "
                      />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="ml-[74px] mt-5 lg:ml-0 lg:mt-7">
                    <p
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-brand
                      "
                    >
                      {step.shortTitle}
                    </p>

                    <h3
                      className="
                        mt-2
                        font-heading
                        text-[clamp(1.9rem,3vw,2.8rem)]
                        font-medium
                        leading-none
                        tracking-[-0.05em]
                        text-text-primary
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[290px]
                        text-sm
                        leading-6
                        text-text-secondary
                        lg:mx-auto
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
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
            duration: 1.15,
            ease: EASE,
          }}
          className="
            mt-24
            border-t
            border-text-primary/10
            pt-9
            lg:mt-32
          "
        >
          <div
            className="
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <p
              className="
                max-w-[700px]
                font-serif
                text-[clamp(1.6rem,3vw,2.6rem)]
                italic
                leading-[1.15]
                tracking-[-0.025em]
                text-text-primary
              "
            >
              Start with the idea.
              <br />

              <span className="text-brand">
                We&apos;ll figure out the rest together.
              </span>
            </p>

            <div className="flex items-center gap-3">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-text-primary/10
                "
              >
                <ArrowDown
                  size={15}
                  strokeWidth={1.4}
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-text-secondary
                "
              >
                One step at a time
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}