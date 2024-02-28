import SingleTour from "@/components/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsLeft = ({data}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">About Experience</h3>
        <p className="tour-details-two__overview-text">{data?.description}</p>
        <div className="destinations-details__overview">
        <h3 className="destinations-details__title">{"Trip Itinerary"}</h3>
        <ul className="list-unstyled destinations-details__overview-list mt-3 mb-5">
            {data?.details?.map((item, index) => (
            <li key={item?._id}>
              <div className="destinations-details__overview-left">
                <p>{"Day" + " " + Number(index + 1)}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{item?.title}</p>
              </div>
            </li>
            ))}
        </ul>
      </div>
        {/* <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {overviewList.slice(0, 4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tour-details-two__overview-bottom-right">
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">About the tribe</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {/* {faq.map(({ id, title, text, lists }) => (
            <div
              className={`accrodion overflow-hidden${
                active === id ? " active" : ""
              }`}
              key={id}
            >
              <div onClick={() => setActive(id)} className="accrodion-title">
                <h4>
                  <span>{title}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === id ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))} */}
            <div
              className={`accrodion overflow-hidden${
                active === 0 ? " active" : ""
              }`}
              key={0}
            >
              <div onClick={() => setActive(0)} className="accrodion-title">
                <h4>
                  <span>{"Home"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 0 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.home}</p>
                </div>
              </div>
            </div>
            <div
              className={`accrodion overflow-hidden${
                active === 1 ? " active" : ""
              }`}
              key={1}
            >
              <div onClick={() => setActive(1)} className="accrodion-title">
                <h4>
                  <span>{"Life"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 1 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.life}</p>
                </div>
              </div>
            </div>
            <div
              className={`accrodion overflow-hidden${
                active === 2 ? " active" : ""
              }`}
              key={2}
            >
              <div onClick={() => setActive(2)} className="accrodion-title">
                <h4>
                  <span>{"Art"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 2 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.art}</p>
                </div>
              </div>
            </div>
            <div
              className={`accrodion overflow-hidden${
                active === 3 ? " active" : ""
              }`}
              key={3}
            >
              <div onClick={() => setActive(3)} className="accrodion-title">
                <h4>
                  <span>{"Celebrations"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 3 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.celebrations}</p>
                </div>
              </div>
            </div>
            <div
              className={`accrodion overflow-hidden${
                active === 4 ? " active" : ""
              }`}
              key={4}
            >
              <div onClick={() => setActive(4)} className="accrodion-title">
                <h4>
                  <span>{"Religion"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 4 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.religion}</p>
                </div>
              </div>
            </div>
            <div
              className={`accrodion overflow-hidden${
                active === 5 ? " active" : ""
              }`}
              key={5}
            >
              <div onClick={() => setActive(5)} className="accrodion-title">
                <h4>
                  <span>{"Social Structure"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 5 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.social_structure}</p>
                </div>
              </div>
            </div>
            <div
              className={`accrodion overflow-hidden${
                active === 6 ? " active" : ""
              }`}
              key={6}
            >
              <div onClick={() => setActive(6)} className="accrodion-title">
                <h4>
                  <span>{"Traditions"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 6 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.traditions}</p>
                </div>
              </div>
            </div>
            <div
              className={`accrodion overflow-hidden${
                active === 7 ? " active" : ""
              }`}
              key={7}
            >
              <div onClick={() => setActive(7)} className="accrodion-title">
                <h4>
                  <span>{"Further knowledge"}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${
                  active === 7 ? "slideInUp d-block" : "slideInDown d-none"
                }`}
              >
                <div className="inner">
                  <p>{data?.tribe?.further_knowledge}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsLeft;
