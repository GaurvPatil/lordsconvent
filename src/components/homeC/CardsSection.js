import React from "react";
import Titles from "../Titles";
import { imgData } from "./Data";
import Container from "@material-ui/core/Container";
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardCover: {
    marginTop: "1.5rem",
    display: "flex",
    flexWrap: "wrap",
    gap: "5rem",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      gap: "1.5rem",
    },

    [theme.breakpoints.between("sm", "md")]: {
      gap: "3rem",
    },
  },

  card: {
    maxWidth: 300,
  },
  media: {
    height: 180,
  },
}));

const CardsSection = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <br />
      <Titles
        title=" 
      EXPLORE OUR MAJORS & PROGRAMS "
        backgr="#f1f1f1"
        typoColor="#444444"
      />
      <Container maxWidth="lg">
        <div className={classes.cardCover}>
          {imgData.map((img, index) => {
            return (
              <Card className={classes.card} key={index}>
                <CardMedia
                  className={classes.media}
                  image={img.source}
                  alt="cover image"
                  title="green iguana"
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ color: "#01416f" }}
                  >
                    {img.title}
                  </Typography>

                  <Typography variant="body2">{img.description}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default CardsSection;
