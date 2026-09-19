"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(7px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: EASE,
    },
  },
};

const capabilities = [
  {
    number: "01",
    title: "Mobile Apps",
    label: "iOS · Android · Cross-platform",
    description:
      "Thoughtful mobile experiences that feel natural, fast, and genuinely useful.",
    icon: Smartphone,
    accent: "#EAF1E8",
  },
  {
    number: "02",
    title: "Web Experiences",
    label: "Websites · Platforms · SaaS",
    description:
      "Digital spaces that combine strong visual identity with thoughtful interactions.",
    icon: Globe2,
    accent: "#F3DDD5",
  },
  {
    number: "03",
    title: "Software Systems",
    label: "APIs · Dashboards · Automation",
    description:
      "The complex stuff behind simple experiences — built to scale with the product.",
    icon: Code2,
    accent: "#E9E4D6",
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="
        relative
        overflow-hidden
        bg-[#FFF9F7]
        py-28
        sm:py-36
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
          -left-52
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#EAF1E8]/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-[5%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#F3DDD5]/45
          blur-3xl
        "
      />

      <motion.div
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
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[12%]
          h-24
          w-32
          rounded-[60%_40%_55%_45%]
          bg-[#F3DDD5]/40
        "
      />

      {/* =========================================================
          CONTAINER
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
            amount: 0.2,
          }}
          className="max-w-[1050px]"
        >
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
              Capabilities
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="
              font-heading
              text-[clamp(3.2rem,7vw,7rem)]
              font-medium
              leading-[0.93]
              tracking-[-0.065em]
              text-text-primary
            "
          >
            Whatever the idea needs,
            <br />

            <span className="text-brand">
              we build around it.
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="
              mt-9
              flex
              max-w-[720px]
              gap-5
            "
          >
            <span className="mt-3 hidden h-px w-10 shrink-0 bg-text-primary/20 sm:block" />

            <p
              className="
                text-base
                leading-7
                text-text-secondary
                sm:text-lg
                sm:leading-8
              "
            >
              From a first screen to a full product, we bring
              design, engineering, and technology together to
              create digital experiences made to last.
            </p>
          </motion.div>
        </motion.div>

        {/* =======================================================
            CAPABILITY LIST
        ======================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-20 lg:mt-28"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.number}
                variants={fadeUp}
                className="
                  group
                  relative
                  border-t
                  border-text-primary/10
                  py-10
                  transition-all
                  duration-700
                  sm:py-12
                  lg:py-14
                "
              >
                {/* Background hover shape */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-2
                    left-0
                    right-0
                    rounded-[28px]
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundColor: capability.accent,
                  }}
                />

                <div
                  className="
                    relative
                    z-10
                    grid
                    items-center
                    gap-7
                    lg:grid-cols-[80px_1fr_1.1fr_80px]
                  "
                >
                  {/* Number */}

                  <div>
                    <span
                      className="
                        font-mono
                        text-[11px]
                        tracking-[0.16em]
                        text-text-secondary
                      "
                    >
                      {capability.number}
                    </span>
                  </div>

                  {/* Title */}

                  <div className="flex items-center gap-5">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-text-primary/10
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
                        size={19}
                        strokeWidth={1.4}
                      />
                    </div>

                    <h3
                      className="
                        font-heading
                        text-[clamp(2rem,4vw,4rem)]
                        font-medium
                        leading-none
                        tracking-[-0.055em]
                        text-text-primary
                        transition-transform
                        duration-700
                        group-hover:translate-x-2
                      "
                    >
                      {capability.title}
                    </h3>
                  </div>

                  {/* Description */}

                  <div className="lg:pl-8">
                    <p
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-brand
                      "
                    >
                      {capability.label}
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-[430px]
                        text-sm
                        leading-6
                        text-text-secondary
                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {capability.description}
                    </p>
                  </div>

                  {/* Arrow */}

                  <div
                    className="
                      hidden
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-text-primary/10
                      bg-white/60
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:border-brand
                      group-hover:bg-brand
                      group-hover:text-white
                      lg:flex
                    "
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.4}
                    />
                  </div>
                </div>

                {/* Mobile arrow */}

                <div
                  className="
                    relative
                    z-10
                    mt-6
                    flex
                    items-center
                    gap-3
                    text-xs
                    font-medium
                    text-text-secondary
                    lg:hidden
                  "
                >
                  <span>Explore capability</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </motion.article>
            );
          })}

          {/* Closing border */}

          <div className="border-t border-text-primary/10" />
        </motion.div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 1.1,
            ease: EASE,
          }}
          className="
            mt-20
            flex
            flex-col
            gap-6
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
              text-[clamp(1.5rem,2.5vw,2.3rem)]
              italic
              leading-[1.2]
              tracking-[-0.025em]
              text-text-primary
            "
          >
            Design is how it feels.
            <br />

            <span className="text-brand">
              Engineering is how it works.
            </span>
          </p>

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-text-secondary
            "
          >
            We care about both.
          </span>
        </motion.div>
      </div>
    </section>
  );
}