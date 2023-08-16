import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const AnimatedTextWord = ({ text}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Typography
      gutterBottom
      variant="h1"
      component={motion.div}
      align="center"
      style={{
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: '50px',
        overflow: 'hidden',
        display: 'flex',
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '13px' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </Typography>
  );
};

export default AnimatedTextWord;