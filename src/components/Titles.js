import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  Typo: {
    fontSize: "1.5rem",

    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "0.8rem",
    },

    [theme.breakpoints.between("sm", "md")]: {
      gap: "1.2rem",
    },
  },
}));

const Titles = ({ title, backgr, typoColor }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div style={{ background: backgr }}>
        <Typography
          className={classes.Typo}
          style={{
            padding: "12px 10px 12px 10px",
            color: typoColor,
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
      </div>
    </Container>
  );
};

export default Titles;
