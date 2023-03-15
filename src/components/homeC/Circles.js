import React from 'react'
import { motion } from "framer-motion";
import { Container } from "@material-ui/core";

const Circles = () => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 },
            },
          };
        },
      };
    
  return (
    <Container maxWidth="md" style={{ textAlign: "center" }}>
    <motion.svg
      width="100"
      height="200"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="200"
        cy="0"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />

      <motion.circle
        cx="200"
        cy="100"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={1.5}
      />

      <motion.circle
        cx="200"
        cy="200"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={2}
      />

      <motion.circle
        cx="200"
        cy="300"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={2.5}
      />

      <motion.circle
        cx="200"
        cy="400"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={3}
      />
      <motion.circle
        cx="200"
        cy="500"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={3.5}
      />
      <motion.circle
        cx="200"
        cy="600"
        r="20"
        stroke="#ff0055"
        variants={draw}
        custom={4}
      />
      
    </motion.svg>
   
  </Container>
  )
}

export default Circles