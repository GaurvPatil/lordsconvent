import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { images } from "./Data";


function HeroBanner() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <Carousel fade>
      {images.map((pic, index) => {
        return (
          <Carousel.Item interval={2000} key={index}>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>{pic.data}</p>
            </Carousel.Caption>

            <div
              style={{
                background: `url(${pic.source}) center center no-repeat`,
                backgroundSize: "cover",
                height: width < 600 ? "310px" : "510px",
              }}
            ></div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HeroBanner;
