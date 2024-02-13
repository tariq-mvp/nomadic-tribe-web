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

const TourDetailsLeft = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">About Experience</h3>
        <p className="tour-details-two__overview-text">{overview}</p>
        <div className="destinations-details__overview">
        <h3 className="destinations-details__title">{"Trip Itinerary"}</h3>
        <ul className="list-unstyled destinations-details__overview-list mt-3 mb-5">
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 1"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Arrival in Kolkata. Bengali family stay"}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 2"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Guided day tour of Kolkata city. Bengali family stay"}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 3"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Fly to Bagdogra followed by road trip to South Sikkim"}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 4"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Village walk in traditional Bhutia settlement"}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 5"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Meynam wildlife sanctuary, Local family stay"}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 6"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Drive to Gangtok, the capital of sikkim and a charming"}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 7"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Go for a day tour of Gangtok"}</p>
              </div>
            </li>
            <li>
              <div className="destinations-details__overview-left">
                <p>{"Day 8"}</p>
              </div>
              <div className="destinations-details__overview-right">
                <p>{"Departure day"}</p>
              </div>
            </li>
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
          {faq.map(({ id, title, text, lists }) => (
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
                  <ul className="list-unstyled">
                    {/* {lists.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))} */}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="tour-details-two__location-map"
          allowFullScreen
        ></iframe>
      </div>
      <div className="tour-details-two__related-tours">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <Row>
          {popularTours.slice(0, 2).map((tour) => (
            <Col xl={6} key={tour.id}>
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </div> */}
      {/* <h3 className="tour-details-two__title review-scores__title mt-5">
        Review Scores
      </h3>
      <div className="tour-details__review-score">
        <div className="tour-details__review-score-ave">
          <div className="my-auto">
            <h3>{superb}</h3>
            <p>
              <i className="fa fa-star"></i> Super
            </p>
          </div>
        </div>
        <div className="tour-details__review-score__content">
          {reviewScore.map((review) => (
            <ReviewScoreBar review={review} key={review.id} />
          ))}
        </div>
      </div>
      <div className="tour-details__review-comment">
        {comments.map((comment) => (
          <SingleComment comment={comment} key={comment.id} />
        ))}
      </div> */}
      {/* <ReviewForm reviews={reviews} /> */}
    </div>
  );
};

export default TourDetailsLeft;
