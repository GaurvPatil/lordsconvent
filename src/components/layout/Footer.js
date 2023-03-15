import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  contentDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  contentInnerDiv: {
    display: "flex",
    flexDirection: "column",
    gap:"1rem"
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
const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer class="new_footer_area bg_color">
        



        <div class="new_footer_top">
        <Container maxWidth="lg">
          <div className={classes.contentDiv}>
            <div className={classes.contentInnerDiv}>LOGO</div>
            <div className={classes.contentInnerDiv}>Addreess</div>
            <div className={classes.contentInnerDiv}>
              <div>About</div>
              <div>Social</div>
            </div>
          </div>
        </Container>
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
     
        <div class="footer_bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-sm-7">
                <p class="mb-0 f_400">
                  © lord's convent.. 2023 All rights reserved.
                </p>
                <p>
                  (gaurvpatil17@gmail.com) <i class="icon_heart"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
