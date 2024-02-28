import { tourDetailsOne } from "@/data/tourDetailsPage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import region from "@/images/icons/region.png"
import moderate from "@/images/icons/moderate.png"
import tropical from "@/images/icons/tropical.png"
import Image from "next/image";
const { title, rate, duration, minAge, tourType, location, date, superb } =
  tourDetailsOne;

const TourDetailsOne = ({data}) => {
  return (
    <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{data?.name}</h2>
                  <p className="tour-details__top-rate">
                    <span>${data?.starting_from}</span> / Per Person
                  </p>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <h6>{data?.tribe?.no_of_days + " " + "Days"}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {/* <span className="icon-user"></span> */}
                        <Image src={region}  width= "35px" height= "35px" ></Image>
                      </div>
                        {/* style={{ color:"#FFC107" }} */}
                      <div className="text" >
                        <p>Region is {data?.tribe?.region.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                        {/* <h6>{minAge}</h6> */}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {/* <span className="icon-plane"></span> */}
                        <Image src={moderate}  width= "35px" height= "35px" ></Image>
                      </div>
                      <div className="text">
                        <p>Challenge is {data?.tribe?.challenge?.charAt(0)?.toUpperCase() + data?.tribe?.challenge?.slice(1)}</p>
                        {/* <h6>{tourType}</h6> */}
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                      <Image src={tropical}  width= "35px" height= "35px" ></Image>
                      </div>
                      <div className="text">
                        <p>Climate here is {data?.tribe?.climate?.charAt(0)?.toUpperCase() + data?.tribe?.climate?.slice(1)}</p>
                        {/* <h6>{location}</h6> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="tour-details__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__bottom-inner">
                <div className="tour-details__bottom-left">
                  <ul className="list-unstyled tour-details__bottom-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Posted {date}</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>{superb} Superb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tour-details__bottom-right">
                  <a href="#">
                    <i className="fas fa-share"></i>share
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </section>
  );
};

export default TourDetailsOne;
