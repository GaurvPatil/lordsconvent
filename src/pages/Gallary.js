import { Carousel } from "react-carousel-minimal";
import img1 from "../components/gallaryimg/img1 (1).jpg";
import img2 from "../components/gallaryimg/img1 (2).jpg";
import img3 from "../components/gallaryimg/img1 (3).jpg";
import img4 from "../components/gallaryimg/img1 (4).jpg";
import img5 from "../components/gallaryimg/img1 (5).jpg";

export default function Gallary() {
  const data = [
    {
      image: img1,
      caption: "Caption",
    },
    {
      image: img2,
      caption: "Caption",
    },
    {
      image: img3,
      caption: "Caption",
    },
    {
      image: img4,
      caption: "Caption",
    },
    {
      image: img5,
      caption: "Caption",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <>
      <div>
        <div style={{ textAlign: "center" }}>
          <h2>React Carousel Minimal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit ame
          </p>
          <div
            style={{
              padding: "0 20px",
            }}
          >
            <Carousel
              data={data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
