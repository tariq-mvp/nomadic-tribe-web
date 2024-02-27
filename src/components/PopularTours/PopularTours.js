import popularTours from "@/data/popularTours";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 30,
    },
  },
};

const PopularTours = ({data}) => {
  const featuredPrograms = data?.featuredPrograms ?? [];
  return (
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Popular Experiences</span>
          <h2 className="section-title__title">These are the best reviewed experiences</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">
              <TinySlider settings={settings}>
                {featuredPrograms?.map((item, index) => (
                  <SingleTour key={index} tour={item} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PopularTours;
