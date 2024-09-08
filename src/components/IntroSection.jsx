import React from "react";
import { motion } from "framer-motion";
import { IntroSectionCard } from "./IntroSectionCard";

const IntroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <IntroSectionCard />
    </motion.div>
  );
};

export default IntroSection;
