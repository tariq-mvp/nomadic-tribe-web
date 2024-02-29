import climb from "@/data/climb";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import SingleClimb from "./SingleClimb";

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

const Climb = ({data}) => {
  const [loading, setLoading] = useState(true);
  const [tripsByCategories, setTripsByCategories] = useState([]);

  useEffect(() => {
    if (data?.tripsByCategories?.length > 0) {
      const program = data?.tripsByCategories[0]?.programs || [];
      setTripsByCategories(program)
      setLoading(false);
    }
  }, [data])
  
  return (
    <section className="popular-tours">
      {loading ? (
        <div>
          <Spinner/>
        </div>
      ): (
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Climb the most amazing mountains</span>
          <h2 className="section-title__title">The best experience on top of the world</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">
              <TinySlider settings={settings}>
                {/* {climb.map((tour) => (
                  <SingleClimb key={tour.id} tour={tour} />
                ))} */}
                {tripsByCategories?.map((item) => (
                  <SingleClimb tour={item} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
      )}
    </section>
  );
};

export default Climb;
