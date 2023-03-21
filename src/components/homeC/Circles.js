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
      height="150"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="200"
        cy="150"
        r="30"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />

      <motion.circle
        cx="200"
        cy="300"
        r="30"
        stroke="#ff0055"
        variants={draw}
        custom={1.5}
      />

      <motion.circle
        cx="200"
        cy="450"
        r="30"
        stroke="#ff0055"
        variants={draw}
        custom={2}
      />

     
      
    </motion.svg>
   
  </Container>
  )
}

export default Circles