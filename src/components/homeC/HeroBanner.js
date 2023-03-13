import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HeroBanner() {
  const images = [
    {
      source:
        "https://cdn.pixabay.com/photo/2017/09/18/11/14/school-2761394_960_720.jpg",
      data: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      source:
        "https://cdn.pixabay.com/photo/2021/08/23/16/28/school-6568211_960_720.jpg",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      source:
        "https://cdn.pixabay.com/photo/2021/11/29/01/53/distance-learning-6831603_960_720.png",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Carousel fade >
      {images.map((pic, index) => {
        return (
          <Carousel.Item interval={2000} >
             <Carousel.Caption >
             
              <h3>First slide label</h3>
              <p>{pic.data}</p>
            </Carousel.Caption>
            <img
              className="d-block w-100 "
       
              src={pic.source}
              alt={`slide = ${index}`}
            />
           
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default HeroBanner;
