"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
      duration: 1.15,
      ease: EASE,
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: EASE,
    },
  },
};

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#F8F4EA] py-28 sm:py-36 lg:py-44"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#EAF1E8]/60
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#F3DDD5]/45
          blur-3xl
        "
      />

      {/* Small organic floating shape */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[12%]
          h-20
          w-28
          rounded-[60%_40%_55%_45%]
          bg-[#F3DDD5]/50
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
          className="max-w-[1000px]"
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
              Selected work
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            variants={fadeUp}
            className="
              font-heading
              text-[clamp(3.2rem,7vw,7rem)]
              font-medium
              leading-[0.94]
              tracking-[-0.065em]
              text-text-primary
            "
          >
            Things we are
            <br />
            <span className="text-brand">
              building.
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="
              mt-8
              max-w-[620px]
              text-base
              leading-7
              text-text-secondary
              sm:text-lg
              sm:leading-8
            "
          >
            A collection of products shaped from ideas,
            problems, and a little bit of curiosity.
          </motion.p>
        </motion.div>

        {/* =======================================================
            FEATURED PRODUCT — NOSTALZIC
        ======================================================== */}

        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-20 lg:mt-28"
        >
          <Link
            href="/products/nostalzic"
            className="group block"
          >
            <div
              className="
                relative
                min-h-[560px]
                overflow-hidden
                rounded-[32px]
                border
                border-white/70
                bg-[#FFF9F7]
                shadow-[0_30px_100px_rgba(48,42,61,0.08)]
                sm:min-h-[620px]
                lg:min-h-[680px]
              "
            >
              {/* Organic background */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-[500px]
                  w-[500px]
                  rounded-full
                  bg-[#FFE6EC]
                  opacity-70
                  blur-2xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-180px]
                  left-[20%]
                  h-[420px]
                  w-[420px]
                  rounded-full
                  bg-[#F1EBFF]
                  opacity-60
                  blur-3xl
                "
              />

              {/* Product content */}

              <div
                className="
                  relative
                  z-10
                  grid
                  min-h-[560px]
                  items-center
                  gap-12
                  p-7
                  sm:p-10
                  lg:min-h-[680px]
                  lg:grid-cols-[0.8fr_1.2fr]
                  lg:p-14
                "
              >
                {/* Left */}

                <div className="relative z-20 max-w-[430px]">
                  {/* Product number */}

                  <div className="flex items-center gap-3">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.16em]
                        text-text-secondary
                      "
                    >
                      01
                    </span>

                    <span className="h-px w-8 bg-text-primary/20" />

                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-text-secondary
                      "
                    >
                      Featured product
                    </span>
                  </div>

                  {/* Name */}

                  <h3
                    className="
                      mt-8
                      font-heading
                      text-[clamp(3rem,6vw,6rem)]
                      font-medium
                      leading-[0.9]
                      tracking-[-0.065em]
                      text-text-primary
                    "
                  >
                    Nostalzic
                  </h3>

                  {/* Tagline */}

                  <p
                    className="
                      mt-6
                      max-w-[370px]
                      font-serif
                      text-[clamp(1.4rem,2vw,2rem)]
                      italic
                      leading-[1.2]
                      tracking-[-0.02em]
                      text-text-primary
                    "
                  >
                    Turn moments
                    <br />
                    into memories.
                  </p>

                  {/* Description */}

                  <p
                    className="
                      mt-6
                      max-w-[390px]
                      text-sm
                      leading-6
                      text-text-secondary
                    "
                  >
                    A beautiful memory timeline designed to
                    help people preserve the moments they
                    never want to forget.
                  </p>

                  {/* Tags */}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "Mobile App",
                      "Web Platform",
                      "Product Design",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-border/70
                          bg-white/70
                          px-3
                          py-1.5
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-text-secondary
                          backdrop-blur-sm
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore */}

                  
                </div>

                {/* =================================================
                    NOSTALZIC VISUAL
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    min-h-[330px]
                    items-center
                    justify-center
                    lg:min-h-[560px]
                  "
                >
                  {/* Large soft circle */}

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
                    className="
                      absolute
                      h-[280px]
                      w-[280px]
                      rounded-full
                      bg-[#FFE6EC]
                      sm:h-[390px]
                      sm:w-[390px]
                      lg:h-[480px]
                      lg:w-[480px]
                    "
                  />

                  {/* Main product image */}

                  <motion.div
                    animate={{
                      y: [0, -14, 0],
                      rotate: [3, 3.5, 3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      z-10
                      h-[340px]
                      w-[235px]
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-white
                      bg-white
                      shadow-[0_35px_80px_rgba(48,42,61,0.18)]
                      transition-transform
                      duration-700
                      group-hover:scale-[1.025]
                      sm:h-[410px]
                      sm:w-[285px]
                      lg:h-[500px]
                      lg:w-[345px]
                    "
                  >
                    <Image
                      src="/nostalzic.png"
                      alt="Nostalzic memory timeline"
                      fill
                      sizes="(max-width: 640px) 235px, (max-width: 1024px) 285px, 345px"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Small floating note */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [-4, -2, -4],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      bottom-[7%]
                      left-[3%]
                      z-20
                      rounded-2xl
                      border
                      border-white/80
                      bg-white/80
                      px-4
                      py-3
                      shadow-[0_15px_45px_rgba(48,42,61,0.10)]
                      backdrop-blur-xl
                      sm:left-[5%]
                    "
                  >
                    <p
                      className="
                        font-serif
                        text-[13px]
                        italic
                        text-text-secondary
                      "
                    >
                      Keep the little things.
                    </p>
                  </motion.div>

                  {/* Decorative dot */}

                  <span
                    className="
                      absolute
                      right-[5%]
                      top-[8%]
                      h-3
                      w-3
                      rounded-full
                      bg-accent
                      shadow-[0_0_0_9px_rgba(201,107,82,0.08)]
                    "
                  />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* =======================================================
            SECONDARY PRODUCTS
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={containerVariants}
          className="
            mt-5
            grid
            gap-5
            lg:grid-cols-2
          "
        >
          {/* =====================================================
              SUTRA EDU
          ====================================================== */}

          <motion.div variants={imageReveal}>
            <Link
              href="/products/sutra-edu"
              className="group block"
            >
              <article
                className="
                  relative
                  min-h-[500px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/70
                  bg-[#EAF8EF]
                  p-7
                  transition-shadow
                  duration-700
                  hover:shadow-[0_25px_70px_rgba(48,42,61,0.10)]
                  sm:p-9
                "
              >
                {/* Background */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-64
                    w-64
                    rounded-full
                    bg-white/60
                    blur-2xl
                  "
                />

                {/* Header */}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.16em]
                        text-text-secondary
                      "
                    >
                      02
                    </span>

                    <span className="h-px w-7 bg-text-primary/20" />
                  </div>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-text-secondary
                    "
                  >
                    Education
                  </span>
                </div>

                {/* Text */}

                <div className="relative z-10 mt-20">
                  <h3
                    className="
                      font-heading
                      text-[clamp(2.7rem,5vw,4.5rem)]
                      font-medium
                      leading-[0.92]
                      tracking-[-0.06em]
                      text-text-primary
                    "
                  >
                    Brain
                    <br />
                    <span className="text-brand">
                      Circuit.
                    </span>
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[340px]
                      font-serif
                      text-xl
                      italic
                      leading-[1.25]
                      text-text-primary
                    "
                  >
                    Ask 
                    <br />
                    your documents anything.
                  </p>
                </div>

                {/* Product visual */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-4, -3.3, -4],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-[-80px]
                    right-[6%]
                    h-[250px]
                    w-[185px]
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white
                    bg-white
                    shadow-[0_25px_60px_rgba(48,42,61,0.15)]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                >
                  <Image
                    src="/braincircuit.png"
                    alt="Brain Circuit Application"
                    fill
                    sizes="185px"
                    className="object-cover"
                  />
                </motion.div>

                {/* Footer */}

                {/* <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    z-20
                    flex
                    items-center
                    gap-3
                    sm:left-9
                    sm:bottom-9
                  "
                >
                  <span className="text-sm font-medium">
                    Explore product
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div> */}
              </article>
            </Link>
          </motion.div>

          {/* =====================================================
              RENTZOI
          ====================================================== */}

          <motion.div variants={imageReveal}>
            <Link
              href="/products/rentzoi"
              className="group block"
            >
              <article
                className="
                  relative
                  min-h-[500px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/70
                  bg-[#F3DDD5]
                  p-7
                  transition-shadow
                  duration-700
                  hover:shadow-[0_25px_70px_rgba(48,42,61,0.10)]
                  sm:p-9
                "
              >
                {/* Background organic shape */}

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-20
                    h-72
                    w-72
                    rounded-full
                    bg-[#FFF9F7]/70
                  "
                />

                {/* Header */}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        font-mono
                        text-[10px]
                        tracking-[0.16em]
                        text-text-secondary
                      "
                    >
                      03
                    </span>

                    <span className="h-px w-7 bg-text-primary/20" />
                  </div>

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-text-secondary
                    "
                  >
                    Travel & Mobility
                  </span>
                </div>

                {/* Text */}

                <div className="relative z-10 mt-20">
                  <h3
                    className="
                      font-heading
                      text-[clamp(2.7rem,5vw,4.5rem)]
                      font-medium
                      leading-[0.92]
                      tracking-[-0.06em]
                      text-text-primary
                    "
                  >
                    Webmetraq
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[340px]
                      font-serif
                      text-xl
                      italic
                      leading-[1.25]
                      text-text-primary
                    "
                  >
                    Your website.
                    <br />
                    Your way.
                  </p>
                </div>

                {/* Product visual */}

                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [5, 4.3, 5],
                  }}
                  transition={{
                    duration: 8.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-[-70px]
                    right-[5%]
                    h-[245px]
                    w-[300px]
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white
                    bg-white
                    shadow-[0_25px_60px_rgba(48,42,61,0.15)]
                    transition-transform
                    duration-700
                    group-hover:scale-[1.03]
                  "
                >
                  <Image
                    src="/webmetraq.png"
                    alt="Webmetraq saas Product"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </motion.div>

                {/* Footer */}

                {/* <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    z-20
                    flex
                    items-center
                    gap-3
                    sm:left-9
                    sm:bottom-9
                  "
                >
                  <span className="text-sm font-medium">
                    Explore product
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div> */}
              </article>
            </Link>
          </motion.div>
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
            border-t
            border-text-primary/10
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[520px]
              text-sm
              leading-6
              text-text-secondary
            "
          >
            Different products. Different problems.
            One belief — technology should make life
            a little better.
          </p>

          <div className="flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-accent
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-text-secondary
              "
            >
              More coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}