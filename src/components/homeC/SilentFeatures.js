import React from "react";

import Titles from "../Titles";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { silentFeaturesData } from "./Data";
import { Container, makeStyles, Paper, Typography } from "@material-ui/core";
import Circles from "./Circles";

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
    alignItems: "center",

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

  return (
    <>
      <Circles />
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

       <Circles />
    </>
  );
};

export default SilentFeatures;
