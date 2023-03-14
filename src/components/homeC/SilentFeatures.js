import React from "react";
import { motion } from "framer-motion";
import Titles from "../Titles";
import earth from "./heroImages/bag.png";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { silentFeaturesData } from "./Data";
import { Container, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "#01416f",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    padding: "2rem 0 ",
  },

  fetatureDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",

    gap: "0.4rem",
    color: "white",
  },



  typofont: {
    fontSize: "1.2rem",

    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "0.8rem",
    },

    [theme.breakpoints.between("sm", "md")]: {
      gap: "1rem",
    },
  },
}));

const SilentFeatures = () => {
  const classes = useStyles();
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
    <>
      <Container maxWidth="md" style={{ textAlign: "center" }}>
        <motion.svg
          width="100"
          height="250"
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
          <motion.circle
            cx="200"
            cy="700"
            r="20"
            stroke="#ff0055"
            variants={draw}
            custom={4.5}
          />
          <motion.circle
            cx="200"
            cy="800"
            r="20"
            stroke="#ff0055"
            variants={draw}
            custom={4.5}
          />
        </motion.svg>
      </Container>

      <br />
      <Paper className={classes.paper}>
        <Titles title="SILIENT FEATURES" backgr="#f7941d" typoColor="white" />

        <Container maxWidth="md">
          {silentFeaturesData.map((data, index) => {
            return (
              <div className={classes.fetatureDiv} key={index}>
                <DoubleArrowIcon fontSize="small" />{" "}
                <Typography
                  className={classes.typofont}
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  {data.feature}
                </Typography>
              </div>
            );
          })}
        </Container>
      </Paper>
    </>
  );
};

export default SilentFeatures;
