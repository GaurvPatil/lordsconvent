import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import stars from "./cardimg/stars.svg";
import handshake from "./cardimg/handshake.svg";
import trophy from "./cardimg/trophy.svg";
import Titles from "../Titles";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    marginTop: "4rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "10rem",
    justifyContent: "center",

    [theme.breakpoints.between("xs", "sm")]: {
        gap: "3rem",
      },
  
      [theme.breakpoints.between("sm", "md")]: {
        gap: "5rem",
      },
  },
  mediaDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
  },
  mediaSize: {
    height: "10rem",
  },

  typofont: {
    fontSize: "1.2rem",
    fontWeight:"bold",
    color:"white",

    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "0.8rem",
    },

    [theme.breakpoints.between("sm", "md")]: {
      gap: "1rem",
    },
  },
}));

const Icons = () => {
  const classes = useStyles();
  return (
    <div style={{background:"rgb(247, 148, 29)" , padding:"2rem 0"}}>
      <Titles
        title=" 
      LORD'S CONVENT STRONG "
        backgr="#01416f"
        typoColor="white"
      />
      <Container maxWidth="lg" className={classes.outerContainer}>
        <div className={classes.mediaDiv}>
          <img src={stars} alt="icon" className={classes.mediaSize} />
          <Typography className={classes.typofont}>
            {" "}
            BEST VALUE SCHOOL{" "}
          </Typography>
        </div>
        <div className={classes.mediaDiv}>
          <img src={handshake} alt="icon" className={classes.mediaSize} />
          <Typography className={classes.typofont}>
            {" "}
            STRONG COMMITMENT TO TEACHING{" "}
          </Typography>
        </div>
        <div className={classes.mediaDiv}>
          <img src={trophy} alt="icon" className={classes.mediaSize} />
          <Typography className={classes.typofont}>
            {" "}
            BEST VALUE SCHOOL{" "}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Icons;
