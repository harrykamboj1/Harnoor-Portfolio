import React from "react";
import { Bio } from "../data/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const words = "Hi, I'm Harnoor".split(" ");

  return (
    <section className="flex flex-col items-start justify-center min-h-[60vh] text-left" id="About">
      <div className="space-y-4">
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: 0, transition: { ease: [0.33, 1, 0.68, 1], duration: 0.8 } },
                }}
                className="inline-block mr-4 text-foreground"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400"
        >
          Software Engineer • AI Engineer • Open Source Contributor
          </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href={Bio.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View Resume <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
