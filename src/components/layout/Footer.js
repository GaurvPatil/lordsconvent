import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  contentDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap:"2rem",
    padding: "4rem 0",
    color:"white"
  },

  contentInnerDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    alignItems: "center",
  },

  typofont: {
    fontWeight: "bold",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer style={{background:"black"}}>
        <Container maxWidth="sm">
            <div className={classes.contentDiv}>


           

              <div className={classes.contentInnerDiv}>
                <Typography className={classes.typofont}>
                  {" "}
                  FOLLOW US{" "}
                </Typography>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <InstagramIcon style={{ color: "#eb0029" }} />
                  <FacebookIcon style={{ color: "rgb(2 86 255)" }} />
                  <LinkedInIcon style={{ color: "rgb(0 119 181)" }} />
                  <TwitterIcon style={{ color: "#00acee" }} />
                </div>
              </div>
              <div className={classes.contentInnerDiv}>
                <Typography className={classes.typofont}>
                  {" "}
                  CONTACT-US{" "}
                </Typography>
                <Typography>
                  9887224601 | 7891118386 <br />
                  Near Mangal Pandey Circle <br />
                  Tilak Nagar , Bhilwara (Raj.)
                </Typography>
              </div>
              <div className={classes.contentInnerDiv}>
                <Typography className={classes.typofont}> ABOUT </Typography>
                <Typography>
                  orem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. 
                </Typography>

              </div>
             
            </div>
          </Container>
    </footer>
  );
};

export default Footer;
