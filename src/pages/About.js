import React from "react";
import Footer from "../components/layout/Footer";
import Titles from "../components/Titles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const About = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container py-3">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <Titles title="ABOUT US " backgr="#f7941d" typoColor="white" />
              <br />

              <p className="font-italic text-muted mb-0">
                Create a minimal about us page using Bootstrap 4. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt="wda"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-3">
        <div className="container py-3">
          <div className="row align-items-center mb-1">
            <div
              className="col-lg-6 order-2 order-lg-3"
              style={{ textAlign: "center" }}
            >
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>

              <Titles title="LOREM IPSUM" backgr="#f7941d" typoColor="white" />
              <br />
              <p className="font-italic text-muted mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-2" style={{ background: "rgb(247, 148, 29)" }}>
        <div className="container py-5">
          <div className="row mb-4" style={{ textAlign: "center" }}>
            <div className="col-lg-5">
              <Titles
                title=" 
        OUR STAFF"
                backgr="#01416f"
                typoColor="white"
              />

              <br />
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className=" rounded shadow-sm py-5 px-4"
                style={{ background: "black" }}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0" style={{ color: "rgb(247, 148, 29)" }}>
                  Manuella Nevoresky
                </h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <FacebookIcon style={{ color: "rgb(2 86 255)" }} />
                  </li>
                  <li className="list-inline-item">
                    <TwitterIcon style={{ color: "#00acee" }} />
                  </li>
                  <li className="list-inline-item">
                    <LinkedInIcon style={{ color: "rgb(0 119 181)" }} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className=" rounded shadow-sm py-5 px-4"
                style={{ background: "black" }}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0" style={{ color: "rgb(247, 148, 29)" }}>
                  Samuel Hardy
                </h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <FacebookIcon style={{ color: "rgb(2 86 255)" }} />
                  </li>
                  <li className="list-inline-item">
                    <TwitterIcon style={{ color: "#00acee" }} />
                  </li>
                  <li className="list-inline-item">
                    <LinkedInIcon style={{ color: "rgb(0 119 181)" }} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className=" rounded shadow-sm py-5 px-4"
                style={{ background: "black" }}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0" style={{ color: "rgb(247, 148, 29)" }}>
                  Tom Sunderland
                </h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <FacebookIcon style={{ color: "rgb(2 86 255)" }} />
                  </li>
                  <li className="list-inline-item">
                    <TwitterIcon style={{ color: "#00acee" }} />
                  </li>
                  <li className="list-inline-item">
                    <LinkedInIcon style={{ color: "rgb(0 119 181)" }} />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div
                className=" rounded shadow-sm py-5 px-4"
                style={{ background: "black" }}
              >
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0" style={{ color: "rgb(247, 148, 29)" }}>
                  John Tarly
                </h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <FacebookIcon style={{ color: "rgb(2 86 255)" }} />
                  </li>
                  <li className="list-inline-item">
                    <TwitterIcon style={{ color: "#00acee" }} />
                  </li>
                  <li className="list-inline-item">
                    <LinkedInIcon style={{ color: "rgb(0 119 181)" }} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
